import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Grid, Col, Row } from 'react-bootstrap';

import Data from "./data/index";
import Info from "./components/Info"
import Left from "./components/Left";
import Styles from "./styles/styles.scss";

class App extends Component {
 constructor(props) {
    super(props);
    this.changeCategory = this.changeCategory.bind(this);
    this.state = {label: null, info: null};
  }
  changeCategory(e, {...props}){
    console.log(props);

    this.setState({
      label: props.label,
      info: props.info
    })
  }

  render() {
    return (
      <div>
          <Grid className="main-container" fluid={true}>
            <Col className="left-container" xs={2}>
              <Left jobData={Data.JobData} changeCategory={this.changeCategory}></Left>
            </Col>
            <Col className="info-container" xs={10}>
              <Info label={this.state.label} info={this.state.info}></Info>
            </Col>
          </Grid>

      </div>
    )
  }
}

var mountNode = document.getElementById("app");

ReactDOM.render(
  <App Data={Data}/>, mountNode);
