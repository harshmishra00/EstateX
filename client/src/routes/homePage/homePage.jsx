import { useContext, Suspense } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import { useLoaderData, Await } from "react-router-dom";
import SliderCard from "../../components/sliderCard/SliderCard";
import WeSell from "../../components/we_Sell/we-Sell";
import Kitchens from "../../components/Kitchens/Kitchens";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import Interiors from "../../components/Interiors/Interiors";
import { motion } from "framer-motion";
import { Reveal } from "../../components/animations/Reveal";


function HomePage() {
  const { currentUser } = useContext(AuthContext);
  const data = useLoaderData();

  return (
    <div className="homePage">
      <div className="topSection">
        <div className="textContainer">
          <div className="wrapper">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="title"
            >
              Find Real Estate & Get Your Dream Place
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              explicabo suscipit cum eius, iure est nulla animi consequatur
              facilis id pariatur fugit quos laudantium temporibus dolor ea
              repellat provident impedit!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <SearchBar />
            </motion.div>

            <motion.div
              className="boxes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
              </div>
              <div className="box">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="imgContainer">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            src="/bg.png" alt=""
          />
        </div>
      </div>

      <Reveal width="100%">
        <div className="sliderContainer">
          <div className="flex justify-between items-center mb-5 pr-4">
            <h1 className="text-2xl font-bold">Featured Properties</h1>
            <a
              href="/all-apartments"
              className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors font-medium text-sm flex items-center gap-2"
            >
              View All Apartments
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => {

                const sliderItems = [
                  ...postResponse.data,
                  ...postResponse.data,
                  ...postResponse.data,
                  ...postResponse.data
                ];
                return (
                  <div className="sliderWrapper">
                    {sliderItems.map((post, index) => (
                      <SliderCard key={`${post.id}-${index}`} item={post} />
                    ))}
                  </div>
                );
              }}
            </Await>
          </Suspense>
        </div>
      </Reveal>

      <Reveal width="100%"><WeSell /></Reveal>
      <Reveal width="100%"><Kitchens /></Reveal>
      <Reveal width="100%"><Interiors /></Reveal>
      <Reveal width="100%"><WhyChooseUs /></Reveal>
    </div>
  );
}

export default HomePage;
