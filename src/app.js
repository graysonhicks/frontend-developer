import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Grid, Col, Row } from 'react-bootstrap';

import Data from "./data/index";

import Heading from "./components/Heading";
import Left from "./components/Left";
import Styles from "./styles/styles.scss";

console.log(Data);

class App extends Component {

  render() {
    return (
      <div>
          <Grid className="main-container" fluid={true}>
            <Col className="left-container" xs={2}>
              <Left></Left>
            </Col>
            <Col xs={10}>
              <Heading title={Data.JobData.headline} />
            </Col>
          </Grid>

      </div>
    )
  }
}

var mountNode = document.getElementById("app");

ReactDOM.render(
  <App Data={Data}/>, mountNode);
