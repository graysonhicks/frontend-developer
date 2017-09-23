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

    determineTool(item, dataChoices, cleanData){
      let choices;
      switch (item) {
        case "companysize":
          let companySizeChoices = dataChoices.CompanySize.map((tool, index) => {
            if(cleanData.companysize.indexOf(tool) > -1){
              return (<div key={index}>{tool} <IoCheckmarkCircled/></div>)
            } else {
              return <div key={index}>{tool}</div>
            }
          })
          return companySizeChoices;
        case "employment":
          let employmentChoices = dataChoices.EmploymentType.map((tool, index) => {
            if(tool.replace(/\s/g, "") == cleanData.employment){
              return <div key={index}>{tool} <IoCheckmarkCircled/></div>
            } else {
              return <div key={index}>{tool}</div>
            }
          })
          return employmentChoices;
        case "experience":
            let experienceChoices = dataChoices.ExperienceLevels.map((tool) => {
                if(cleanData.experience.indexOf(tool) > -1){
                  return <div>{tool} <IoCheckmarkCircled/></div>
                } else {
                  return <div>{tool}</div>
                }
              })
              return experienceChoices;
        case "locations":
            return <div>{cleanData.locations}</div>
          break;
        case "teamsize":
            return <div>{cleanData.teamsize.min} to {cleanData.teamsize.max}</div>
          break;
          case "startdate":
              return <div>{cleanData.startdate}</div>
            break;
        default:

      }
    }


  render() {
    const cleanData = this.buildData();
    console.log(cleanData);
    const dataChoices = this.buildChoices();
     console.log(dataChoices);

    return (
      <div>
      <div className="box-row">

        {Object.keys(cleanData).map((item, index) => {
          return (
            <div key={index} className="essential-items">
              <div className="essentials-heading">{item}:</div>
               {this.determineTool(item, dataChoices, cleanData)}
            </div>
          )
        })}

      </div>
      </div>
    )
  }
}

export default Essentials;
