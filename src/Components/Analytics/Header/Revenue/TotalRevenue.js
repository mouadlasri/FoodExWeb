import React from 'react';
import { Icon } from '@material-ui/core';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
// import css file
import './TotalRevenue.css';

class TotalRevenue extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="small-analytics-container">
                <div className="small-analytics-upper">
                    <div className="image-analytics-header-container" id="total-revenue-icon">
                        <AccountBalanceIcon className="image-analytics-icon"></AccountBalanceIcon>
                    </div>
                    <div className="text-analytics-header-container">
                        <p>Total Revenue</p>
                        <h3>{this.props.totalRevenue}</h3>
                    </div>
                </div>
                {/* Icon */}

                <div className="footer-small-analytics" style={{ display: 'flex', alignItems: 'center' }}>
                    <AllInclusiveIcon className="icon" ></AllInclusiveIcon>
                    <span style={{ marginLeft: 10, fontFamily: 'roboto', color: "#999" }}>All time</span>
                </div>
            </div>
        );
    }
}

export default TotalRevenue;