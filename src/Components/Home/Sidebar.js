import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PresentationIcon from '@material-ui/icons/Inbox';
import GroupIcon from '@material-ui/icons/Group';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HistoryIcon from '@material-ui/icons/History';

import {Avatar} from '@material-ui/core';


import { Link, Router, NavLink } from 'react-router-dom';

// import styling
import './Sidebar.css';

const classes = {
    active: {
        backgroundColor: 'red'
    }
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {

        return (
            <div className='root'>
                <div style={{alignItems: 'center', height: '10%'}}>
                    <h3 className="restaurant-title">Proxirest</h3>
                </div>

                <Divider className="sidebar-divider" />


                <List component="nav" aria-label="main mailbox folders">
                    <ListItem activeClassName="active-list-item" button style={{ color: '#848995' }}  component={NavLink} to="/dashboard" >
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    <ListItem activeClassName="active-list-item" button component={NavLink} to="/orders">
                        <ListItemIcon>
                            <LocalDiningIcon />
                        </ListItemIcon>
                        <ListItemText primary="Orders" />
                    </ListItem>
                    
                    <ListItem activeClassName="active-list-item" button>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItem>

                    <ListItem activeClassName="active-list-item" button>
                        <ListItemIcon>
                            <ShoppingBasketIcon />
                        </ListItemIcon>
                        <ListItemText primary="Items" />
                    </ListItem>

                    <ListItem activeClassName="active-list-item" button>
                        <ListItemIcon>
                            <HistoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="History" />
                    </ListItem>
                </List>
                
                <Divider className="sidebar-divider" />
                
                <List component="nav" aria-label="secondary mailbox folder" >
                    <ListItem activeClassName="active-list-item" button>
                        <ListItemIcon>
                            <LibraryBooksIcon />
                        </ListItemIcon>
                        <ListItemText primary="Feedback" />
                    </ListItem>
                    <ListItem activeClassName="active-list-item" button>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </div>
                
            
        )
    }
}

export default Sidebar;