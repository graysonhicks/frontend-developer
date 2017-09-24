import React, {Component} from "react";

import {IoCheckmarkCircled, IoThumbsDown, IoArrowDownA, IoAt} from "react-icons/lib/io";

import Fade from "./Fade";

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
          <div className="other-heading">Here's the bottom line <IoArrowDownA/></div>
          {this.buildOthers()}
          <div className=""><IoAt /></div>
          <h1 className="start-screen-heading">Gridium</h1>
        </div>
      </Fade>
    );
  }}

  export default Other;
