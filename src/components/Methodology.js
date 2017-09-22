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
    <div className="methodology">
      <div className="box-row">
        <div className="box">
          <div className="box-heading">Static Code Analysis</div>
          <div className="methodology-descriptions">
            {dataChoices.CodeAnalysisTools.map((tool) => {
              if(tool.replace(/\s/g, "") == cleanData.staticcodeanalysis){
                return <div>{tool} <IoCheckmarkCircled/></div>
              } else {
                return <div>{tool}</div>
              }

            })}
          </div>
        </div>
        <div className="box flex-2 pigment-indigo">
          <div className="box-heading">Issue Tracker</div>
          <div className="methodology-descriptions">
                {dataChoices.IssueTrackers.map((tool) => {
                    if(tool.replace(/\s/g, "") == cleanData.issuetracker){
                      return <div>{tool} <IoCheckmarkCircled/></div>
                    } else {
                      return <div>{tool}</div>
                    }

                })}
          </div>
        </div>
        <div className="box flex-3">
          <div className="box-heading">Build Server</div>
          <div className="methodology-descriptions">

                {dataChoices.BuildServers.map((tool) => {
                  if(tool.replace(/\s/g, "") == cleanData.buildserver){
                    return <div>{tool} <IoCheckmarkCircled/></div>
                  } else {
                    return <div>{tool}</div>
                  }

                })}
          </div>
        </div>
        <div className="box">
          <div className="box-heading">Version Control</div>
          <div className="methodology-descriptions">
                {dataChoices.VersionControlSystem.map((tool) => {
                  if(tool.replace(/\s/g, "") == cleanData.versioncontrol){
                    return <div>{tool} <IoCheckmarkCircled/></div>
                  } else {
                    return <div>{tool}</div>
                  }

                })}
          </div>
        </div>
      </div>
      <div className="box-row">
            <div className="box checkbox-container">
              <div className="box-heading ">Code Reviews {cleanData.codereviews ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

              <div className="box-heading ">Commit On Day One {cleanData.commitondayone ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

              <div className="box-heading ">Fail Fast {cleanData.failfast ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

              <div className="box-heading ">Standups   {cleanData.standups ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

            </div>
            <div className="box checkbox-container french-pass">
              <div className="box-heading ">Integration Tests {cleanData.integrationtests ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

              <div className="box-heading ">Prototyping {cleanData.prototyping ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

              <div className="box-heading ">Quick Start {cleanData.quickstart ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

              <div className="box-heading ">Unit Tests {cleanData.unittests ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

            </div>
        </div>
      </div>
    );
  }}

  export default Methodology;
