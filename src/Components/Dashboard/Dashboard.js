import React from 'react';
import { Grid } from '@material-ui/core';



import PeriodRevenuesLineChart from './PeriodRevenuesLineChart/PeriodRevenues';
import TrendingOrders from './TrendingOrders/TrendingOrders';
import UsersActivityBarChart from './UsersActivityBarChart/UsersActivityBarChart';
import TopItemsCategoriesPieChart from './TopItemsCategoriesPieChart/TopItemsCategoriesPieChart';
import RecentOrders from './RecentOrdersTable/RecentOrdersTable';
import DailyAnalyticsHeader from './DailyAnalyticsHeader/DailyAnalyticsHeader';

import OrdersDelivered from './UsersActivityBarChart/OrdersDelivered';
import AverageTimeSpent from './UsersActivityBarChart/AverageTimeSpent';
import UserEngagementChart from './UsersActivityBarChart/UserEngagementChart';

// Icons
import MoreVertIcon from '@material-ui/icons/MoreVert';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ paddingLeft: 30, paddingRight: 30 }}>
                <div className="page-title">
                    <MoreVertIcon className="page-title-icon">Dashboard</MoreVertIcon>
                    <h3>Dashboard</h3>
                </div>
                {/* Nested Grid to show first analytics in the header */}
                <DailyAnalyticsHeader />

                {/* Line Chart of Revenues periodically + Bar Chart of User Activities (# orders) periodically */}
                <Grid container spacing={4} style={{ marginTop: 20 }}>
                    <Grid item xs={12} sm={4} md={4} lg={6} >
                        <PeriodRevenuesLineChart />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={6}>
                        <UsersActivityBarChart />
                    </Grid>
                </Grid>

                {/* Line Chart of Revenues periodically + Bar Chart of User Activities (# orders) periodically */}
                <Grid container spacing={4} style={{ marginTop: 20 }}>
                    <Grid item xs={12} sm={4} md={4} lg={4} >
                        <UserEngagementChart />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <AverageTimeSpent />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <OrdersDelivered />
                    </Grid>
                </Grid>

                
                {/* Pie Chart of Categories + Recent Orders Tables */}
                <Grid container spacing={4} style={{ marginTop: 20 }}>
                    <Grid item xs={12} sm={4} md={4} lg={4} >
                        <TopItemsCategoriesPieChart />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={8}>
                        <RecentOrders />
                    </Grid>

                </Grid>


                <TrendingOrders />




            </div>
        );
    }
}

export default Dashboard;