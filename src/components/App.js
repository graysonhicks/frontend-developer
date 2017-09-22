import React, {Component} from "react";
import ReactDOM from "react-dom";

import { Switch, Route } from 'react-router-dom';
import { Grid, Col } from 'react-bootstrap';

import Info from "./Info"
import StartScreen from "./StartScreen";

import Styles from "../styles/styles.scss";

const NoMatch = () => {
  return (
    <Col xs={12}>
      <div className="404-warning">Sorry! Only so many webpages to go around!</div>
    </Col>
  )
}

class App extends Component {

  render() {

    return (

          <Grid className="main-container" fluid={true}>
              <Switch>
                <Route exact path='/' render={props =><StartScreen jobData={this.props.jobData} {...props}/>}/>
                <Route path='/us/:category' render={props =><Info jobData={this.props.jobData} {...props}/>}/>
                <Route path="*" component={NoMatch}/>
              </Switch>
          </Grid>

    )
  }
}

export default App;
