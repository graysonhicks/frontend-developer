import React, {Component} from "react";

import StartScreen from "./StartScreen";
class Info extends Component {

  render() {
    return (
      <div>
      <div className="category-label">
        {this.props.label}
      </div>
      <div className="category-info">
        {this.props.info ? this.props.info.buildserver : <StartScreen/>}
      </div>
    </div>
    )
  }
}

export default Info;
