import React, {Component} from "react";
import {IoCheckmarkCircled, IoThumbsDown} from "react-icons/lib/io";

class Specs extends Component {
  buildData() {
    const j = {
      ...this.props.jobData
    };
    return j;
  }
  buildChoices() {
    const c = {};
    for (var i = 0; i < this.props.methods.length; i++) {
      c[this.props.methods[i].name] = this.props.methods[i]().all.map((item) => {
        return item.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
      });
    }
    return c;
  }

  render() {
    const cleanData = this.buildData();
    console.log(cleanData);
    const dataChoices = this.buildChoices();
    // console.log(dataChoices);

    return (
    <div className="specs">

        {Object.keys(cleanData).map((item, index) => {
          return (
            <div className="specs-items">
              <div className="specs-heading">{item}:</div>
              <div>{cleanData[item]}</div>
            </div>
          )
        })}

    </div>
    );
  }}

  export default Specs;
