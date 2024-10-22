import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";

import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full   text-white bg-black ">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
      </div>
    </>
  );
};

export default App;
