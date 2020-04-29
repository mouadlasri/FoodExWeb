import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Icon } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import axios from 'axios';
import Button from '@material-ui/core/Button';

// Avatar components for menu items
import Avatar from '@material-ui/core/Avatar'


import MoreVertIcon from '@material-ui/icons/MoreVert';


// import css stylesheet
import './Items.css';

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsInformation: null
        }
    }


    async componentDidMount() {
        await axios.get('https://localhost:44312/api/Restaurants/1/items').then(response => {
            this.setState({
                itemsInformation: response.data
            });
        }).catch(error => console.log(error));
    }

    // Change state of item to active
    changeItemStatus = (item) => {
        // first get the index of the item  in the state variable
        var itemIndex = this.state.itemsInformation.indexOf(item);

        // make a copy of the state, and change the item status of the copy variable
        var itemsCopy = this.state.itemsInformation;

        if (itemsCopy[itemIndex].itemStatus == 0) {
            itemsCopy[itemIndex].itemStatus = 1;
        }
        else {
            itemsCopy[itemIndex].itemStatus = 0;

        }

        // set the state with the new items copy variable
        this.setState({
            itemsinformation: itemsCopy
        });

        // update the item status in the database using a POST request
         axios.post('https://localhost:44312/api/Restaurants/1/updateItemStatus', null, { params: { itemId: item.itemId } }).then(response => {
            
        }).catch(error => console.log(error));
    }

    // Dynamically change the status text of the item
    itemStatusText = (itemStatus) => {
        switch (itemStatus) {
            case 0:
                return 'Inactive';
            case 1:
                return 'Active';
        }
    }


    // Dynamically change the styling of the item status
    itemStatusStyle = (itemStatus) => {
        // console.log('Waiting Time => ', waitingTime);
        switch (itemStatus) {
            // fontfamily: 'Roboto', fontSize: 30, fontWeight: 'bold'
            case 0:
                return { color: 'crimson', fontSize: 12, fontWeight: 'bold' }
            case 1:
                return { color: '#1A5632', fontSize: 12, fontWeight: 'bold' }
        }
    }


    // Dynamically set the action button of the items
    itemButtonAction = (row, itemStatus) => {
        switch (itemStatus) {
            case 0:
                return (
                    <Button variant="outlined" color="primary" className="delivered-order-button" onClick={() => this.changeItemStatus(row)} >
                        Mark Active
                    </Button>
                );
            case 1:
                return (
                    <Button variant="outlined" color="primary" className="complete-order-button" onClick={() => this.changeItemStatus(row)} >
                        Mark Inactive
                    </Button>
                );
        }
    }



    render() {

        if (this.state.itemsInformation) {
            return (
                <div style={{ paddingLeft: 30, paddingRight: 30 }}>
                    <div className="page-title">
                        <MoreVertIcon className="page-title-icon">Dashboard</MoreVertIcon>
                        <h3>Menu Items</h3>
                    </div>
                    <div className="recent-orders-container">
                        <TableContainer style={{ height: '100%' }} component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Item Id</TableCell>
                                        <TableCell align="center">Name</TableCell>
                                        <TableCell align="center">Category</TableCell>
                                        <TableCell align="center">Image</TableCell>
                                        <TableCell align="center">Price</TableCell>
                                        <TableCell align="center">Waiting Time</TableCell>
                                        <TableCell align="center">Total Ordered</TableCell>
                                        <TableCell align="center">Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.itemsInformation.map((row) => (
                                        <TableRow hover key={row.orderId}>
                                            <TableCell align="center">{row.itemId}</TableCell>
                                            <TableCell align="center">{row.itemName}</TableCell>
                                            <TableCell align="center">{row.itemCategory}</TableCell>
                                            <TableCell align="center">
                                                <Avatar  src={row.itemImage} />
                                            </TableCell>
                                            <TableCell align="center">{row.itemPrice}</TableCell>
                                            <TableCell align="center">{row.itemWaitingTime}</TableCell>
                                            <TableCell align="center">{row.totalOrdered}</TableCell>
                                            <TableCell align="center">
                                                <span style={this.itemStatusStyle(row.itemStatus)}> {this.itemStatusText(row.itemStatus)}</span>
                                            </TableCell>
                                            <TableCell align="center">
                                                {this.itemButtonAction(row, row.itemStatus)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>

            );
        }
        else {
            return (
                <div className="recent-orders-container">
                    Loading Data
                </div>
            )
        }

    }
}

export default Items;