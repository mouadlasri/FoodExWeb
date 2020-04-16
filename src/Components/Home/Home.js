import React from 'react';
import { Grid, Paper} from '@material-ui/core';

// routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



// import custom components
import MainNavigation from './MainNavigation';
import LeftNavigation from './LeftNavigation';
import Orders from '../Orders/Orders';
import Items from '../Items/Items';


// import styling
import './Home.css';

const mainContainer = {
    height: '100%',
    borderStyle: 'solid',
    borderColor: 'black',
    width: '100%',
    margin: 0
}
// Routing

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
                        <Switch>
                            <Route exact path="/dashboard">
                                <MainNavigation />
                            </Route>
                            <Route path="/orders">
                                <Orders />
                            </Route>
                            
                        </Switch>

                        {/* <MainNavigation /> */}
                    </Grid>
                </div>
            </div> 
        );
    }

}


export default Home;