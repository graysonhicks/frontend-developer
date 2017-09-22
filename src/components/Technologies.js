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
        for (var i = 0; i < cleanData.testing.length; i++) {
          console.log(cleanData.testing[i]);
          choices = dataChoices.Level.map((tool) => {

            if (tool.replace(/\s/g, "") == cleanData[item]) {
              return <div>{tool}
                <IoCheckmarkCircled/></div>
            } else {
              return <div>{tool}</div>
            }
          })
        }
        return choices;
      case "framework":
        for (var i = 0; i < cleanData.testing.length; i++) {
          console.log(cleanData.testing[i]);
          choices = dataChoices.Level.map((tool) => {

            if (tool.replace(/\s/g, "") == cleanData[item]) {
              return <div>{tool}
                <IoCheckmarkCircled/></div>
            } else {
              return <div>{tool}</div>
            }
          })
        }
        return choices;
      default:
        choices = dataChoices.Level.map((tool) => {

          if (tool.replace(/\s/g, "") == cleanData[item]) {
            return <div>{tool}
              <IoCheckmarkCircled/></div>
          } else {
            return <div>{tool}</div>
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
          {Object.keys(cleanData).map((item) => {
            return (
              <div className={"box " + item}>
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
