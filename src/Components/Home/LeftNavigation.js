import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
// Three vertical dots
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import DraftsIcon from '@material-ui/icons/Drafts';
import HistoryIcon from '@material-ui/icons/History';


// import styling
import './LeftNavigation.css';

const classes = {
    active: {
        backgroundColor: 'red'
    }
}

class LeftNavigation extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return (
                <div className='root'>
                    <List component="nav" aria-label="main mailbox folders">
                    <ListItem className="test-item" button style={{ color: '#848995' }} selected={true} classes={{ selected: classes.active }} hover={{backgroundColor: 'green'}}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <LocalDiningIcon />
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <ShoppingBasketIcon />
                            </ListItemIcon>
                            <ListItemText primary="Items" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <HistoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="History" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItem
                            button
                        >
                            <ListItemIcon>
                                <LibraryBooksIcon />
                            </ListItemIcon>
                            <ListItemText primary="Feedback" />
                        </ListItem>
                        <ListItem button >
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

export default LeftNavigation;