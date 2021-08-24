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

const boxtype = [
    {
        id: 4,
        name: "과자"
    }, {
        id: 5,
        name: "아이스크림"
    }, {
        id: 6,
        name: "음료"
    }, {
        id: 7,
        name: "빵"
    }
]

const boxCount = [
    {
        id: 8,
        name: "1"
    }
]

class ObjectChoice extends Component {
    state = {
        cc3: null,
        cc4: null
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

                        <Title>Chargo</Title>

                        <Grid item="item">
                            종류 : {
                                boxtype.map((list => (
                                    <Button
                                        id={list.id}
                                        name={list.name}
                                        afd={this.state.cc3}
                                        clickColor={this.changeColor}
                                        clickHandler={this.handleClick}></Button>
                                )))
                            }
                        </Grid>

                        <Grid>
                            개수 : {
                                boxCount.map((list => (
                                    <Button
                                        id={list.id}
                                        name={list.name}
                                        afd={this.state.cc4}
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
export default withStyles(styles)(ObjectChoice);
