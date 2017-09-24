import React, {Component} from "react";
import { Link } from 'react-router-dom';
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
      <Link to={{pathname: '/team/' + this.props.label}} className="categories-item">
        {this.icons[this.props.index]}
        {this.props.label}
      </Link>
    )
  }
}

export default LeftItem;
