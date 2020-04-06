import React from 'react';
import { Grid, Paper} from '@material-ui/core';

// import custom components
import MainNavigation from './MainNavigation';

const mainContainer = {
    height: '100%',
    borderStyle: 'solid',
    borderColor: 'black',
    width: '100%',
    margin: 0
}

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={0} style={{ backgroundColor: 'brown', height: "100vh" }}>
                {/* Left Navigation */}
                <Grid item xs={12} sm={3} md={2} lg={2}>
                    <div style={{  backgroundColor: 'red', height: "100vh" }}>

                    </div>
                </Grid>
                
                
                <Grid item xs={12} sm={9} md={10} lg={10} style={{ backgroundColor: '#eeeeee' }}>
                    {/* Main Navigation */}
                    <MainNavigation />
                </Grid>
            </Grid>
               
        );
    }

}


export default Home;