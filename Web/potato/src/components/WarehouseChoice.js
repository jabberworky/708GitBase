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

const storeLocation = [
    {
        id: 9,
        name: "창고"
    }
]

class WarehouseChoice extends Component {
    state = {
        cc5: null
    };

    changeColor = row => {
        this.setState(colorchange(this.state, row))
        console.log(this.state)
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container="container" item="item" xs={12} spacing={0}>
                    <Paper className={classes.paper}>
                        <Title>Store</Title>

                        <Grid item="item">
                            위치 : {
                                storeLocation.map((list => (
                                    <Button
                                        id={list.id}
                                        name={list.name}
                                        afd={this.state.cc5}
                                        clickColor={this.changeColor}
                                        clickHandler={this.handleClick}></Button>
                                )))
                            }
                        </Grid>

                    </Paper>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(WarehouseChoice);
