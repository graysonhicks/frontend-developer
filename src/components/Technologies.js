import React, {Component} from "react";
import {IoCheckmarkCircled, IoThumbsDown} from "react-icons/lib/io";

class Technologies extends Component {
  buildData() {
    let j = {
      ...this.props.jobData
    };
    j = this.getOneOfs(j);
    return j;
  }
  buildChoices() {
    let c = {};

    for (var i = 0; i < this.props.methods.length; i++) {
      c[this.props.methods[i].name] = this.props.methods[i]().all.map((item) => {
        // fix circleci here, because to back to back uppercase getting caught and replaced
        return item.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
      });
    }

    return c;
  }

  determineTool(item, dataChoices, cleanData) {
    let choices;
    switch (item) {
      case "testing":
        let testingChoices = [];
        for (var i = 0; i < cleanData.testing.length; i++) {
          for (var k in cleanData.testing[i]) {
            if (cleanData.testing[i].hasOwnProperty(k)) {
              testingChoices.push(
                <div key={i}>{k}
                  : {cleanData.testing[i][k]}</div>
              );
            }
          }

        }
        return testingChoices;
      case "framework":
        let frameworkChoices = [];
        for (var i = 0; i < cleanData.framework.length; i++) {
          for (var k in cleanData.framework[i]) {
            if (cleanData.framework[i].hasOwnProperty(k)) {
              frameworkChoices.push(
                <div key={i}>{k}
                  : {cleanData.framework[i][k]}</div>
              );
            }
          }

        }
        return frameworkChoices;
      default:
        choices = dataChoices.Level.map((tool, index) => {

          if (tool.replace(/\s/g, "") == cleanData[item]) {
            return <div key={index}>{tool}
              <IoCheckmarkCircled/></div>
          } else {
            return <div key={index}>{tool}</div>
          }

        });
        return choices;

    }
  }

  getOneOfs(obj) {
    Object.keys(obj).map((item) => {
      let tempArray = [];
      if (obj[item].hasOwnProperty('oneof')) {
        Object.keys(obj[item]["oneof"]).map((key, index) => {
          const tempObj = {};
          tempObj[key] = obj[item]["oneof"][key];
          tempArray.push(tempObj);
        })
        obj[item] = tempArray;
      }

    })
    return obj;
  }

  render() {
    const cleanData = this.buildData();
    console.log(cleanData);
    const dataChoices = this.buildChoices();
    console.log(dataChoices);

    return (
      <div className="equipment">
        <div className="box-row">
          {Object.keys(cleanData).map((item, index) => {
            return (
              <div key={index} className={"box " + item}>
                <div className="box-heading">
                  {item}
                </div>
                {this.determineTool(item, dataChoices, cleanData)}
              </div>
            )

          })}

        </div>
      </div>
    )
  }
}

export default Technologies;
