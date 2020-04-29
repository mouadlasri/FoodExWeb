import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div style={{ paddingLeft: 30, paddingRight: 30, height: '100vh' }}>
            <div className="page-title">
                <MoreVertIcon className="page-title-icon">Dashboard</MoreVertIcon>
                <h3>Feedback</h3>
                
            </div>

            
                {/* Line Chart of Revenues periodically + Bar Chart of User Activities (# orders) periodically */}
                <Grid container spacing={4} style={{ marginTop: 20 }}>
            <Grid item xs={12} sm={4} md={4} lg={6} >
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Made by Mouad Lasri
        </Typography>
                            <Typography variant="h5" component="h2">
                                Mouad Lasri - April 24th 2020
        </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                I would like to have more item variety
        </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small"></Button>
                        </CardActions>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={4} md={4} lg={6} >
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Made by Mouad Lasri
        </Typography>
                            <Typography variant="h5" component="h2">
                                Mouad Lasri - April 24th 2020
        </Typography>
                            <Typography className={classes.pos} color="black" style={{color: 'black'}}>
                                I would like to have more item variety
        </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small"></Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={6} >
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Made by Mouad Lasri
        </Typography>
                            <Typography variant="h5" component="h2">
                                Mouad Lasri - March 29th 2020
        </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                I would like to have more item variety
        </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small"></Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            
            
            
            </div>
        
    );
}