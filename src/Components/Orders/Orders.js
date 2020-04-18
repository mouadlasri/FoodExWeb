import React from 'react';

// Axios
import axios from 'axios';
import { Grid } from '@material-ui/core';
//Import the pagination component
// Expansion Panel components
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Pagination from "@material-ui/lab/Pagination";


// Custom components
import InProgressOrders from './InProgressOrders/InProgressOrders';



// Icons
import MoreVertIcon from '@material-ui/icons/MoreVert';


class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inProgressOrders: null,
            readyToPickupOrders: null,
            deliveredOrders: null,
            dataLoaded: false,

            page: 1,
            rowsPerPage: 12
        }

    }

    fetchInProgressOrders = async () => {
        var restaurantId = 1 //Proxirest
        // 1. Get orders details 
        axios.get(`https://localhost:44312/api/Restaurants/ListOrders/${restaurantId}/1`).then((response) => {
            console.log('Data:', response.data);
            this.setState({
                inProgressOrders: response.data,
                data: response.data,
            });

        }).catch(error => console.log(error));

        
    }

    fetchReadyToPickupOrders = async () => {

    }

    fetchDeliveredOrders = async () => {

    }


    async componentDidMount() {
        await this.fetchInProgressOrders();
    }

    

    handleChangePage = (event, page) => {
        console.log("PAGE => ", page);
        this.setState({ page: page });
    };
 
    // Change page

    render() {

        if (this.state.inProgressOrders == null) {
            return (
                <div>Loading Data...</div>
            )
        }
        
        const { data, rowsPerPage, page } = this.state;
        
        var inProgressOrders = this.state.inProgressOrders.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage).map((order, index) => {
            return (
                <Grid item lg={2}>
                    <Card style={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {order.orderId}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                    </Button>
                            <Button size="small" color="primary">
                                Learn More
                    </Button>
                        </CardActions>
                    </Card>
                </Grid>
                 
            );
        });

       
        return (
            <div style={{ paddingLeft: 30, paddingRight: 30 }}>
                <div className="page-title">
                    <MoreVertIcon className="page-title-icon">Dashboard</MoreVertIcon>
                    <h3>Orders</h3>

                    <InProgressOrders />
                </div>

                {/* In-Progress Orders */}
                <div style={{ width: '100%' }}>
                    <ExpansionPanel defaultExpanded={true}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <p style={{ fontFamily: 'Roboto' }}>In-progress Orders</p>
                            <Typography>In-Progress Orders</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container spacing={3}>
                                {inProgressOrders}
                            </Grid>
                        </ExpansionPanelDetails>
                        <Pagination
                            count={Math.ceil(data.length / rowsPerPage)}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChange={this.handleChangePage}
                        />
                    </ExpansionPanel>
                </div>
            </div>
        )
        
       
    }
}

export default Orders;