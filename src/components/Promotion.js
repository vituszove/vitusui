import React, { Component } from "react";
import gift from "../images/icons/gift.png";
import promotion1 from "../images/promotion1.jpg";
import promotion2 from "../images/promotion2.jpg";
class Promotion extends Component {
  state = {};
  render() {
    return (
      <div className="promotion-section">
        <div className="promotion-container">
          <img src={gift} alt="gift" />
          <div className="promotion-title">
            <h2>Promotion</h2>
            <p>Sweet offers for you</p>
          </div>
        </div>
        <div className="promotion-row">
          <div className="promotion-image-container">
            <div className="promotion-image">
              <img src={promotion1} alt="promotion1" />
            </div>
            <div className="promotion-content">
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="#!" className="promotion-btn">
                Get it now
              </a>
            </div>
          </div>
          <div className="promotion-image-container m-l-30">
            <div className="promotion-image">
              <img src={promotion2} alt="promotion1" />
            </div>
            <div className="promotion-content">
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="#!" className="promotion-btn">
                Get it now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Promotion;
