import React from 'react';
import { Bar } from 'react-chartjs-2';
import BarChartIcon from '@material-ui/icons/BarChart';
// import custom css
import './UsersActivityBarChart.css';

class UsersActivityBarChart extends React.Component {
    constructor(props) {
        super(props);
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
                    <div className="image-analytics-header-container" id="daily-orders-icon">
                        <BarChartIcon className="image-analytics-icon" ></BarChartIcon>
                    </div>
                    <div className="text-analytics-header-container">
                        <p style={{ fontFamily: 'Roboto', color: '#3C4858', fontSize: '20px' }}>User Activity</p>
                    </div>
                    <div style={{ float: 'right' }} >
                        <p>Test</p>
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