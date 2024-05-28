import { memo } from 'react';
import React from 'react';

import resets from '../_resets.module.css';
import classes from './Footer.module.css';




const Footer = memo(function Footer(props = {}) {
  return (
    <div className={classes.main}>
      <div className={classes.rectangle5746}>

      </div>
      <div className='absolute w-full -mt-72 mb-2 sm:block hidden'>
      <img src= "https://iili.io/JQ0deTX.png" />
           
      </div>



      <div className=''>
      {/* <div className={classes.file161}>
      </div> */}
      <div className={classes.ex1}>

      </div>
      <div className={classes.telegram11}></div>
     
      <div className={classes.sNOWBELL}>SNOWBELL</div>
      <div className={classes.whenLifeGetsHotBeASnowbell}>When Life Gets Hot, Be a Snowbell!</div>
        
      </div>
   
    </div>
  );
});

export default Footer;
