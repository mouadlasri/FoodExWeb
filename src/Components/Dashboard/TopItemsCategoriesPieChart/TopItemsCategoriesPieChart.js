import React from 'react';
// import ChartistGraph from 'react-chartist';
import { Grid, Paper, Icon } from '@material-ui/core';

import axios from 'axios';

// import css stylesheet
import './TopItemsCategoriesPieChart.css';
import { Doughnut, Pie } from 'react-chartjs-2';



class TopItemsCategoriesPieChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            labels: []
        }
    }

    componentDidMount() {
        axios.get('https://localhost:44312/api/RestaurantAnalytics/1/topCategories').then(response => {
            console.log(response.data);
            // local variables that will hold the response data
            var localData = [];
            var localLabels = [];

            // loop through the response data and fill the local variables
            for (var i = 0; i < response.data.length; i++) {
                localData.push(response.data[i].totalOrdered);
                localLabels.push(response.data[i].itemName);
            }

            // set the state of the component with the local data
            this.setState({
                data: localData,
                labels: localLabels
            });
        }).then(error => console.log(error));
    }

    render() {
        const data = {
            labels: this.state.labels,
            datasets: [{
                data: this.state.data,
                backgroundColor: [
                    '#fe9c16',
                    '#07b0c5',
                    '#df296a',
                    '#66bb6a',
                    '#ef5350'
                ],
                hoverBackgroundColor: [
                    '#fe9c16',
                    '#07b0c5',
                    '#df296a',
                    '#66bb6a',
                    '#ef5350'
                ],
                borderColor: '#fff'
            }]
        };

        const options = {
            legend: {
                position: 'bottom'
            },
            borderColor: 'black',
            responsive: true,
            maintainAspectRatio: false,
            height: '20%',
            width: '10%'

        }

        if (this.state.data.length > 0 && this.state.labels.length > 0) {
            return (
                <div className="pie-chart-category-container">
                    <div className="pie-chart-title">
                        <p>Most Popular Categories</p>

                    </div>
                    <div className="pie-chart-container">
                        <Doughnut style={{}} data={data} options={options} />
                    </div>
                    {/* Icon */}
                </div>
            );
        }

        else {
            return (
                <div className="pie-chart-category-container">
                    Loading Data..
                </div>
            )
        }

    }
}

export default TopItemsCategoriesPieChart;