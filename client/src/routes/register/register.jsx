import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { Reveal } from "../../components/animations/Reveal";
import { motion } from "framer-motion";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!username || !email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-5xl flex flex-row-reverse bg-white rounded-3xl shadow-xl overflow-hidden min-h-[600px]">
        <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <Reveal>
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">Create Account</h1>
              <p className="text-gray-500">Join our exclusive community today</p>
            </div>
          </Reveal>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Reveal delay={0.1}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">Username</label>
                <input
                  name="username"
                  type="text"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 outline-none placeholder:text-gray-400 font-medium"
                  placeholder="Choose a username"
                />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 outline-none placeholder:text-gray-400 font-medium"
                  placeholder="Enter your email"
                />
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 outline-none placeholder:text-gray-400 font-medium"
                  placeholder="Create a password"
                />
              </div>
            </Reveal>

            {error && (
              <Reveal>
                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {error}
                </div>
              </Reveal>
            )}

            <Reveal delay={0.4}>
              <button
                disabled={isLoading}
                className="w-full bg-amber-500 text-white font-bold p-4 rounded-xl hover:bg-amber-600 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed mt-2"
              >
                {isLoading ? "Creating Account..." : "Register"}
              </button>
            </Reveal>

            <Reveal delay={0.5}>
              <p className="text-center text-gray-500 text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-gray-900 font-bold hover:text-gyay-900 hover:underline">
                  Sign In
                </Link>
              </p>
            </Reveal>
          </form>
        </div>

        <div className="hidden md:block w-1/2 relative bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-bl from-amber-500/20 to-black/40 z-10" />
          <img
            src="/bg.png"
            alt="EstateX Luxury"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute bottom-0 left-0 right-0 p-12 z-20 text-white">
            <Reveal direction="up" delay={0.6}>
              <h2 className="text-3xl font-serif font-bold mb-4 leading-tight">"Invest in your future, today."</h2>
              <p className="text-white/80 font-light text-lg">Experience the pinnacle of real estate excellence.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Register;
