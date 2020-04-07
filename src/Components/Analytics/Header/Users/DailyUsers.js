import React from 'react';
import {  Icon } from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import css file
import './DailyUsers.css';

class DailyUsers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="small-analytics-container">
                <div className="small-analytics-upper">
                    <div className="image-analytics-header-container" id="daily-users-icon">
                        <PeopleAltIcon className="image-analytics-icon"></PeopleAltIcon>
                    </div>
                    <div className="text-analytics-header-container">
                        <p>Daily Users</p>
                        <h3>{this.props.dailyUsers}</h3>
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

export default DailyUsers;