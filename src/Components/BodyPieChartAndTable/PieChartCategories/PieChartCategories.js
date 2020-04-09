import React from 'react';
// import ChartistGraph from 'react-chartist';
import { Grid, Paper, Icon } from '@material-ui/core';

// import css stylesheet
import './PieChartCategories.css';
import { Doughnut, Pie } from 'react-chartjs-2';



class PieChartCategories extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#fe9c16',
                    '#07b0c5',
                    '#df296a'
                ],
                hoverBackgroundColor: [
                    '#fe9c16',
                    '#07b0c5',
                    '#df296a'
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
}

export default PieChartCategories;