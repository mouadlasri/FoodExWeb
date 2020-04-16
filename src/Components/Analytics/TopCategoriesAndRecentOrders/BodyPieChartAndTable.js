import React from 'react';
// import ChartistGraph from 'react-chartist';
import { Grid, Paper, Icon } from '@material-ui/core';

// import custom components
import PieChartCategories from './PieChartCategories/PieChartCategories';
import RecentOrdersTable from './RecentOrdersTable/RecentOrdersTable';

import WeekRevenues from '../Graphs/WeekRevenuesLineChart/WeekRevenues';
import UsersActivityBarChart from '../Graphs/UsersActivity/UsersActivityBarChart';
// import css stylesheet
import './BodyPieChartAndTable.css';

class BodyPieChartAndTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={4} style={{ backgroundColor: '', height: '', marginTop: 20 }}>
                <Grid item xs={12} sm={4} md={4} lg={6} >
                    <WeekRevenues />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={6}>
                    <UsersActivityBarChart />
                </Grid>
            </Grid>
        );
    }
}

export default BodyPieChartAndTable;