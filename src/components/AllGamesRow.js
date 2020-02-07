import React, { Component } from "react";

class AllGamesRow extends Component {
  state = {};
  render() {
    return (
      <div className="allgames-img-row">
        <div className="allgames-1 allgames-content">
          <a href="!#" className="all-games-playnow-btn">
            <i className="fa fa-play"></i>
          </a>
        </div>
        <div className="allgames-2 allgames-content">
          <a href="!#" className="all-games-playnow-btn">
            <i className="fa fa-play"></i>
          </a>
        </div>
        <div className="allgames-3 allgames-content">
          <a href="!#" className="all-games-playnow-btn">
            <i className="fa fa-play"></i>
          </a>
        </div>
        <div className="allgames-4 allgames-content">
          <a href="!#" className="all-games-playnow-btn">
            <i className="fa fa-play"></i>
          </a>
        </div>
        <div className="allgames-5 allgames-content">
          <a href="!#" className="all-games-playnow-btn">
            <i className="fa fa-play"></i>
          </a>
        </div>

        {/* <img src={jumpforce} alt="game" />
        <img src={witcher3} alt="game" />
        <img src={nier} alt="game" />
        <img src={assassin} alt="game" />
        <img src={nfs} alt="game" /> */}
      </div>
    );
  }
}

export default AllGamesRow;
