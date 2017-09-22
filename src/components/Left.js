import React, {Component} from "react";
import { Col } from 'react-bootstrap';
import LeftItem from "./LeftItem";

class Left extends Component {
  buildList(data){
    const clone = {...data};
    delete clone.headline;

    return Object.keys(clone).map((key, index) => {

      return <LeftItem key={index} index={index} label={key} info={clone[key]} changeCategory={this.props.changeCategory}></LeftItem>

    })

  }
  render() {

    const listItems = this.buildList(this.props.jobData);

    return (
        <Col className="left-container" xs={2}>
          <div className="left">
              {listItems}
          </div>
        </Col>
    )
  }
}

export default Left;
