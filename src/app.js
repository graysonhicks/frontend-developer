import React from "react";
import ReactDOM from "react-dom";

import JobData from "./data/index";
console.log(JobData);
import Styles from "./styles/styles.scss";

class HelloMessage extends React.Component {
  render() {
    return <div className="intro">Hello {this.props.JobData.headline}!</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage JobData={JobData} />, mountNode);
