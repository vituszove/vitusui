import React, { Component, Fragment } from "react";
import MainSlider from "./MainSlider";
import Guide from "./Guide";
import NewGame from "./NewGame";
import AllGames from "./AllGames";
import Promotion from "./Promotion";
import Progress from "./Progress";

class Home extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <MainSlider />
        <Guide />
        <NewGame />
        <AllGames />
        <Promotion />
        <Progress />
      </Fragment>
    );
  }
}
export default Home;
