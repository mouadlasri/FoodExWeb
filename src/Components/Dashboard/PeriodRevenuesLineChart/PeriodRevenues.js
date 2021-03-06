import React from 'react';
import { Grid, Paper, Icon } from '@material-ui/core';
import { Line } from "react-chartjs-2";
import TimelineIcon from '@material-ui/icons/Timeline';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import styling
import './PeriodRevenues.css';

class WeekRevenues extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timePeriod: '',
            // last week
            data: {
                labels: [17, 18, 19, 20, 21, 22, 23],
                datasets: [
                    {
                        label: "Revenues",
                        fill: true,
                        // lineTension: 1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(75,192,192,1)",

                        // pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 5,
                        pointHitRadius: 10,
                        
                        data: [1500, 3404.23, 2200, 5500, 2310, 1300, 3899]
                    }
                ]
            }
        }
    }


    handleChange = (event) => {
        console.log('EVENT: ', event.target.value);

        this.setState({
            timePeriod: event.target.value
        });

        

         if (event.target.value == 'This Month') {
            var days = [];
            for (var i = 0; i < 24; i++) {
                days.push(i);
                console.log(i);
            }

            var dataValues = [];
            for (var i = 0; i < 24; i++) {

                dataValues.push(Math.ceil(Math.random() * (5000 - 1000) + 1000));

            }

            this.setState({
                data: {
                    labels: days,
                    datasets: [
                        {
                            label: "Revenues",
                            fill: true,
                            // lineTension: 1,
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderCapStyle: "butt",
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: "miter",
                            pointBorderColor: "rgba(75,192,192,1)",

                            // pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 8,
                            data: dataValues
                        }
                    ]
                }
            })
        }
        // if(event.target.value)
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

                    // pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40],
                }
            ],
           
        };

        const options = {
            legend: {
                display: false,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true,
                        backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                }]
            }
            // maintainAspectRatio: false

        }

        
        return (
            <div className="revenues-analytics-container">
                <div className="revenues-analytics-upper">
                    {/* <div className="image-analytics-header-container" id="daily-orders-icon">
                        <TimelineIcon className="image-analytics-icon" ></TimelineIcon>
                    </div> */}
                    <div className="text-analytics-header-container">
                        <p style={{ fontFamily: 'Roboto', color:'#3C4858', fontSize: '20px', marginTop: '5px', marginLeft: '5px'}}>Revenues</p>
                    </div>
                    <div style={{float: 'right'}} >
                        
                        <FormControl variant="outlined"  style={{marginTop: '10px', marginRight: '10px'}}>
                            <Select
                                value={this.state.timePeriod}
                                displayEmpty
                                onChange={this.handleChange}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" disabled >
                                    Last Week
                                </MenuItem>
                                <MenuItem value={'Last Week'}>Last Week</MenuItem>
                                <MenuItem value={'Last Month'}>Last Month</MenuItem>
                                <MenuItem value={'This Week'}>This Week</MenuItem>
                                <MenuItem value={'This Month'}>This Month</MenuItem>

                            </Select>
                        </FormControl>
                    </div>
                   
                </div>
                <div className="revenues-chart-container">
                    <Line ref="chart" data={this.state.data} options={options} />
                </div>
            </div>
        );
    }
}

export default WeekRevenues;