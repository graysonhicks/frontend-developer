import React, {Component} from "react";

class LeftItem extends Component {

  render() {
    return (
      <div className="categories-item" onClick={(e) => this.props.changeCategory(e, this.props)}>{this.props.label}</div>
    )
  }
}

export default LeftItem;
