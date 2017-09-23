import React, {Component} from "react";
import {IoCheckmarkCircled, IoThumbsDown} from "react-icons/lib/io";
import {Bar} from 'react-chartjs-2';

class Technologies extends Component {
  buildData() {
    let j = {
      ...this.props.jobData
    };

    return j;
  }
  buildChartData(category){
    let chartData;
    if(category == "language"){
      chartData = {
        ...this.props.jobData
      }
      delete chartData.testing;
      delete chartData.framework;
    } else {
      chartData = {
        ...this.props.jobData[category].oneof
      }
    }

    const colors = [
      '#ff8700', '#ffec00', '#2012ab', '#4a0099', '#ff6384', '#aaff00', '#ab009a', '#bd80ff'
    ]

    chartData = {
       labels: Object.keys(chartData).map((item, index) => {
         return item.replace(/\b\w/g, l => l.toUpperCase())
       }),
       datasets: [{
           backgroundColor: colors,
           borderColor: colors,
           data: Object.keys(chartData).map((item, index) => {
             switch (chartData[item]) {
               case "Familiar":
                 return 1
                 break;
               case "Good":
                 return 2
                 break;
               case "Expert":
                 return 3
                 break;
             }

           }),
       }]
   }
   return chartData;
  }

  chartOptions = {
  legend:{
    display:false
  },
  scales: {
      yAxes: [{
          ticks: {
              beginAtZero:true,
              fontColor: "white",
              fontFamily: "Gotham",
              fontSize: 16,
              stepSize: 1,
              max: 3,
              callback: function (label, index, labels) {
              switch (label) {
                case 1:
                  return "Familiar"
                  break;
                case 2:
                  return "Good"
                  break;
                case 3:
                  return "Expert"
                  break;
                  }
                }
              },
          }],
          xAxes: [{
              ticks: {
                  fontColor: "white",
                  fontFamily: "Gotham",
                  fontSize: 16
              }
          }],
      }
  }

  render() {
    const languageData = this.buildChartData("language");
    const testingData = this.buildChartData("testing");
    const frameworkData = this.buildChartData("framework");
    const cleanData = this.buildData();

    return (
      <div className="technologies">
        <Bar data={languageData} options={this.chartOptions}/>
        <Bar data={testingData} options={this.chartOptions}/>
        <Bar data={frameworkData} options={this.chartOptions}/>
      </div>
    )
  }
}

export default Technologies;
