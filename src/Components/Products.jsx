import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitelVideo from "../assets/arqitel-169.webm";
import ttrVideo from "../assets/ttr-169.webm";
import yirVideo from "../assets/yir2022-169.webm";
import yahooVideo from "../assets/yahoo-169.webm";

function Products() {
  const products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about AI, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "An innovative platform that leverages AI to connect users with personalized content, services, and experiences tailored to their preferences.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "A suite of tools designed to streamline project management, enhance collaboration, and boost productivity for teams of all sizes.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product
          key={index}
          val={val}
          mover={mover}
          count={index}
        />
      ))}

      {/* Floating Window */}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ y: `${pos}rem` }}
          transition={{
            ease: [0.76, 0, 0.24, 1],
            duration: 0.6,
          }}
          className="absolute left-[44%] top-0 w-[20rem] h-[17rem] overflow-hidden rounded-xl"
        >
          {/* Slides */}
          <motion.div
            animate={{ y: `-${pos}rem` }}
            transition={{
              ease: [0.76, 0, 0.24, 1],
              duration: 0.6,
            }}
            className="w-full"
          >
            {/* Arqitel Video */}
            <div className="w-full h-[23rem] bg-black">
              <video
                src={arqitelVideo}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
              />
            </div>

            {/* Other Slides */}
            <div className="w-full h-[23rem] bg-sky-300">
              <video
                src={ttrVideo}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
              />
            </div>
            <div className="w-full h-[23rem] bg-sky-400">
              <video
                src={yirVideo}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
              />
            </div>
            <div className="w-full h-[23rem] bg-sky-500">
              <video
                src={yahooVideo}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;