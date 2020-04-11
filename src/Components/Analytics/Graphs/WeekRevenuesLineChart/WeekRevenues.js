import React from 'react';
import { Grid, Paper, Icon } from '@material-ui/core';
import { Line } from "react-chartjs-2";

// import styling
import './WeekRevenues.css';

class WeekRevenues extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    
                    label: "Revenues",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    width: '80%',
                    height: 100,
                }
            ],
           
        };

        const options = {
            legend: {
                display: false,
            }
            // maintainAspectRatio: false

        }

        return (
            <div className="revenues-analytics-container">
                <div className="small-analytics-upper">
                    <div className="text-analytics-header-container">
                        <p>Revenues</p>
                    </div>
                    <div style={{float: 'right'}} >
                        <p>Test</p>
                    </div>
                    <div className="revenues-chart-container">
                        <Line ref="chart" data={data} options={options}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeekRevenues;