import React, {Component} from "react";

class Box extends Component {

  render() {
    return (
      <div className={'box flex-' + this.props.flexNumber}></div>
    )
  }
}

export default Box;
