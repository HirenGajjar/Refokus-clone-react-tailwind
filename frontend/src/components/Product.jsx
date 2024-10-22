import React from "react";
import Button from "./Button";

function Product({ val, frameMover, index }) {
  return (
    <>
      <div className="w-full py-20 h-[23rem] text-white">
        <div
          onMouseEnter={() => frameMover(index)}
          className="max-w-screen-xl mx-auto flex items-center justify-between"
        >
          <h1 className="text-6xl font-medium">{val.title}</h1>
          <div className="dets w-1/3">
            <p className="mb-10">{val.description}</p>
            <div className="flex gap-2 items-center ">
              {val.live && <Button title="Live Demo" />}
              {val.caseStudy && <Button title="Case Study" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
