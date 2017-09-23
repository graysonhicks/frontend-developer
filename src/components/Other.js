import React, {Component} from "react";

import {IoCheckmarkCircled, IoThumbsDown} from "react-icons/lib/io";

class Other extends Component {
  buildOthers(){
    let others = [];
    let i = 1;
      for (var k in this.props.jobData) {
        if (this.props.jobData.hasOwnProperty(k)) {
          others.push(<div key={i}>{this.props.jobData[k]}</div>)
        }
        i++;
      }
      console.log(others);
      return others;
  }
  render() {
console.log(this.props);
    return (
    <div className="other">
      {this.buildOthers()}
    </div>
    );
  }}

  export default Other;
