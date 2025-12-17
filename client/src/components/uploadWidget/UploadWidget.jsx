import { createContext, useEffect, useState } from "react";

const CloudinaryScriptContext = createContext();

function UploadWidget({ uwConfig, setPublicId, setState }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Helper to set loaded
    const checkCloudinary = () => {
      if (window.cloudinary) {
        setLoaded(true);
        return true;
      }
      return false;
    };

    // 1. Check immediately
    if (checkCloudinary()) return;

    // 2. Setup script if missing
    let uwScript = document.getElementById("uw");
    if (!uwScript) {
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "uw");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.addEventListener("load", () => checkCloudinary());
      document.body.appendChild(script);
    }

    // 3. Poll every 100ms for up to 5 seconds to catch lazy loading or race conditions
    const intervalId = setInterval(() => {
      if (checkCloudinary()) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const initializeCloudinaryWidget = () => {
    if (loaded && window.cloudinary) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setState((prev) => [...prev, result.info.secure_url]);
          }
        }
      );

      myWidget.open();
    } else {
      console.error("Cloudinary script not loaded yet!");
      // Fallback: try to verify if it loaded in the meantime
      if (window.cloudinary) {
        setLoaded(true);
      }
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      >
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
export { CloudinaryScriptContext };
