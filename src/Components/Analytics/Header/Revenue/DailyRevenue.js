import React from 'react';
import { Grid, Paper, Icon } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

// import style
import './DailyRevenue.css';

class DailyRevenue extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="small-analytics-container">
                <div className="small-analytics-upper">
                    <div className="image-analytics-header-container" id="daily-revenue-icon">
                        <MonetizationOnIcon className="image-analytics-icon" >payment</MonetizationOnIcon>
                    </div>
                    <div className="text-analytics-header-container">
                        <p>Revenue</p>
                        <h3>{this.props.dailyRevenue}</h3>
                    </div>
                </div>
                {/* Icon */}

                <div className="footer-small-analytics" style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon className="icon" >event</Icon>
                    <span style={{ marginLeft: 10, fontFamily: 'roboto', color: "#999" }}>Last 24 hours</span>
                </div>
            </div>
        );
    }
}

export default DailyRevenue;