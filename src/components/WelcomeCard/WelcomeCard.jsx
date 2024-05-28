import React from "react";

const WelcomeCard = () => {
  return (
    <div className="w-full">
      <h1 className="text-white text-8xl w-full text-center">
        Welcome to Snowbell Cat
      </h1>

      <p className="text-white text-center px-32 py-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <div>
        <img src="src\assets\Group 7.png" className="w-80 m-auto" />
      </div>
    </div>
  );
};

export default WelcomeCard;
