import React from "react";
import classes from "../HowToBuy/HowToBuy.module.css";
import logo from "../../assets/vecteezy_uniswap-uni-glass-crypto-coin-3d-illustration_24093487 1.png"; // Ensure to replace this with the actual path to your image

const HowToBuy = () => {
  return (
    <div className=" text-white min-h-screen flex items-center justify-center p-10">
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-10 space-y-10 md:space-y-0 justify-center relative">
        <div className="absolute bottom-18 -mt-24 top-0">
          <img
            src={logo}
            alt="Uniswap Logo"
            className="w-20 h-20 md:w-40 md:h-40"
          />
        </div>
        <div
          className={`${classes?.bgcolor} p-6 rounded-lg flex items-center w-1/2 z-20`}
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">How to buy on Uniswap?</h2>
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
          </div>
        </div>
        <div className="bg-[#778640]  p-6 rounded-lg flex items-center justify-center w-80 h-80">
          <h2 className="text-2xl font-bold">WEB VIEW</h2>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
