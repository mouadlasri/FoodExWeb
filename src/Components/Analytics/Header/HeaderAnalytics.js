import React from 'react';
import { Grid, Paper, Icon} from '@material-ui/core';

// Import custom components
import Revenue from '../Revenue/Revenue';

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
    }

    render() {
        return (
            <Grid container spacing={2} style={{ backgroundColor: '', height: '20vh', marginTop: 20}}>
                <Grid item lg={3} style={test} style={{ justifyContent: 'center' }}>
                    <Revenue />
                </Grid>
                <Grid item lg={3} style={test}>

                </Grid>
                <Grid item lg={3} style={test}>

                </Grid>
                <Grid item lg={3} style={test}>

                </Grid>
            </Grid>
        );
    }
}

export default HeaderAnalytics;