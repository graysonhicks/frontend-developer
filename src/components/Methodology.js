import React, {Component} from "react";
import {IoCheckmarkCircled, IoThumbsDown} from "react-icons/lib/io";
import { Table } from 'react-bootstrap';

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
    <div className="methodology">
      <div className="box-row">
          <div className="box code-analysis table-box">
              <Table responsive>
                <thead>
                  <tr><th>Static Code Analysis</th><th></th></tr>
                </thead>
                <tbody>
                    {this.mapAndReturnSelected(dataChoices, cleanData, "CodeAnalysisTools", "staticcodeanalysis")}
                </tbody>
              </Table>
          </div>
          <div className="box issue-tracker table-box">
              <Table responsive>
                <thead>
                  <tr><th>Issue Tracker</th><th></th></tr>
                </thead>
                <tbody>
                    {this.mapAndReturnSelected(dataChoices, cleanData, "IssueTrackers", "issuetracker")}
                </tbody>
              </Table>
          </div>
          <div className="box build-servers table-box">
              <Table responsive>
                <thead>
                  <tr><th>Build Servers</th><th></th></tr>
                </thead>
                <tbody>
                    {this.mapAndReturnSelected(dataChoices, cleanData, "BuildServers", "buildserver")}
                </tbody>
              </Table>
          </div>
          <div className="box version-control table-box">
              <Table responsive>
                <thead>
                  <tr><th>Version Control</th><th></th></tr>
                </thead>
                <tbody>
                  {this.mapAndReturnSelected(dataChoices, cleanData, "VersionControlSystem", "versioncontrol")}
                </tbody>
              </Table>
          </div>
      </div>
      <div className="box-row">
          <div className="box checkbox-container">
            <div className="daytoday">
              Day<br/>to<br/>Day
            </div>
            <div className="checkboxes">
                <div className="box-heading ">Code Reviews {cleanData.codereviews ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

                <div className="box-heading ">Commit On Day One {cleanData.commitondayone ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

                <div className="box-heading ">Fail Fast {cleanData.failfast ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

                <div className="box-heading ">Standups   {cleanData.standups ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

                <div className="box-heading ">Integration Tests {cleanData.integrationtests ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

                <div className="box-heading ">Prototyping {cleanData.prototyping ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

                <div className="box-heading ">Quick Start {cleanData.quickstart ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>

                <div className="box-heading ">Unit Tests {cleanData.unittests ? (<IoCheckmarkCircled className="methodology-checks"/>) : <IoThumbsDown/>}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }}

  export default Methodology;
