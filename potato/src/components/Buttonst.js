import React, {Component} from "react";
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';


const styles  = theme => ({
    btnstyle: {
      border: 0,
      borderRadius: 3,
      height: 40,
      padding: '0 20px',
      margin : '10px'
    },
  });

class Buttonst extends Component {
  handleClick = () => {
    this.props.clickColor(this.props.id);
  };

  render() {
    const {classes} = this.props;
    return (
        <Button
        variant="contained"
        color={this.props.id === this.props.afd ? "primary" : "none"}
        className={classes.btnstyle}
        onClick={this.handleClick}>
            {this.props.name}
        </Button>
    );
  }
}

export default withStyles(styles)(Buttonst)