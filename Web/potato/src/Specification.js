import React from 'react';
/* 모먼트js 값을 한국어로 받기 위해서는 아래와같은 코드가 필요하다. */
/* 예 AM => 오전 */

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

import Clock from 'react-live-clock';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import PanToolIcon from '@material-ui/icons/PanTool';

import TruckChoice from './components/TruckChoice'
import ObjectChoice from './components/ObjectChoice'
import WarehouseChoice from './components/WarehouseChoice'
import LocationChoice from './components/LocationChoice'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        paddingLeft: 24
    },
    appBar: {
        top: 'auto',
        bottom: 0
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto'
    },
    topSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column'
    },
    fixedHeight: {
        height: 650
    }
}));

export default function Driving() {
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                    <Fab href='/#/Driving' color="secondary" aria-label="add" className={classes.fabButton}>
                        <FingerprintIcon fontSize="large" />
                    </Fab>

                    <Box marginLeft={2}>
                        <Typography variant="h6">

                            <Clock format={'A h:m:s'} ticking={true} timezone={'Asia/Seoul'} />
                        </Typography>
                    </Box>
                    <Box marginLeft={2}>
                        <Typography>{"실외온도 25°C"}</Typography>
                    </Box>
                </Toolbar>
            </AppBar>

            <main className={classes.content}>

                <Container maxWidth="lg" className={classes.container}>
                    <Typography gutterBottom="gutterBottom" variant="h2">
                        POTATO systems
                    </Typography>
                    <Grid container="container" spacing={3}>
                        <Grid item="item" xs={12} md={7} lg={7}>

                            <Box >

                                <TruckChoice />

                            </Box>

                            <Box marginTop={3}>
                                <ObjectChoice />
                            </Box>

                            <Box marginTop={3}>
                                <WarehouseChoice />
                            </Box>

                        </Grid>

                        <Grid item="item" xs={12} md={5} lg={5} >
                            <LocationChoice />

                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div >
    );
}