import React, {Component} from "react";
import {IoCheckmarkCircled, IoThumbsDown} from "react-icons/lib/io";

class Profile extends Component {
  buildData() {
    const j = {
      ...this.props.jobData
    };
    return j;
  }

  render() {
    const cleanData = this.buildData();

    return (
    <div className="profile box-row">

        {Object.keys(cleanData).map((item, index) => {
          return (
            <div key={index} className="profile-items box">
              <div className="profile-heading box-heading">{item}:</div>
              <div className="box-description">{cleanData[item]}</div>
            </div>
          )
        })}

    </div>
    );
  }}

  export default Profile;
