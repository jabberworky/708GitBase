import React, { Component } from "react"
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import KeyDown from '@material-ui/icons/KeyboardArrowDown';
import KeyUp from '@material-ui/icons/KeyboardArrowUp';

const styles = theme => ({
  root: {
    '& > *': {
      margin: '10px',
      width: '10ch',
    },
  },
  root2: {
    border: 0,
    borderRadius: 3,
    height: 40,
    padding: '0 20px',
    margin: '10px'
  },
  background: {
    padding: theme.spacing(1),
    background: '#eeeeee',
  },
  paper: {
    padding: theme.spacing(1),

    color: theme.palette.text.primary,
    width: "100%"
  },
  input: {
    display: "flex",
    textAlign: "center",
    width: 300,
    marginLeft: 100,
    marginTop: 200
  },
  icon: {
    color: "blue",
    '& svg': {
      fontSize: 100,
      display: 'block', margin: 'auto'
    },
  },
  image: {
    position: 'relative',
    backgroundImage: 'url(http://hd18116987.com/images/main/main01.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: "100%",
    height: "160px"
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <Grid container spacing={1}>


          <Grid container item xs={7} spacing={1}>


            <Grid container item xs={12} spacing={0}>
              <Paper className={classes.paper}>
                <Box bgcolor="primary.dark" color="white" p={1}>트럭</Box>
                <Grid item>
                  종류 :
                     <Button variant="contained" color="primary" className={classes.root2}>5T 트럭</Button>
                  <Button variant="contained" color="primary" className={classes.root2}>10T 트럭</Button>
                </Grid>
                <Grid>
                  위치 :
                     <Button variant="contained" color="primary" className={classes.root2}>1번 하적장</Button>
                </Grid>
              </Paper>
            </Grid>


            <Grid container item xs={12} spacing={0}>
              <Paper className={classes.paper}>
                <Box bgcolor="primary.dark" color="white" p={1}>화물</Box>
                <Grid item>
                  종류 :
                     <Button variant="contained" color="primary" className={classes.root2}>과자</Button>
                  <Button variant="contained" color="primary" className={classes.root2}>아이스크림</Button>
                  <Button variant="contained" color="primary" className={classes.root2}>음료수</Button>
                  <Button variant="contained" color="primary" className={classes.root2}>빵</Button>
                </Grid>
                <Grid>
                  개수 :
                     <TextField type="number" InputLabelProps={{ shrink: true, }} />
                </Grid>
              </Paper>
            </Grid>


            <Grid container item xs={12} spacing={0}>
              <Paper className={classes.paper}>
                <Box bgcolor="primary.dark" color="white" p={1}>창고</Box>
                <Grid item>
                  <Button variant="contained" color="primary" className={classes.root2}>A의 2층</Button>
                </Grid>
                <Grid>
                  <Button variant="contained" color="primary" className={classes.root2}>A의 1층</Button>
                </Grid>
              </Paper>
            </Grid>


          </Grid>


          <Grid container item xs={5} spacing={0}>
            <Paper className={classes.paper}>
              <Box bgcolor="primary.dark" color="white" p={1}>화물</Box>
              <Grid component={Paper} elevation={0} square className={classes.image}>

              </Grid>
              <Grid container item xs={12}>
                <Grid container item xs={6} justify="center" alignItems="center">
                  <IconButton className={classes.icon}> <KeyUp /> </IconButton>
                </Grid>
                <Grid icontainer item xs={6} justify="center" alignItems="center">
                  <IconButton className={classes.icon}> <KeyDown /> </IconButton>
                </Grid>


              </Grid>
              <Grid component={Paper} elevation={0} square className={classes.image}>

              </Grid>
            </Paper>
          </Grid>

          <Button href='/#/Driving' fullWidth variant="contained" color="primary">작업 시작</Button>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
