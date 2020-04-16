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

class UsersActivityBarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timePeriod: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            timePeriod: event.target.value
        });
    }

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };

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
                        <p style={{ fontFamily: 'Roboto', color: '#3C4858', fontSize: '20px', marginTop: '5px', marginLeft: '5px' }}>User Activity</p>
                    </div>
                    <div style={{ float: 'right' }} >
                        <FormControl variant="outlined" style={{ marginTop: '10px', marginRight: '10px' }}>
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
                <div className="user-activities-chart-container">
                    <Bar data={data} width={100} height={50} options={{ maintainAspectRatio: false }} options={options} />
                </div>
            </div>
            
        )
    }
}

export default UsersActivityBarChart;