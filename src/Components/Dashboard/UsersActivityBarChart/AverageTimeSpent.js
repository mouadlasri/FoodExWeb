import React from 'react';
import { Bar } from 'react-chartjs-2';
import BarChartIcon from '@material-ui/icons/BarChart';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// import custom css
import './UsersActivityBarChart.css';

class AverageTimeSpent extends React.Component {
    constructor(props) {
        super(props);

        var dataValues = [];
        for (var i = 0; i < 7; i++) {

            dataValues.push(Math.random() * (400 - 100) + 100);

        }
        this.state = {
            timePeriod: 'Last Week',
            data: {
                    labels: [17, 18, 19, 20, 21, 22, 23],
                    datasets: [
                        {
                            label: 'AVG Time',
                            backgroundColor: '#fb8c00',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                            hoverBorderColor: 'rgba(255,99,132,1)',
                            data: [15, 10, 20, 5, 3, 12, 11]
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

        if (event.target.value == 'Last Month') {
            var days = [];
            for (var i = 0; i < 30; i++) {
                days.push(i);
            }

            var dataValues = [];
            for (var i = 0; i < 30; i++) {
                
                dataValues.push(Math.random() * (1200 - 430) + 430);

            }

            this.setState({
                data: {
                    labels: days,
                    datasets: [
                        {
                            label: 'Average Time',
                            backgroundColor: '#df296a',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                            hoverBorderColor: 'rgba(255,99,132,1)',
                            data: dataValues
                        }
                    ]
                }
            })
        }

        else if (event.target.value == 'Last Week') {
            var days = [];
            for (var i = 23; i < 30; i++) {
                days.push(i);
                console.log(i);
            }

            var dataValues = [];
            for (var i = 0; i < 7; i++) {

                dataValues.push(Math.ceil(Math.random() * (1200 - 430) + 430));

            }

            this.setState({
                data: {
                    labels: days,
                    datasets: [
                        {
                            label: 'Average Time',
                            backgroundColor: '#df296a',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                            hoverBorderColor: 'rgba(255,99,132,1)',
                            data: dataValues
                        }
                    ]
                }
            })
        }
        // if(event.target.value)
    }

    render() {
        const options = {
            legend: {
                display: false,
            }
            // maintainAspectRatio: false

        }
            return (
                <div className="users-activity-analytics-container">
                    <div className="users-activity-analytics-upper">
                        {/* <div className="image-analytics-header-container" id="daily-orders-icon">
                        <BarChartIcon className="image-analytics-icon" ></BarChartIcon>
                    </div> */}
                        <div className="text-analytics-header-container">
                            <p style={{ fontFamily: 'Roboto', color: '#3C4858', fontSize: '20px', marginTop: '5px', marginLeft: '5px' }}>Average Time Spent</p>
                        </div>
                        <div style={{ float: 'right' }} >
                            <FormControl variant="outlined" style={{ marginTop: '10px', marginRight: '10px' }}>
                                <Select
                                    value={this.state.timePeriod}
                                    displayEmpty
                                    onChange={this.handleChange}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value={'Last Week'}  >
                                        Last Week
                                </MenuItem>
                                    {/* <MenuItem value={'Last Week'}>Last Week</MenuItem> */}
                                    <MenuItem value={'Last Month'}>Last Month</MenuItem>
                                    <MenuItem value={'This Week'}>This Week</MenuItem>
                                    <MenuItem value={'This Month'}>This Month</MenuItem>

                                </Select>
                            </FormControl>
                        </div>

                    </div>
                    <div className="user-activities-chart-container">
                        <Bar data={this.state.data} width={100} height={50} options={{ maintainAspectRatio: false }} options={options} />
                    </div>
                </div>
            
            );
    };
}

export default AverageTimeSpent;