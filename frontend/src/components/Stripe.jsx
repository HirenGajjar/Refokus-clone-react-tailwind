import React from "react";

function Stripe({ val }) {
  return (
    <>
      <>
        <div className="border-zinc-800 border-r-[1px]  border-t-[1px] border-b-[1px]  flex justify-between items-center w-[16.66%] px-8 h-[70px]">
          <img src={val.url} alt="A stripe icon" />
          <span>{val.number}</span>
        </div>
      </>
    </>
  );
}

export default Stripe;
