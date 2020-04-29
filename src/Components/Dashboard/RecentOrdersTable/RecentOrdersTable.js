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

// import css stylesheet
import './RecentOrdersTable.css';

class RecentOrdersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recentOrders: null
        }
    }


    async componentDidMount() {
        await axios.get('https://localhost:44312/api/RestaurantAnalytics/1/recentOrders').then(response => {
            console.log('Recent Orders response: ', response.data);
            this.setState({
                recentOrders: response.data
            });
        }).catch(error => console.log(error));
    }

    // Dynamically change the styling of the order status
    orderStatusStyle = (orderStatus) => {
        // console.log('Waiting Time => ', waitingTime);
        switch (orderStatus) {
            // fontfamily: 'Roboto', fontSize: 30, fontWeight: 'bold'
            case 1:
                return { color: 'crimson', fontSize: 12 }
            case 2:
                return { color: '#1e88e5', fontSize: 12 }
            case 3:
                return { color: '#1A5632', fontSize: 12 }
        }
    }

    // Dynamically change the text of the order status
    orderStatusText = (orderStatus) => {
        switch (orderStatus) {
            case 1:
                return 'In-Progress';
            case 2:
                return 'Ready to pick up';
            case 3:
                return 'Delivered'
        }
    }


    render() {

        if (this.state.recentOrders) {
            return (
                <div className="recent-orders-container">
                    <div className="recent-orders-title">
                        <p>Recent Orders</p>
                    </div>
                    <TableContainer style={{ height: '100%' }} component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>OrderId</TableCell>
                                    <TableCell align="left">First Name</TableCell>
                                    <TableCell align="left">Last Name</TableCell>
                                    <TableCell align="left">Student ID</TableCell>
                                    <TableCell align="left">Date Ordered</TableCell>
                                    <TableCell align="left">Order Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.recentOrders.map((row) => (
                                    <TableRow hover key={row.orderId}>
                                        <TableCell component="th" scope="row">
                                            PXT{row.orderId}
                                        </TableCell>
                                        <TableCell align="left">{row.firstName}</TableCell>
                                        <TableCell align="left">{row.lastName}</TableCell>
                                        <TableCell align="left">{row.userId}</TableCell>
                                        <TableCell align="left">{row.dateOrdered}</TableCell>
                                        <TableCell align="center" style={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <FiberManualRecordIcon className="icon" style={this.orderStatusStyle(row.orderStatus)} ></FiberManualRecordIcon>
                                            <span style={{ marginLeft: 10, fontFamily: 'roboto', color: "#999" }}>{this.orderStatusText(row.orderStatus)}</span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
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

export default RecentOrdersTable;