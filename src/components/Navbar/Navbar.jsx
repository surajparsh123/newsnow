import { memo } from "react";
import resets from "../_resets.module.css";
import classes from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = memo(function Style46(props) {
  const handleScrollToRoadmap = () => {
    const element = document.getElementById("roadmap");

    document.getElementById("roadmap").scrollIntoView({ behavior: "smooth" });
    element.style.paddingTop = "200px";
  };
  const handleScrollToGallery = () => {
    const element = document.getElementById("gallery");
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
    element.style.paddingTop = "200px";
  };

  const handleScrollHowToBuy = () => {
    const element = document.getElementById("HowToBuy");
    document.getElementById("HowToBuy").scrollIntoView({ behavior: "smooth" });
    element.style.paddingTop = "200px";
  };

  const handleScrollToTokenomics = () => {
    const element = document.getElementById("Tokenomics");
    document
      .getElementById("Tokenomics")
      .scrollIntoView({ behavior: "smooth" });

    element.style.paddingTop = "200px";
  };

  const handleScrollToCat = () => {
    const element = document.getElementById("CatAction");
    document.getElementById("CatAction").scrollIntoView({ behavior: "smooth" });
    element.style.paddingTop = "200px";
  };

  return (
    <div className={`${resets.clapyResets} ${classes.rootNav}`}>
      <div className={classes.center}>
        <div className={classes.sNBLLogo_21}></div>
      </div>
      <div className={classes.ex1}></div>
      <div className={classes.telegram11}></div>
      <div className={classes.header}>
        <div onClick={handleScrollToCat} className={classes.catInAction}>
          Cat In Action
        </div>
        <div onClick={handleScrollToTokenomics} className={classes.tokenomics}>
          Tokenomics
        </div>
        {/* <div onClick={handleScrollToGallery} className={classes.gallery}>
          Gallery
        </div> */}

        <div className={classes.buySNBL}>Buy $SNBL</div>

        <div onClick={handleScrollToRoadmap} className={classes.roadmap}>
          Roadmap
        </div>

        <div onClick={handleScrollHowToBuy} className={classes.howToBuy}>
          How to buy?
        </div>
      </div>
    </div>
  );
});
