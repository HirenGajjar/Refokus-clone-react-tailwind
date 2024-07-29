import React from "react";
import Button from "./Button";

function Product({ val }) {
  return (
    <>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-20 ">
        <h1 className="font-semibold text-6xl">{val.title}</h1>
        <div className="py-4">
          <p className="max-w-72 mb-8">{val.description}</p>
          <div className="flex items-center gap-4">
            {val.live && <Button title="Live" />}
            {val.caseStudy && <Button title="Live" />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
