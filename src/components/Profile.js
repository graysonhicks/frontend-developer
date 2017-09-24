import React, {Component} from "react";
import {IoCheckmarkCircled, IoThumbsDown} from "react-icons/lib/io";
import {Doughnut} from 'react-chartjs-2';



class Profile extends Component {
  buildData() {
    let j = {
      ...this.props.jobData
    };

    const colors = [
      '#ff8700', '#ffec00', '#2012ab', '#4a0099', '#ff6384'
    ]

    j = {
       labels: Object.keys(j).map((item, index) => {
         return item.replace(/\b\w/g, l => l.toUpperCase())
       }),
       datasets: [{
           backgroundColor: colors,
           borderColor: colors,
           data: Object.keys(j).map((item, index) => {
             return j[item];
           }),
       }]
   }
    return j;
  }

  render() {
    const cleanData = this.buildData();


    return (
    <div className="profile">
      <div className="chart-rows"><div className="chart-headings">Profile of Average Work Week</div></div>
      <Doughnut data={cleanData} options={{
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              console.log(tooltipItem, data);
              return data.datasets[0]["data"][tooltipItem.index] + "%" + " " + data.labels[tooltipItem.index];
            }
          }
        }

      }}/>

    </div>
    );
  }}

  export default Profile;
