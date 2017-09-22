import React, {Component} from "react";
import {IoCheckmarkCircled, IoThumbsDown} from "react-icons/lib/io";

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
    // fix circleci here, because to back to back uppercase getting caught and replaced
        return item.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
      });
    }

    return c;
  }

  render() {
    const cleanData = this.buildData();
    console.log(cleanData);
    const dataChoices = this.buildChoices();
    console.log(dataChoices);

    return (
      <div className="equipment">
        <div className="box-row">
          <div className="box">
            <div className="box-heading">
              Operating Systems
            </div>
            {dataChoices.OperationSystems.map((tool) => {
              if(tool.replace(/\s/g, "") == cleanData.operatingsystem){
                return <div>{tool} <IoCheckmarkCircled/></div>
              } else {
                return <div>{tool}</div>
              }

            })}
          </div>
                <div className="box">
                  <div className="box-heading">
                    Machine Type
                  </div>
                  {dataChoices.MachineType.map((tool) => {
                    if(tool.replace(/\s/g, "") == cleanData.computer){
                      return <div>{tool} <IoCheckmarkCircled/></div>
                    } else {
                      return <div>{tool}</div>
                    }

                  })}
                </div>
            </div>
        </div>
    )
  }}

  export default Equipment;
