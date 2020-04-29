import React from 'react';
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
import { Grid } from '@material-ui/core';
// Expansion component and Pagination
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Pagination from "@material-ui/lab/Pagination";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import TelegramIcon from '@material-ui/icons/Telegram';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import Button from '@material-ui/core/Button';


// styling
import './ReadyToPickupOrders.css';

class ReadyToPickupOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
            page: 1,
            rowsPerPage: 8,
            data: null
        }
    }

    componentDidMount() {

    }

    // Function that handles the page change
    handleChangePage = (event, page) => {
        this.setState({ page: page });
    };

    // Function to count the total amount of an order
    countTotalOrder = (order) => {
        let total = 0;
        for (var i = 0; i < order.itemsOrdered.length; i++) {
            // console.log('Item ordered: ', item);
            total += parseFloat(order.itemsOrdered[i].itemPrice).toFixed(2) * parseFloat(order.itemsOrdered[i].itemQuantity).toFixed(2);
        }
        // console.log('Order: ', order);
        return parseFloat(total).toFixed(2);
    }

    render() {
        const { page, rowsPerPage } = this.state;
        const data = this.props.readyToPickupOrders;

        var readyToPickUpOrders = this.props.readyToPickupOrders.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage).map((order, index) => {
            return (
                <Grid item xs={6} sm={4} md={2} lg={3} key={index} >
                    <div className="order-container" >
                        <div className="order-container-header" style={{ borderTopLeftRadius: '6px', borderTopRightRadius: '6px', paddingTop: '5px', paddingBottom: '5px', backgroundColor: '#F5B335' }}>
                            <p style={{ color: 'white', fontFamily: 'Roboto' }}>Ordered {new Date(order.dateOrdered).toLocaleString()}</p>

                        </div>
                        <div className="order-container-items">
                            <p className="order-text-title">Order by: {order.firstName} {order.lastName} - {order.userId}</p>
                            <p className="order-text-date">Order ID: PXT{order.orderId}</p>

                            <p style={{ margin: 0, padding: 0, textAlign: 'center', fontWeight: 'bold' }}>Ready To Pick Up Details</p>
                            <TableContainer component={Paper} >
                                <Table aria-label="simple table" >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Name</TableCell>
                                            <TableCell align="left">Qty.</TableCell>
                                            <TableCell align="left" style={{}}>Price</TableCell>
                                            <TableCell align="left">Total</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {order.itemsOrdered.map((item, index) => {
                                            return (
                                                <TableRow key={index} hover={true}>
                                                    <TableCell className="item-details-table">
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                            <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                                <Avatar alt="Remy Sharp" className="item-avatar" src={item.itemImage} />
                                                            </div>
                                                            <div>
                                                                {item.itemName}
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="item-details-table">{item.itemQuantity}</TableCell>
                                                    <TableCell className="item-details-table">{item.itemPrice} Dhs</TableCell>
                                                    <TableCell className="item-details-table">{parseFloat(item.itemPrice * item.itemQuantity).toFixed(2)} Dhs</TableCell>
                                                </TableRow>
                                            )
                                        })}
                                        <TableRow>
                                            <TableCell colSpan={2} style={{ fontSize: '24px', fontFamily: 'Roboto', fontWeight: 'bold' }}>Total</TableCell>
                                            <TableCell colSpan={2} style={{ fontSize: '16px', fontFamily: 'Roboto', fontWeight: 'bold', color: 'rgb(228, 97, 99)' }}>{this.countTotalOrder(order)} Dhs</TableCell>

                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>


                        </div>
                        <div className="order-container-footer">
                            <Button variant="outlined" color="primary" className="ready-to-pick-up-order-button" onClick={() => this.props.deliverOrder(order)}>
                                Deliver Order
                            </Button>
                        </div>
                    </div>


                </Grid>

            );
        });

        return (
            <div style={{ width: '100%', marginTop: '20px' }} className="ready-to-pick-up-orders-header">
                <ExpansionPanel defaultExpanded={true}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <CheckCircleIcon style={{ height: '45px', width: '45px', color: 'white' }} />
                            <p style={{ fontFamily: 'Roboto', paddingLeft: '10px', fontSize: '18px', color: 'white' }}>Ready To Pick Up Orders</p>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing={3}>
                            {readyToPickUpOrders}
                        </Grid>
                    </ExpansionPanelDetails>
                    {/* Pagination Component */}
                    <Pagination
                        count={Math.ceil(data.length / this.state.rowsPerPage)}
                        rowsPerPage={this.state.rowsPerPage}
                        page={page}
                        onChange={this.handleChangePage}
                    />
                </ExpansionPanel>
            </div >
        )

    }
}

export default ReadyToPickupOrders;