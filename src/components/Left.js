import React, {Component} from "react";

import LeftItem from "./LeftItem";

class Left extends Component {
  buildList(data){
    const clone = {...data};
    delete clone.headline;

    return Object.keys(clone).map((key, index) => {

      return <LeftItem key={index} label={key} info={clone[key]} changeCategory={this.props.changeCategory}></LeftItem>

    })

  }
  render() {

    const listItems = this.buildList(this.props.jobData);

    return (
      <div className="left">
        <div className="left-heading">{this.props.jobData.headline}</div>

          {listItems}

      </div>
    )
  }
}

export default Left;
