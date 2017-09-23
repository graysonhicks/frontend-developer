import React, {Component} from "react";
import { Table } from 'react-bootstrap';
import {IoCheckmarkCircled, IoThumbsDown} from "react-icons/lib/io";
import moment from "moment";

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
          <div className="box company-size table-box">
              <Table responsive>
                <thead>
                  <tr><th>Company Size</th><th></th></tr>
                </thead>
                <tbody>
                  {dataChoices.CompanySize.map((tool, index) => {
                      if(cleanData.companysize.indexOf(tool) > -1){
                        return <tr key={index}><td>{tool}</td><td><IoCheckmarkCircled/></td></tr>
                      } else {
                        return <tr key={index}><td>{tool}</td><td></td></tr>
                      }
                    })}
                </tbody>
              </Table>
          </div>
            <div className="box experience table-box">
              <Table responsive>
                <thead>
                  <tr><th>Experience Levels</th><th></th></tr>
                </thead>
                <tbody>
                  {dataChoices.ExperienceLevels.map((tool, index) => {
                      if(cleanData.experience.indexOf(tool) > -1){
                        return <tr key={index}><td>{tool}</td><td><IoCheckmarkCircled/></td></tr>
                      } else {
                        return <tr key={index}><td>{tool}</td><td></td></tr>
                      }
                    })}
                </tbody>
              </Table>
            </div>

        </div>
        <div className="box-row">
          <div className="box team-size">
            <div className="box-heading">Team Size</div>
            <div className="box-description">{cleanData.teamsize.min} to {cleanData.teamsize.max} <br/></div>
          </div>
          <div className="box startdate">
            <div className="box-heading">Start Date</div>
            <div className="box-description">{moment(cleanData.startdate).format('MMMM Do YYYY')}</div>
          </div>

        </div>
        <div className="box-row">
          <div className="box employment-type table-box">
              <Table responsive>
                <thead>
                  <tr><th>Employment Type</th><th></th></tr>
                </thead>
                <tbody>
                  {dataChoices.EmploymentType.map((tool, index) => {
                    if(tool.replace(/\s/g, "") == cleanData.employment){
                      return <tr key={index}><td>{tool}</td><td><IoCheckmarkCircled/></td></tr>
                    } else {
                      return <tr key={index}><td>{tool}</td><td></td></tr>
                    }
                  })}
                </tbody>
              </Table>
          </div>
            <div className="box locations">
              <div className="box-heading">Locations</div>
              <div>{cleanData.locations}</div>
            </div>
        </div>
      </div>
    )
  }
}

export default Essentials;
