import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <>
      <div className="w-full p-0 m-0 bg-black ">
        <div className="max-w-screen-xl   mx-auto py-3  flex items-center	 justify-between ">
          <div className="nleft items-center	flex">
            <img
              src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt="Refokus Logo"
            />
            <div className="links flex items-center ml-32 gap-20">
              {["Home", "Work", "About", "News", "Careers"].map(
                (ele, index) => (
                  <a
                    className="text-sm cursor-pointer flex items-center gap-2"
                    key={index}
                  >
                    {index === 1 && (
                      <span
                        className="inline-block w-2 h-2 rounded-full "
                        style={{
                          boxShadow: "0 0 0.25em #00FF19",
                          backgroundColor: "#00FF19",
                        }}
                      ></span>
                    )}
                    {ele}
                  </a>
                )
              )}
            </div>
          </div>
          <Button className="nright" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
