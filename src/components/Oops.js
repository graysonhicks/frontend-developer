import React, {Component} from "react";
import HomeLink from "./HomeLink";
import ParticlesDisplay from "./ParticlesDisplay"
import Fade from "./Fade";
class Oops extends Component {
  render() {
    return (
      <div className="main-container">
        <Fade>
                  <div className="oops">

                    <div className="oops-warning">Sorry! Only so many webpages to go around!</div>
                    <div className="oops-text">Click here to go back home: <HomeLink/></div>
                    <div className="oops-particles-container">
                        <ParticlesDisplay />
                    </div>

                  </div>
        </Fade>

      </div>

    )
  }
}

export default Oops;
