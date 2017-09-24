import React, {Component} from "react";

import {IoCheckmarkCircled, IoArrowDownA, IoAt} from "react-icons/lib/io";

import Fade from "./Fade";
import ParticlesDisplay from "./ParticlesDisplay";

class Other extends Component {
  buildOthers(){
    let others = [];
    let i = 1;
      for (var k in this.props.jobData) {
        if (this.props.jobData.hasOwnProperty(k)) {
          others.push(<div className="others-text" key={i}>{this.props.jobData[k]}</div>)
        }
        i++;
      }
      return others;
  }
  render() {

    return (
      <Fade>
        <div className="other">
          {this.buildOthers()}
          <h1 className="start-screen-heading"><IoAt className="at"/> Gridium</h1>
          <ParticlesDisplay/>
        </div>
      </Fade>
    );
  }}

  export default Other;
