import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
function Products() {
  const [position, setPosition] = useState(23);

  const frameMover = (val) => {
    setPosition(val * 23);
  };

  const products = [
    {
      title: "Arqitle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti neque temporibus minima possimus dolores officiis amet quo vel! Inventore.",
      live: true,
      caseStudy: false,
    },
    {
      title: "Cula",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti neque temporibus minima possimus dolores officiis amet quo vel! Inventore.",
      live: true,
      caseStudy: false,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti neque temporibus minima possimus dolores officiis amet quo vel! Inventore.",
      live: true,
      caseStudy: false,
    },
    {
      title: "Maniv",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti neque temporibus minima possimus dolores officiis amet quo vel! Inventore.",
      live: true,
      caseStudy: true,
    },
    {
      title: "Singularity",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti neque temporibus minima possimus dolores officiis amet quo vel! Inventore.",
      live: true,
      caseStudy: false,
    },
    {
      title: "Magic",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti neque temporibus minima possimus dolores officiis amet quo vel! Inventore.",
      live: true,
      caseStudy: false,
    },
  ];
  return (
    <>
      <div className="mt-32 relative">
        {products.map((val, index) => (
          <Product
            val={val}
            key={index}
            frameMover={frameMover}
            index={index}
          />
        ))}
        <div className="h-full w-full absolute top-0  pointer-events-none">
          <motion.div
            initial={{ y: position, x: "-50%" }}
            animate={{ y: position + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window absolute w-[32rem] h-[23rem] bg-white left-[45%]   overflow-hidden"
          >
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full bg-red-700"
            ></motion.div>
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full bg-green-700"
            ></motion.div>
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full bg-gray-700"
            ></motion.div>
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full bg-orange-700"
            ></motion.div>
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full bg-purple-700"
            ></motion.div>
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full bg-pink-700"
            ></motion.div>
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className=" w-full h-full bg-sky-700"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Products;
