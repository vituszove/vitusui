import React, { Component } from "react";
import { Link } from "react-router-dom";
import jumpforce from "../images/jumpforce.png";
import witcher3 from "../images/witcher3.png";
import nier from "../images/nier.png";
import assassin from "../images/assassin.png";
import nfs from "../images/nfs.png";
class MainSlider extends Component {
  render() {
    return (
      <div className="slider-container">
        <div className="slide">
          <div className="slide-game-cover">
            <img className="slide-image-logo" src={jumpforce} alt="gameicon" />
            <label className="slide-details-btn">GET STARTED</label>
          </div>
          <div className="slide-content">
            <div className="slide-content-desc">
              <h2>Lorem Ipsum 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="slide-content-playnow">
              <Link to="/games">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                PLAY NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="slide-game-cover">
            <img className="slide-image-logo" src={witcher3} alt="gameicon" />
            <label className="slide-details-btn">GET STARTED</label>
          </div>

          <div className="slide-content">
            <div className="slide-content-desc">
              <h2>Lorem Ipsum 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="slide-content-playnow">
              <Link to="/games">
                <span />
                <span />
                <span />
                <span />
                PLAY NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="slide-game-cover">
            <img className="slide-image-logo" src={nier} alt="gameicon" />
            <label className="slide-details-btn">GET STARTED</label>
          </div>
          <div className="slide-content">
            <div className="slide-content-desc">
              <h2>Lorem Ipsum 3</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="slide-content-playnow">
              <Link to="/games">
                <span />
                <span />
                <span />
                <span />
                PLAY NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="slide-game-cover">
            <img className="slide-image-logo" src={assassin} alt="gameicon" />
            <label className="slide-details-btn">GET STARTED</label>
          </div>
          <div className="slide-content">
            <div className="slide-content-desc">
              <h2>Lorem Ipsum 4</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="slide-content-playnow">
              <Link to="/games">
                <span />
                <span />
                <span />
                <span />
                PLAY NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="slide-game-cover">
            <img className="slide-image-logo" src={nfs} alt="gameicon" />
            <label className="slide-details-btn">GET STARTED</label>
          </div>
          <div className="slide-content">
            <div className="slide-content-desc">
              <h2>Lorem Ipsum 5</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="slide-content-playnow">
              <Link to="/games">
                <span />
                <span />
                <span />
                <span />
                PLAY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainSlider;
