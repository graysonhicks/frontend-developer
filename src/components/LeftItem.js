import React, {Component} from "react";
import {IoCube, IoErlenmeyerFlaskBubbles, IoClipboard, IoPerson, IoLaptop, IoWand, IoPizza} from 'react-icons/lib/io';

class LeftItem extends Component {
  icons = [
    <IoCube className="left-icons"/>,
    <IoErlenmeyerFlaskBubbles className="left-icons"/>, 
    <IoClipboard className="left-icons"/>,
    <IoPerson className="left-icons"/>,
    <IoLaptop className="left-icons"/>,
    <IoWand className="left-icons"/>,
    <IoPizza className="left-icons"/>
]

  render() {

    return (
      <div className="categories-item" onClick={(e) => this.props.changeCategory(e, this.props)}>
        {this.icons[this.props.index]}
        {this.props.label}
      </div>
    )
  }
}

export default LeftItem;
