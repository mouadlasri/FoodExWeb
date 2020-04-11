import React from 'react';
import { Grid, Paper } from '@material-ui/core';

// import custom components
import HeaderAnalytics from '../Analytics/Header/HeaderAnalytics';
import TopCategoriesAndRecentOrders from '../Analytics/TopCategoriesAndRecentOrders/BodyPieChartAndTable';
import Graphs from '../Analytics/Graphs/Graphs';


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
                <Graphs />
               

            </div>
            
        );
    }

}


export default MainNavigation;