import React, {Component} from "react";

import Box from "./Box";

class Essentials extends Component {
  buildData() {
    const j = {
      ...this.props.jobData
    };
    j.companysize = j.companysize.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
    return j;
  }
  buildChoices() {
    const c = {};
    for (var i = 0; i < this.props.methods.length; i++) {
      c[this.props.methods[i].name] = this.props.methods[i]().all.map((item) => {
        return item.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
      });
    }
    return c;
  }

  render() {
    const cleanData = this.buildData();
    console.log(cleanData);
    const dataChoices = this.buildChoices();
    // console.log(dataChoices);

    return (
      <div className="box-container">

        <div className="box flex-1">
          <div className="box-heading">
            {cleanData.companysize}

          </div>
        </div>

        <div className="box flex-2">
          <div className="box-heading">
            {cleanData.employment}
          </div>

        </div>

        <div className="box flex-2">
          <div className="box-heading">
            {cleanData.experience[0]}
          </div>

        </div>

        <div className="box flex-1">
          <div className="box-heading">
            {cleanData.locations}
          </div>

        </div>
        <div className="box flex-2">
          <div className="box-heading">
            {cleanData.locations}
          </div>

        </div>
        <div className="box flex-3">
          <div className="box-heading">
            {cleanData.locations}
          </div>

        </div>

      </div>
    )
  }
}

export default Essentials;
