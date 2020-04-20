import React from 'react';

// Axios
import axios from 'axios';

import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

// Expansion component and Pagination
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Pagination from "@material-ui/lab/Pagination";

// Avatar components for order items
import Avatar from '@material-ui/core/Avatar';

// Table components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Custom components
import InProgressOrders from './InProgressOrders/InProgressOrders';
import ReadyToPickupOrders from './ReadyToPickupOrders/ReadyToPickupOrders';
import DeliveredOrders from './DeliveredOrders/DeliveredOrders';


import './Orders.css';

// Icons
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inProgressOrders: null,
            readyToPickupOrders: null,
            deliveredOrders: null,
            dataLoaded: false,
            page: 1,
            rowsPerPage: 8,
            data: null,

            pageReadyToPickup: 1
        }

    }

    fetchInProgressOrders = async () => {
        var restaurantId = 1 //Proxirest

        // 1. Get in-progres orders 
        axios.get(`https://localhost:44312/api/Restaurants/ListOrders/${restaurantId}/1`).then((response) => {
            this.setState({
                inProgressOrders: response.data,
                data: response.data
            });

        }).catch(error => console.log(error));

        // Get Ready to pick up orders
        axios.get(`https://localhost:44312/api/Restaurants/ListOrders/${restaurantId}/2`).then((response) => {
            this.setState({
                readyToPickupOrders: response.data,
            });

        }).catch(error => console.log(error));

        // Get Delivered orders
        axios.get(`https://localhost:44312/api/Restaurants/ListOrders/${restaurantId}/3`).then((response) => {
            this.setState({
                deliveredOrders: response.data,
            });

        }).catch(error => console.log(error));
    }

    

    async componentDidMount() {
        await this.fetchInProgressOrders();
    }

    
    // Complete order
    completeOrder = (order) => {
        console.log('Order clicked: ', order);
        
        // push the order into the complete orders array
        this.setState({
            readyToPickupOrders: [order, ...this.state.readyToPickupOrders]
        });
    }


    // Function that changes the page in the state
    handleChangePage = (event, page) => {
        this.setState({ page: page });
    };
 
    render() {
        console.log('Rows per page: ', this.state.rowsPerPage);
        if (this.state.inProgressOrders == null) {
            return (
                <div>Loading Data...</div>
            )
        }
        
        const { data, rowsPerPage, page } = this.state;
        
        return (
            <div style={{ paddingLeft: 30, paddingRight: 30 }}>
                <div className="page-title" style={{marginTop: '10px', marginBottom: '20px'}}>
                    <MoreVertIcon className="page-title-icon">Dashboard</MoreVertIcon>
                    <h3>Orders</h3>
                </div>

                <InProgressOrders inProgressOrders={data} completeOrder={this.completeOrder} />

                <ReadyToPickupOrders readyToPickupOrders={this.state.readyToPickupOrders} />
                
                <DeliveredOrders deliveredOrders={this.state.deliveredOrders} />
            </div>
        )
        
       
    }
}

export default Orders;