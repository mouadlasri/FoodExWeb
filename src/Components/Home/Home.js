import React from 'react';
import { Grid, Paper} from '@material-ui/core';

// routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



// import custom components
import Sidebar from './Sidebar';
import Orders from '../Orders/Orders';
import Items from '../Items/Items';


// import styling
import './Home.css';
import Dashboard from '../Dashboard/Dashboard';

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
                {/* Sidebar component */}
                <div className="sidebar">
                    <Sidebar />
                </div>

                <div className="main-navigation">
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{}}>
                        {/* Main Navigation */}
                        
                        {/* Switch Router with the routes */}
                        <Switch>
                            <Route exact path="/dashboard">
                                <Dashboard />
                            </Route>
                            <Route path="/orders">
                                <Orders />
                            </Route>
                        </Switch>

                    </Grid>
                </div>
            </div> 
        );
    }

}


export default Home;