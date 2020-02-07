import React, { Component } from "react";
import shield from "../images/icons/shield.png";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <div className="nav-left">
          <Link to="/Link1">Link 1</Link>
          <Link to="/Link2">Link 2</Link>
          <Link to="/Link3">Link 3</Link>
          <Link to="/Link4">Link 4</Link>
        </div>

        <div className="nav-center">
          <Link to="/">Merchant Logo</Link>
        </div>

        <div className="nav-right">
          <Link to="/login" className="login-btn">
            Log in
          </Link>
          <Link to="/signup" className="signup-btn">
            <img src={shield} alt="protection" /> Sign up
          </Link>
        </div>
      </div>
    );
  }
}
export default NavBar;
