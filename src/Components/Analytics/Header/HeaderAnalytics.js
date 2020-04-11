import React from 'react';
import { Grid, Paper, Icon} from '@material-ui/core';
import axios from 'axios';

// Import custom components
import DailyRevenue from './Revenue/DailyRevenue';
import DailyUsers from './Users/DailyUsers';
import DailyOrdersReceived from './Orders/DailyOrdersReceived';
import TotalRevenue from './Revenue/TotalRevenue';

// Import Style
import './HeaderAnalytics.css';

const test = {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    display: 'flex'

}

class HeaderAnalytics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dailyRevenue: null,
            dailyOrdersReceived: null,
            dailyUsers: null,
            totalRevenue: null
        }
    }

    async componentDidMount() {
        console.log(' Hello THere');
        // fetch the analytics data using async await
        await axios.get('https://localhost:44312/api/RestaurantAnalytics/1/daily')
            .then(response => {
                this.setState({
                    dailyRevenue: response.data.dailyRevenue,
                    dailyOrdersReceived: response.data.dailyOrdersReceived,
                    dailyUsers: response.data.dailyUniqueUsers,
                    totalRevenue: response.data.totalRevenue
                });
                console.log('Response data: ', response.data);
            })
            .catch(error => console.log(error));
        
        console.log('Component State: ', this.state);
    }

    render() {
      
        return (
            <Grid container spacing={4} style={{ backgroundColor: '', height: '20vh', marginTop: 20}}>
                <Grid item lg={3}>
                    <DailyRevenue dailyRevenue={this.state.dailyRevenue} />
                </Grid>
                <Grid item lg={3}>
                    <DailyOrdersReceived dailyOrdersReceived={this.state.dailyOrdersReceived} />
                </Grid>
                <Grid item lg={3}>
                    <DailyUsers dailyUsers={this.state.dailyUsers} />
                </Grid>
                <Grid item lg={3}>
                    <TotalRevenue totalRevenue={this.state.totalRevenue} />
                </Grid>
            </Grid>
        );
    }
}

export default HeaderAnalytics;