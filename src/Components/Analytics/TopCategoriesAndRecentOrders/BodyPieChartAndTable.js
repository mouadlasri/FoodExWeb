import React from 'react';
// import ChartistGraph from 'react-chartist';
import { Grid, Paper, Icon } from '@material-ui/core';

// import custom components
import PieChartCategories from './PieChartCategories/PieChartCategories';
import RecentOrdersTable from './RecentOrdersTable/RecentOrdersTable';

// import css stylesheet
import './BodyPieChartAndTable.css';

class BodyPieChartAndTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={4} style={{ backgroundColor: '', height: '', marginTop: 20 }}>
                <Grid item xs={12} sm={3} md={3} lg={3} >
                    <PieChartCategories />
                </Grid>
                <Grid item xs={12} sm={9} md={9} lg={9}>
                    <RecentOrdersTable />
                </Grid>
            </Grid>
        );
    }
}

export default BodyPieChartAndTable;