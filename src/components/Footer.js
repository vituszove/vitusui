import React from "react";
import jumpforce from "../images/jumpforce.png";
import witcher3 from "../images/witcher3.png";
import nier from "../images/nier.png";
import assassin from "../images/assassin.png";
import nfs from "../images/nfs.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <h2 className="white-text">Games Provider</h2>
        <div className="provider-game-logo">
          <img src={jumpforce} alt="game-logo" />
          <img src={witcher3} alt="game-logo" />
          <img src={nier} alt="game-logo" />
          <img src={assassin} alt="game-logo" />
          <img src={nfs} alt="game-logo" />
        </div>
        <div className="footer-line"></div>
        <div className="bottom-footer">
          &copy; Copyright 2020 Vitus Wee. All right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
