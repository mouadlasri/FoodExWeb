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


import Rating from '@material-ui/lab/Rating/';

import MoreVertIcon from '@material-ui/icons/MoreVert';


// import css stylesheet
import './Users.css';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersInformation: null
        }
    }


    async componentDidMount() {
        await axios.get('https://localhost:44312/api/Restaurants/1/users').then(response => {
            this.setState({
                usersInformation: response.data
            });
        }).catch(error => console.log(error));
    }

    
    render() {

        if (this.state.usersInformation) {
            return (
                <div style={{ paddingLeft: 30, paddingRight: 30 }}>
                    <div className="page-title">
                        <MoreVertIcon className="page-title-icon">Dashboard</MoreVertIcon>
                        <h3>Users Details</h3>
                    </div>
                    <div className="recent-orders-container">


                        <TableContainer style={{ height: '100%' }} component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">First Name</TableCell>
                                        <TableCell align="left">Last Name</TableCell>
                                        <TableCell align="left">Student ID</TableCell>
                                        <TableCell align="left">Phone Number</TableCell>
                                        <TableCell align="left">Date Joined</TableCell>
                                        <TableCell align="left">Total Orders</TableCell>
                                        {/* <TableCell align="left">Rating</TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.usersInformation.map((row) => (
                                        <TableRow hover key={row.orderId}>
                                            <TableCell align="left">{row.firstName}</TableCell>
                                            <TableCell align="left">{row.lastName}</TableCell>
                                            <TableCell align="left">{row.userId}</TableCell>
                                            <TableCell align="left">{row.phoneNumber}</TableCell>
                                            <TableCell align="left">{new Date(row.dateJoined).toDateString()}</TableCell>
                                            <TableCell align="left">{row.totalOrders}</TableCell>
                                            {/* <TableCell align="left">
                                                <Rating name="read-only" value={row.userRating} readOnly />
                                            </TableCell> */}
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

export default Users;