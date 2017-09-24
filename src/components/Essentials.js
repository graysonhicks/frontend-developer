import React, {Component} from "react";
import { Table } from 'react-bootstrap';
import {IoCheckmarkCircled} from "react-icons/lib/io";
import moment from "moment";

import Fade from "./Fade";


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

  mapAndReturnSelected(dataChoices, cleanData, choicesKey, dataKey){
    return dataChoices[choicesKey].map((tool, index) => {
      if(tool.replace(/\s/g, "") == cleanData[dataKey]){
        return <tr key={index}><td>{tool}</td><td><IoCheckmarkCircled/></td></tr>
      } else {
        return <tr key={index}><td>{tool}</td><td></td></tr>
      }
    })
  }


  render() {
    const cleanData = this.buildData();
    const dataChoices = this.buildChoices();

    return (
      <div className="essentials">
        <div className="box-row">
              <div className="box company-size table-box">
                <Fade>
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
                </Fade>
              </div>
              <div className="box experience table-box">
                <Fade>
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
                </Fade>
              </div>

        </div>
        <div className="box-row">
          <div className="box team-size">
            <Fade>
              <div className="box-heading">Team Size</div>
              <div className="box-description">{cleanData.teamsize.min} to {cleanData.teamsize.max} <br/></div>
            </Fade>
          </div>
          <div className="box startdate">
            <Fade>
              <div className="box-heading">Start Date</div>
              <div className="box-description">{moment(cleanData.startdate).format('MMMM Do YYYY')}</div>
            </Fade>
          </div>

        </div>
        <div className="box-row">
          <div className="box employment-type table-box">
            <Fade>
              <Table responsive>
                <thead>
                  <tr><th>Employment Type</th><th></th></tr>
                </thead>
                <tbody>
                  {this.mapAndReturnSelected(dataChoices, cleanData, "EmploymentType", "employment")}
                </tbody>
              </Table>
            </Fade>
          </div>
            <div className="box locations">
              <Fade>
                <div className="box-heading">Locations</div>
                <div>{cleanData.locations}</div>
              </Fade>
            </div>
        </div>
      </div>
    )
  }
}

export default Essentials;
