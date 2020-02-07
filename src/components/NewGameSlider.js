import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import jumpforce from "../images/jumpforce.png";
import witcher3 from "../images/witcher3.png";
import nier from "../images/nier.png";
import assassin from "../images/assassin.png";
import nfs from "../images/nfs.png";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div className="slick-next-btn" style={{ ...style }} onClick={onClick}>
      <span>></span>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div className="slick-prev-btn" style={{ ...style }} onClick={onClick}>
      <span>{"<"}</span>
    </div>
  );
}

class NewGameSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <Slider {...settings}>
        <div className="newgame-slide1">
          <img className="newgame-image-logo" src={jumpforce} alt="gameicon" />
          <div className="newgame-playnow-container">
            <div className="newgame-playnow-inner"></div>{" "}
            <Link to="/" className="newgame-playnow-btn">
              PLAY NOW
            </Link>
          </div>
        </div>
        <div className="newgame-slide2">
          <img className="newgame-image-logo" src={witcher3} alt="gameicon" />
          <div className="newgame-playnow-container">
            <div className="newgame-playnow-inner"></div>{" "}
            <Link to="/" className="newgame-playnow-btn">
              PLAY NOW
            </Link>
          </div>
        </div>
        <div className="newgame-slide3">
          <img className="newgame-image-logo" src={nier} alt="gameicon" />
          <div className="newgame-playnow-container">
            <div className="newgame-playnow-inner"></div>{" "}
            <Link to="/" className="newgame-playnow-btn">
              PLAY NOW
            </Link>
          </div>
        </div>
        <div className="newgame-slide4">
          <img className="newgame-image-logo" src={assassin} alt="gameicon" />
          <div className="newgame-playnow-container">
            <div className="newgame-playnow-inner"></div>{" "}
            <Link to="/" className="newgame-playnow-btn">
              PLAY NOW
            </Link>
          </div>
        </div>
        <div className="newgame-slide5">
          <img className="newgame-image-logo" src={nfs} alt="gameicon" />
          <div className="newgame-playnow-container">
            <div className="newgame-playnow-inner"></div>{" "}
            <Link to="/" className="newgame-playnow-btn">
              PLAY NOW
            </Link>
          </div>
        </div>
        <div className="newgame-slide6">
          <img className="newgame-image-logo" src={jumpforce} alt="gameicon" />
          <div className="newgame-playnow-container">
            <div className="newgame-playnow-inner"></div>{" "}
            <Link to="/" className="newgame-playnow-btn">
              PLAY NOW
            </Link>
          </div>
        </div>
      </Slider>
    );
  }
}
export default NewGameSlider;
