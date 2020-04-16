import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper, Icon } from '@material-ui/core';

import axios from 'axios';

// import styling
import './TrendingOrders.css';

class TrendingOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingOrders: null
        }
    }

    componentDidMount() {
        axios.get('https://localhost:44312/api/RestaurantAnalytics/1/trendingOrders').then(response => {
            this.setState({
                trendingOrders: response.data
            });

            console.log('Trending Orders: ', this.state.trendingOrders);
        }).catch(error => console.log(error));
    }

    render() {
        if (this.state.trendingOrders != null) {
            const results = this.state.trendingOrders.map((item) => {
                return (
                    <Grid item lg={3}>
                        <Card key={item.itemId} style={{paddingBottom: '10px'}}>
                            <CardActionArea>
                                <CardMedia className="testMedia"
                                    image={item.itemImage}
                                    title={item.itemName}
                                />
                                <CardContent className='card-content'>
                                    <div style={{ clear: 'both'}}>
                                        <p style={{ float: 'left', color: '#303440', fontSize: '16px', fontFamily: 'Roboto' }}>{item.itemName}</p>
                                        <p style={{ float: 'right', color: '#19ae77', fontFamily: 'Roboto', fontSize: '16px', fontWeight: 'bold' }}>{item.itemPrice.toFixed(2)} DHs</p>
                                    </div>
                                    <div style={{  clear: 'both' }}>
                                        <p style={{ float: 'left' }}><span style={{ color: '#999b9f', fontFamily: 'Roboto', fontSize: '14px' }}>Orders:</span><span style={{ color: '#e46163', fontWeight: 'bold', fontSize: '14px', marginLeft: '5px' }}>{item.totalOrdered}</span> </p>
                                        <p style={{ float: 'right' }}><span style={{ color: '#999b9f', fontFamily: 'Roboto', fontSize: '14px' }}>Revenues:</span><span style={{ color: '#e46163', fontWeight: 'bold', fontSize: '14px', marginLeft: '5px' }}>{item.totalRevenues} DHs</span></p>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    
                )   
            })
            return (
                <div className="trending-orders-container">
                    <div className="trending-orders-title">
                        <p>Trending Orders</p>

                    </div>
                    <Grid container spacing={4} style={{ marginTop: 20, marginBottom: 20, width: '100%', margin: 'auto' }}>
                        {results}
                    </Grid>
                </div>



            )
        }
       
        else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}

export default TrendingOrders;