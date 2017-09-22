import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Grid } from 'react-bootstrap';

import Info from "./Info"
import Left from "./Left";
import Styles from "../styles/styles.scss";

class App extends Component {

  render() {
    return (

          <Grid className="main-container" fluid={true}>
            <Left jobData={this.props.jobData}></Left>
            <Info jobData={this.props.jobData}></Info>
          </Grid>

    )
  }
}

export default App;
