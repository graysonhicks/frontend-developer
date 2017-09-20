import React from "react";
import ReactDOM from "react-dom";

import JobData from "../js/data";

console.log(JobData);

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Grayson" />, mountNode);
