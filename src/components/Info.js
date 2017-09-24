import React, {Component} from "react";

import { Switch, Route, Redirect } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {IoCheckmarkCircled} from "react-icons/lib/io";

import Left from "./Left";
import HomeLink from "./HomeLink";
import Essentials from "./Essentials";
import Methodology from "./Methodology";
import Specs from "./Specs";
import Profile from "./Profile";
import Equipment from "./Equipment";
import Technologies from "./Technologies";
import Other from "./Other";

class Info extends Component {
  filterData(){
    return {...this.props.jobData[this.props.match.params.category]};
  }
  mapAndReturnSelected(dataChoices, cleanData, choicesKey, dataKey){
    console.log(arguments);
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
    const filteredData = this.filterData();
    return ((Object.keys(filteredData).length === 0) ? (<Redirect from="/" to="/nope"/ >) : (
      <div className="main-container" >
        <Left jobData={this.props.jobData}></Left>
        <Col className="info-container" md={10}>
          <HomeLink/>

            <div className="category-label">
              {this.props.match.params.category}
            </div>
            <div className="category-info">
                <Switch>
                  <Route exact path='/team/essentials' render={props =><Essentials mapAndReturnSelected={this.mapAndReturnSelected} jobData={filteredData} methods={[this.props.methods.EmploymentType, this.props.methods.ExperienceLevels, this.props.methods.CompanySize]} {...props}/>}/>

                  <Route exact path='/team/methodology' render={props =><Methodology mapAndReturnSelected={this.mapAndReturnSelected} jobData={filteredData} methods={[this.props.methods.BuildServers, this.props.methods.CodeAnalysisTools, this.props.methods.VersionControlSystem, this.props.methods.IssueTrackers]} {...props}/>}/>

                  <Route exact path='/team/specs' render={props =><Specs mapAndReturnSelected={this.mapAndReturnSelected} jobData={filteredData} methods={[this.props.methods.ScheduleOptions, this.props.methods.RemoteWorking, this.props.methods.PTO]} {...props}/>}/>

                  <Route exact path='/team/profile' render={props =><Profile jobData={filteredData} {...props}/>}/>

                  <Route exact path='/team/equipment' render={props =><Equipment mapAndReturnSelected={this.mapAndReturnSelected} jobData={filteredData} methods={[this.props.methods.OperationSystems, this.props.methods.MachineType]} {...props}/>}/>

                  <Route exact path='/team/technologies' render={props =><Technologies jobData={filteredData} methods={[this.props.methods.Level]} {...props}/>}/>

                  <Route exact path='/team/other' render={props =><Other jobData={filteredData} {...props}/>}/>


                </Switch>
            </div>

        </Col>
      </div>
    ))
  }
}

export default Info;
