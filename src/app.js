import React, {Component} from "react";
import ReactDOM from "react-dom";

import Data from "./data/index";

import Heading from "./components/Heading";
import Styles from "./styles/styles.scss";

class App extends Component {

  render() {
    return (
      <div>
          <Heading title={Data.JobData.headline} />
      </div>
    )
  }
}

var mountNode = document.getElementById("app");

ReactDOM.render(
  <App Data={Data}/>, mountNode);
