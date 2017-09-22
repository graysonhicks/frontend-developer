import React, {Component} from "react";

import { Switch, Route, Redirect } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Left from "./Left";
import HomeLink from "./HomeLink";
import Essentials from "./Essentials";
import Methodology from "./Methodology";
import Specs from "./Specs";
import Profile from "./Profile";
import Equipment from "./Equipment";

class Info extends Component {
  filterData(){
    return {...this.props.jobData[this.props.match.params.category]};
  }
  render() {
    const filteredData = this.filterData();

    return ((Object.keys(filteredData).length === 0) ? (<Redirect from="/" to="/nope"/ >) : (
      <div>
        <Left jobData={this.props.jobData}></Left>
        <Col className="info-container" xs={10}>
          <HomeLink/>

            <div className="category-label">
              {this.props.match.params.category}
            </div>
            <div className="category-info">
                <Switch>
                  <Route exact path='/us/essentials' render={props =><Essentials jobData={filteredData} methods={[this.props.methods.EmploymentType, this.props.methods.ExperienceLevels, this.props.methods.CompanySize]} {...props}/>}/>

                  <Route exact path='/us/methodology' render={props =><Methodology jobData={filteredData} methods={[this.props.methods.BuildServers, this.props.methods.CodeAnalysisTools, this.props.methods.VersionControlSystem, this.props.methods.IssueTrackers]} {...props}/>}/>

                  <Route exact path='/us/specs' render={props =><Specs jobData={filteredData} methods={[this.props.methods.ScheduleOptions, this.props.methods.RemoteWorking, this.props.methods.PTO]} {...props}/>}/>

                  <Route exact path='/us/profile' render={props =><Profile jobData={filteredData} {...props}/>}/>

                  <Route exact path='/us/equipment' render={props =><Equipment jobData={filteredData} methods={[this.props.methods.OperationSystems, this.props.methods.MachineType]} {...props}/>}/>


                </Switch>
            </div>

        </Col>
      </div>
    ))
  }
}

export default Info;
