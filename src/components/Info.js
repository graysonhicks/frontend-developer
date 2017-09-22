import React, {Component} from "react";


import { Redirect } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Box from "./Box";
import Left from "./Left";
import HomeLink from "./HomeLink";



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
          <div className="">
            <div className="category-label">
              {this.props.match.params.category}
            </div>
            <div className="category-info">
            </div>
          </div>
        </Col>
      </div>
    ))
  }
}

export default Info;
