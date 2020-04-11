import React from 'react';
import { Grid, Paper, Icon } from '@material-ui/core';

// custom components
import WeekRevenues from './WeekRevenuesLineChart/WeekRevenues';

// import styling
import './Graphs.css';

class Graphs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Grid container spacing={4} style={{ backgroundColor: '', height: '30vh', marginTop: 20 }}>
                    <Grid item xs={12} sm={4} md={4} lg={4} >
                        <WeekRevenues />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Graphs;