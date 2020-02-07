import React, { Component } from "react";
import AllGamesRow from "../components/AllGamesRow";
import controller from "../images/icons/controller.png";
import filter from "../images/icons/filter.png";
class AllGames extends Component {
  render() {
    return (
      <div className="allgames-section">
        <div className="allgames-container white-text">
          <div className="allgames-title">
            <img src={controller} alt="game-console" />
            <h2>All Games</h2>
          </div>
          <div>
            <button className="filter-button">
              <img src={filter} alt="filter" className="filter-icon" />
              Filter
            </button>
          </div>
        </div>
        <div className="allgames-row">
          <AllGamesRow />
        </div>
        <div className="allgames-row">
          <AllGamesRow />
        </div>
      </div>
    );
  }
}
export default AllGames;
