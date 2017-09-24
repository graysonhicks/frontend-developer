import React, {Component} from "react";

import {IoCheckmarkCircled, IoThumbsDown} from "react-icons/lib/io";
import { Table } from 'react-bootstrap';

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

  mapAndReturnSelected(dataChoices, cleanData, choicesKey, dataKey){
    return dataChoices[choicesKey].map((tool, index) => {
      if(tool.replace(/\s/g, "") == cleanData[dataKey]){
        return <tr key={index}><td>{tool}</td><td><IoCheckmarkCircled/></td></tr>
      } else {
        return <tr key={index}><td>{tool}</td><td></td></tr>
      }
    })
  }

  render() {
    const cleanData = this.buildData();
    const dataChoices = this.buildChoices();

    return (
    <div className="specs">
      <div className="box-row">
          <div className="box pto table-box">
              <Table responsive>
                <thead>
                  <tr><th>PTO</th><th></th></tr>
                </thead>
                <tbody>
                  {this.mapAndReturnSelected(dataChoices, cleanData, "PTO", "pto")}
                </tbody>
              </Table>
          </div>
          <div className="box remote table-box">
              <Table responsive>
                <thead>
                  <tr><th>Remote Working</th><th></th></tr>
                </thead>
                <tbody>
                  {this.mapAndReturnSelected(dataChoices, cleanData, "RemoteWorking", "remote")}
                </tbody>
              </Table>
          </div>
            <div className="box workweek">
              <div>{cleanData.workweek} hours</div>
            </div>
        </div>
        <div className="box-row">
          <div className="box workload">
            <div>{cleanData.workload} Team</div>
          </div>
          <div className="box schedule table-box">
              <Table responsive>
                <thead>
                  <tr><th>Schedule Options</th><th></th></tr>
                </thead>
                <tbody>
                  {this.mapAndReturnSelected(dataChoices, cleanData, "ScheduleOptions", "schedule")}
                </tbody>
              </Table>
          </div>
        </div>
    </div>
    );
  }}

  export default Specs;
