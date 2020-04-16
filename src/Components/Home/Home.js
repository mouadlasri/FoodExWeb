import React from 'react';
import { Grid, Paper} from '@material-ui/core';

// import custom components
import MainNavigation from './MainNavigation';
import LeftNavigation from './LeftNavigation';

// import styling
import './Home.css';

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
            <div className="app-container">
                <div className="sidebar">
                   <LeftNavigation />
                </div>
                <div className="main-navigation">
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{}}>
                        {/* Main Navigation */}
                        <MainNavigation />
                    </Grid>
                </div>
            </div>
            // <Grid container spacing={0} style={{ backgroundColor: 'brown', height: "100%" }}>
            //     {/* Left Navigation */}
            //     <Grid item xs={12} sm={3} md={2} lg={2} >
            //         <div style={{ height: "100%" }} >
            //             <ul>
            //                 <li>First Item</li>
            //                 <li>Second Item</li>
            //                 <li>Third Item</li>

            //             </ul>
            //         </div>
            //     </Grid>
                
                
                // <Grid item xs={12} sm={9} md={10} lg={10} style={{ backgroundColor: '#eeeeee', height: "100%" }}>
                //     {/* Main Navigation */}
                //     <MainNavigation />
                // </Grid>
            // </Grid>
               
        );
    }

}


export default Home;