import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { motion } from "framer-motion";
function Work() {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      left: "50%",
      top: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      left: "56%",
      top: "44%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      left: "45%",
      top: "57%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      left: "60%",
      top: "54%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      left: "44%",
      top: "54%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      left: "51%",
      top: "68%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    const showImages = (arr) => {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    };
    switch (Math.floor(data * 100)) {
      case 2:
        showImages([]);
        break;
      case 4:
        showImages([0]);
        break;
      case 6:
        showImages([0, 1]);
        break;
      case 8:
        showImages([0, 1, 2]);
        break;
      case 10:
        showImages([0, 1, 2, 3]);
        break;
      case 12:
        showImages([0, 1, 2, 3, 4]);
        break;
      case 14:
        showImages([0, 1, 2, 3, 4, 5]);
        break;
    }
  });
  return (
    <>
      <div className="w-full select-none">
        <div className="relative max-w-screen-xl  mx-auto text-white text-center my-32">
          <h1 className="text-[25vw] font-semibold leading-none tracking-tight">
            Work
          </h1>
          <div className="absolute top-0 w-full h-full ">
            {images.map(
              (ele, index) =>
                ele.isActive && (
                  <img
                    src={`${ele.url}`}
                    key={index}
                    className="w-60 absolute  rounded-lg -translate-x-[50%] -translate-y-[50%]"
                    alt="An image of work"
                    style={{ top: ele.top, left: ele.left }}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
