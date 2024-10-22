import React from "react";

function Marquee({ val }) {
  return (
    <>
      <div className="flex justify-between w-full py-2">
        {val.map((val, index) => (
          <img src={val} key={index} />
        ))}
      </div>
    </>
  );
}

export default Marquee;
