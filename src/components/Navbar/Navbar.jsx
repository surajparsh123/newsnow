import { memo } from "react";
import resets from "../_resets.module.css";
import classes from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = memo(function Style46(props) {
  const handleScrollToRoadmap = () => {
    document.getElementById("roadmap").scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToGallery = () => {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollHowToBuy = () => {
    document.getElementById("HowToBuy").scrollIntoView({ behavior: "smooth" });
  };


  const handleScrollToTokenomics = () => {
    document.getElementById("Tokenomics").scrollIntoView({ behavior: "smooth" });
  };


  const handleScrollToCat = () => {
    document.getElementById("CatAction").scrollIntoView({ behavior: "smooth" });
  };

  

  return (
    <div className={`${resets.clapyResets} ${classes.rootNav}`}>
      <div className={classes.center}>
        <div className={classes.sNBLLogo_21}></div>
      </div>
      <div className={classes.ex1}></div>
      <div className={classes.telegram11}></div>
      <div className={classes.header}>
        <div onClick={handleScrollToCat} className={classes.catInAction}>Cat In Action</div>
        <div onClick={handleScrollToTokenomics} className={classes.tokenomics}>Tokenomics</div>
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
