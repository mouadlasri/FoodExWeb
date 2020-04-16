import React from 'react';
import { Grid, Paper } from '@material-ui/core';

// import custom components
import HeaderAnalytics from '../Analytics/Header/HeaderAnalytics';
import TopCategoriesAndRecentOrders from '../Analytics/TopCategoriesAndRecentOrders/BodyPieChartAndTable';
import Graphs from '../Analytics/Graphs/Graphs';
import TrendingOrders from '../Analytics/TrendingOrders/TrendingOrders';


import PieChartCategories from '../Analytics/TopCategoriesAndRecentOrders/PieChartCategories/PieChartCategories';
import RecentOrders from '../Analytics/TopCategoriesAndRecentOrders/RecentOrdersTable/RecentOrdersTable';

const mainContainer = {
    height: '100%',
    borderStyle: 'solid',
    borderColor: 'black',
    width: '100%',
    margin: 0
}

class MainNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // Add left and right paddings
            <div style={{ paddingLeft: 30, paddingRight: 30 }}>
                {/* Nested Grid to show first analytics in the header */}
                <HeaderAnalytics />
                <TopCategoriesAndRecentOrders />
                <Grid container spacing={4} style={{ backgroundColor: '', marginTop: 20 }}>
                    <Grid item xs={12} sm={4} md={4} lg={4} >
                        <PieChartCategories />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={8}>
                        <RecentOrders />
                    </Grid>

                </Grid>
                <TrendingOrders />
                {/* <Graphs /> */}


               

            </div>
            
        );
    }

}


export default MainNavigation;