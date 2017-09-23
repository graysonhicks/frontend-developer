import React, {Component} from "react";
import {IoCheckmarkCircled, IoThumbsDown} from "react-icons/lib/io";
import {Bar} from 'react-chartjs-2';



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
      <Bar data={cleanData} options={{
        legend:{
          display:false
        },
         scales: {
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    fontFamily: "Gotham",
                    fontSize: 16
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontFamily: "Gotham",
                    fontSize: 16
                }
            }]
        }

      }}/>

    </div>
    );
  }}

  export default Profile;
