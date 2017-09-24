import React, {Component} from "react";
import ReactDOM from "react-dom";

import { Switch, Route } from 'react-router-dom';
import { Grid, Col } from 'react-bootstrap';

import Info from "./Info"
import StartScreen from "./StartScreen";
import Oops from "./Oops";

import Styles from "../styles/styles.scss";

class App extends Component {

  render() {

    return (

          <Grid fluid={true}>
              <Switch>
                <Route exact path='/' render={props =><StartScreen jobData={this.props.jobData} {...props}/>}/>
                <Route path='/team/:category' render={props =><Info jobData={this.props.jobData} methods={this.props.methods} {...props}/>}/>
                <Route path="/nope" component={Oops}/>
                <Route path="/*" component={Oops}/>
              </Switch>
          </Grid>

    )
  }
}

export default App;
