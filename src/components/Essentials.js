import React, {Component} from "react";
import {IoCheckmarkCircled, IoThumbsDown} from "react-icons/lib/io";

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
     console.log(dataChoices);

    return (
      <div className="essentials">
        <div className="box-row">
          <div className="box locations">
            <div className="box-heading">Locations</div>
            <div>{cleanData.locations}</div>
          </div>
          <div className="box startdate">
            <div className="box-heading">Start Date</div>
            <div>{cleanData.startdate}</div>
          </div>
        </div>
        <div className="box-row">
          <div className="box team-size">
            <div className="box-heading">Team Size</div>
            <div>{cleanData.teamsize.min} to {cleanData.teamsize.max}</div>
          </div>
          <div className="box experience">
            <div className="box-heading">Experience</div>
            {dataChoices.ExperienceLevels.map((tool, index) => {
                if(cleanData.experience.indexOf(tool) > -1){
                  return <div key={index}>{tool} <IoCheckmarkCircled/></div>
                } else {
                  return <div key={index}>{tool}</div>
                }
              })}
          </div>
        </div>
        <div className="box-row">
          <div className="box employment-type">
            <div className="box-heading">Employment Type</div>
            {dataChoices.EmploymentType.map((tool, index) => {
              if(tool.replace(/\s/g, "") == cleanData.employment){
                return <div key={index}>{tool} <IoCheckmarkCircled/></div>
              } else {
                return <div key={index}>{tool}</div>
              }
            })}
          </div>

          <div className="box company-size">
            <div className="box-heading">Company Size</div>
            {dataChoices.CompanySize.map((tool, index) => {
              if(cleanData.companysize.indexOf(tool) > -1){
                return (<div key={index}>{tool} <IoCheckmarkCircled/></div>)
              } else {
                return <div key={index}>{tool}</div>
              }
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Essentials;
