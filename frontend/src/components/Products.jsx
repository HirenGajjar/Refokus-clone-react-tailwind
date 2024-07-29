import React from "react";
import Product from "./Product";
function Products() {
  const products = [
    {
      title: "Arqitle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti neque temporibus minima possimus dolores officiis amet quo vel! Inventore.",
      live: true,
      caseStudy: true,
    },
    {
      title: "Cula",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti neque temporibus minima possimus dolores officiis amet quo vel! Inventore.",
      live: true,
      caseStudy: true,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti neque temporibus minima possimus dolores officiis amet quo vel! Inventore.",
      live: true,
      caseStudy: true,
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
      caseStudy: true,
    },
    {
      title: "Magic",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti neque temporibus minima possimus dolores officiis amet quo vel! Inventore.",
      live: true,
      caseStudy: true,
    },
  ];
  return (
    <>
      <div className="w-full">
        {products.map((val, index) => (
          <Product val={val} />
        ))}
      </div>
    </>
  );
}

export default Products;
