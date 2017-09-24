
import React, {Component} from "react";
import {IoCheckmarkCircled, IoThumbsDown} from "react-icons/lib/io";
import { Table } from 'react-bootstrap';

import Fade from "./Fade";

class Equipment extends Component {
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

        item = item.replace(/([a-z])([A-Z])/g, '$1 $2');
        item = item.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
        return item;
      });
    }

    return c;
  }

    mapAndReturnSelected(dataChoices, cleanData, choicesKey, dataKey){
      return dataChoices[choicesKey].map((tool, index) => {
        let dataMatch = ((typeof cleanData[dataKey] == 'object') ? cleanData[dataKey][index] : cleanData[dataKey]);
        if(tool.replace(/\s/g, "") == dataMatch){
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
      <div className="equipment">
        <div className="box-row">
            <div className="box operating-systems table-box">
              <Fade>
                <Table responsive>
                  <thead>
                    <tr><th>Operating Systems</th><th></th></tr>
                  </thead>
                  <tbody>
                      {this.mapAndReturnSelected(dataChoices, cleanData, "OperationSystems", "operatingsystem")}
                  </tbody>
                </Table>
              </Fade>
            </div>
            <div className="box machine-type table-box">
              <Fade>
                <Table responsive>
                  <thead>
                    <tr><th>Operating Systems</th><th></th></tr>
                  </thead>
                  <tbody>
                        {this.mapAndReturnSelected(dataChoices, cleanData, "MachineType", "computer")}
                  </tbody>
                </Table>
              </Fade>
            </div>
        </div>
    </div>
    )
  }}

  export default Equipment;
