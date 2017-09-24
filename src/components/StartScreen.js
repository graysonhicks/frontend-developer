import React, {Component} from "react";

import Left from "./Left";
import HomeLink from "./HomeLink";
import ParticlesDisplay from "./ParticlesDisplay";

import Fade from "./Fade";

class StartScreen extends Component {

  render() {
    return (
      <div>
      <Left jobData={this.props.jobData}></Left>
      <Fade>
        <div className="start-screen">
          <ParticlesDisplay />
          <div>
            <h1 className="start-screen-heading">Gridium</h1>
            <p className="start-screen-description">Use the menu to the left to explore the qualities of a typical developer here at Gridium.</p>
          </div>
        </div>
      </Fade>

    </div>
    )
  }
}

export default StartScreen;
