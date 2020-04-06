import React from 'react';
import { Grid, Paper } from '@material-ui/core';

// import custom components
import HeaderAnalytics from '../Analytics/Header/HeaderAnalytics';

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
            </div>
            
        );
    }

}


export default MainNavigation;