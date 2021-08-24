import React, {Component} from "react";
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from "@material-ui/core";


const styles  = theme => ({
    btnstyle: {
      '& svg': {
        fontSize: 100,
        display: 'block', margin: 'auto'}
    },
  });

class Buttonst extends Component {
  handleClick = () => {
    this.props.clickColor(this.props.id);
  };

  render() {
    const {classes} = this.props;
    return (
        <IconButton
        variant="contained"
        color={this.props.id === this.props.afd ? "primary" : "none"}
        className={classes.btnstyle}
        onClick={this.handleClick}>
            {this.props.updown}
        </IconButton>
    );
  }
}

export default withStyles(styles)(Buttonst)