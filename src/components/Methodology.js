import React, {Component} from "react";

class Methodology extends Component {
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
      <div className="box-container methodology">
        <div className="box checkbox-container">
          <div className="box-heading">Static Code Analysis</div>
          <div className="methodology-descriptions">
            {cleanData.staticcodeanalysis}
          </div>
        </div>
        <div className="box checkbox-container">
          <div className="box-heading">Issue Tracker</div>
          <div className="methodology-descriptions">
            {cleanData.issuetracker}
          </div>
        </div>
        <div className="box checkbox-container">
          <div className="box-heading">Build Server</div>
          <div className="methodology-descriptions">
            {cleanData.buildserver}
          </div>
        </div>
        <div className="box checkbox-container">
          <div className="box-heading">Version Control</div>
          <div className="methodology-descriptions">
            {cleanData.versioncontrol}
          </div>
        </div>
        <div className="box checkbox-container">
          {cleanData.staticcodeanalysis}
        </div>
        <div className="box checkbox-container">
          {cleanData.staticcodeanalysis}
        </div>
        <div className="box checkbox-container">
          {cleanData.staticcodeanalysis}
        </div>
      </div>
    );
  }}

  export default Methodology;
