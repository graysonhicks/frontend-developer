import React, {Component} from "react";
import {IoCheckmarkCircled, IoThumbsDown} from "react-icons/lib/io";

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
    <div className="methodology">
      <div className="box-row">
        <div className="box checkbox-container">
          <div className="box-heading">Static Code Analysis</div>
          <div className="methodology-descriptions">
            {cleanData.staticcodeanalysis}
          </div>
        </div>
        <div className="box checkbox-container flex-2 pigment-indigo">
          <div className="box-heading">Issue Tracker</div>
          <div className="methodology-descriptions">
            {cleanData.issuetracker}
          </div>
        </div>
        <div className="box checkbox-container flex-3">
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
      </div>
      <div className="box-row">
            <div className="box checkbox-container">
              <div className="box-heading">Code Reviews</div>
              {cleanData.codereviews ? (<IoCheckmarkCircled/>) : <IoThumbsDown/>}
              <div className="box-heading">Commit On Day One</div>
              {cleanData.commitondayone ? (<IoCheckmarkCircled/>) : <IoThumbsDown/>}
              <div className="box-heading">Fail Fast</div>
              {cleanData.failfast ? (<IoCheckmarkCircled/>) : <IoThumbsDown/>}
              <div className="box-heading">Standups</div>
              {cleanData.standups ? (<IoCheckmarkCircled/>) : <IoThumbsDown/>}
            </div>
            <div className="box checkbox-container french-pass">
              <div className="box-heading">Integration Tests</div>
              {cleanData.integrationtests ? (<IoCheckmarkCircled/>) : <IoThumbsDown/>}
              <div className="box-heading">Prototyping</div>
              {cleanData.prototyping ? (<IoCheckmarkCircled/>) : <IoThumbsDown/>}
              <div className="box-heading">Quick Start</div>
              {cleanData.quickstart ? (<IoCheckmarkCircled/>) : <IoThumbsDown/>}
              <div className="box-heading">Unit Tests</div>
              {cleanData.unittests ? (<IoCheckmarkCircled/>) : <IoThumbsDown/>}
            </div>
        </div>
      </div>
    );
  }}

  export default Methodology;
