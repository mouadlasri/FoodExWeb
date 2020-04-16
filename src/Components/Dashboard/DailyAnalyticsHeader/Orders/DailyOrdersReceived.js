import React from 'react';
import { Icon } from '@material-ui/core';

// import css stylesheet
import './DailyOrdersReceived.css';

class DailyOrdersReceived extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="small-analytics-container">
                <div className="small-analytics-upper">
                    <div className="image-analytics-header-container" id="daily-orders-icon">
                        <Icon className="image-analytics-icon" >payment</Icon>
                    </div>
                    <div className="text-analytics-header-container">
                        <p>Orders</p>
                        <h3>{this.props.dailyOrdersReceived}</h3>
                    </div>
                </div>
                {/* Icon */}

                <div className="footer-small-analytics" style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon className="icon" >event</Icon>
                    <span style={{ marginLeft: 10, fontFamily: 'roboto', color: "#999" }}>Last 24 hours</span>
                </div>
            </div>
        )
    }
}

export default DailyOrdersReceived;