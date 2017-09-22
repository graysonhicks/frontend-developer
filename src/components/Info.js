import React, {Component} from "react";
import { Switch, Route } from 'react-router-dom';
import StartScreen from "./StartScreen";
import { Col } from 'react-bootstrap';
import Box from "./Box";


class Info extends Component {

  render() {
    return (
      <Col className="info-container" xs={10}>
        <div className={!this.props.info ? 'main-info none' : 'main-info ' + this.props.label}>
          <div className="category-label">
            {this.props.label}
          </div>
          <div className="category-info">
            <Switch>
              <Route exact path='/' component={StartScreen}/>
              <Route path='/*' render={props =><Box jobData={this.props.jobData} {...props}/>}/>
            </Switch>
          </div>
        </div>
      </Col>
    )
  }
}

export default Info;
