import React, {Component} from "react";
import HomeLink from "./HomeLink";

class Oops extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="oops">

          <div className="oops-warning">Sorry! Only so many webpages to go around!</div>
          <div className="oops-text">Click here to go back home: <HomeLink/></div>
        </div>
      </div>

    )
  }
}

export default Oops;
