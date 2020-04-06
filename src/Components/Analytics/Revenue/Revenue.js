import React from 'react';
import { Grid, Paper, Icon } from '@material-ui/core';

import './Revenue.css';

class Revenue extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="small-analytics-container">
                <div className="small-analytics-upper">
                    <div className="image-analytics-header-container">
                        <Icon className="image-analytics-icon" >payment</Icon>
                    </div>
                    <div className="text-analytics-header-container">
                        <p>Revenue</p>
                        <h3>13,984 Dhs</h3>
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

export default Revenue;