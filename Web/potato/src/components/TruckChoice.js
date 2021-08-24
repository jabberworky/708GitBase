import React, { Component } from "react"
import Button from './Buttonst'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import colorchange from "./colorchange";
import Title from './Title';

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.primary,
        width: "100%"
    }
});

const truckType = [
    {
        id: 1,
        name: "20T TRUCK"
    }, {
        id: 2,
        name: "25T TRUCK"
    }
]

const truckLocation = [
    {
        id: 3,
        name: "하적장"
    }
]

class TruckChoice extends Component {
    state = {
        cc1: null,
        cc2: null
    };

    changeColor = row => {
        this.setState(colorchange(this.state, row))
        console.log(this.state)
    }

    render() {
        const { classes } = this.props;
        return (
            <div >
                <Grid container="container" item="item" xs={12} spacing={0}>
                    <Paper className={classes.paper}>
                        <Title>Truck</Title>

                        <Grid item="item">
                            종류 : {
                                truckType.map((list => (
                                    <Button
                                        id={list.id}
                                        name={list.name}
                                        afd={this.state.cc1}
                                        clickColor={this.changeColor}
                                        clickHandler={this.handleClick}></Button>
                                )))
                            }
                        </Grid>

                        <Grid>
                            위치 : {
                                truckLocation.map((list => (
                                    <Button
                                        id={list.id}
                                        name={list.name}
                                        afd={this.state.cc2}
                                        clickColor={this.changeColor}
                                        clickHandler={this.handleClick}></Button>
                                )))
                            }
                        </Grid>

                    </Paper>
                </Grid>
            </div>
        )
    }
}
export default withStyles(styles)(TruckChoice);
