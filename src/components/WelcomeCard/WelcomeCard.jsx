import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';


const WelcomeCard = () => {
  const [scale, setScale] = useState(1);


  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = windowHeight * 2;
      const maxScale = 2; // Define your maximum scale here

      const effectiveScroll = Math.min(scrollY, maxScroll);
      let newScale;

      if (effectiveScroll < maxScroll) {
        newScale = 1 + effectiveScroll / (windowHeight * 2);
      } else {
        newScale = maxScale;
      }

      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



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
      <div style={{ transform: isSmallScreen ? "scale(1)" : `scale(${scale})` }}>
        <img src="../../assets/Group 7.png" className="w-80 m-auto" />
      </div>
    </div>
  );
};

export default WelcomeCard;
