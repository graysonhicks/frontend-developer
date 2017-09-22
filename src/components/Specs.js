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

  determineTool(item, dataChoices, cleanData){
    let choices;
    switch (item) {
      case "pto":
        choices = dataChoices.PTO.map((tool, index) => {
          if(tool.replace(/\s/g, "") == cleanData.pto){
            return <div key={index}>{tool} <IoCheckmarkCircled/></div>
          } else {
            return <div key={index}>{tool}</div>
          }
        })
        return choices;
      case "remote":
        choices = dataChoices.RemoteWorking.map((tool, index) => {
          if(tool.replace(/\s/g, "") == cleanData.remote){
            return <div key={index}>{tool} <IoCheckmarkCircled/></div>
          } else {
            return <div key={index}>{tool}</div>
          }
        })
        return choices;
      case "schedule":
        choices = dataChoices.ScheduleOptions.map((tool, index) => {
          if(tool.replace(/\s/g, "") == cleanData.schedule){
            return <div key={index}>{tool} <IoCheckmarkCircled/></div>
          } else {
            return <div key={index}>{tool}</div>
          }
        })
      return choices;
      case "workload":
          return <div>{cleanData.workload} Team</div>
        break;
      case "workweek":
          return <div>{cleanData.workweek} hours</div>
        break;
      default:

    }
  }

  render() {
    const cleanData = this.buildData();
    const dataChoices = this.buildChoices();

    return (
    <div className="specs">

        {Object.keys(cleanData).map((item, index) => {
          return (
            <div key={index} className="specs-items">
              <div className="specs-heading">{item}:</div>
               {this.determineTool(item, dataChoices, cleanData)}
            </div>
          )
        })}

    </div>
    );
  }}

  export default Specs;
