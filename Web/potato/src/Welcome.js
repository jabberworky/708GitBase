import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader, Button, Paper, Box, Grid, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import PinDropIcon from '@material-ui/icons/PinDrop';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        position: 'relative',
        backgroundImage: 'url(http://hd18116987.com/images/main/main01.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    back: {
        backgroundColor: theme.palette.background.paper
    },
    main: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        position: 'static',
        padding: theme.spacing(1),
        //backgroundColor: theme.palette.primary.dark,
    },
    btn: {
        margin: theme.spacing(5),
        padding: theme.spacing(1),
        fontSize: '2rem',
        backgroundColor: 'primary'
    },
    comp: {
        margin: theme.spacing(2, 5),
        padding: theme.spacing(1),
        fontSize: '2rem',
        textAlign: 'center',

        //color: theme.palette.primary,
        //윗줄 되는건지 의심스러움
    },
    list: {
        margin: theme.spacing(2),
        component: 'div',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: "#EEE"
    },
    pricing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        marginBottom: "16px"
    },
    descriptions: {
        margin: 0,
        padding: 0,
        listStyle: "none"
    }
}));

export default function Welcome({ name, location, status, battery, temperature }) {
    const classes = useStyles();
    const [names, setNames] = useState([
        { id: 1, number: '1호기', dType: '디젤' },
        { id: 2, number: '2호기', dType: '전기' }
    ]);

    return (

        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid xs={7} component={Paper} elevation={6} square className={classes.image} />

            <Grid xs={5} className={classes.back} >
                <Grid className={classes.main}>

                    <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                        {'어서오세요'}

                        <br />

                        {name}
                        {'님'}
                    </Typography>
                    <Box p={4}>
                        <Card>
                            <CardHeader
                                title="전동 지게차 2호기"
                                titleTypographyProps={{ align: "center" }}
                                className={classes.header}
                            />
                            <CardContent>
                                <div className={classes.pricing}>

                                    <Typography htmlFontSize={50} variant="h3" color="textPrimary">
                                        {battery}
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                        % - battery life
                                    </Typography>
                                </div>
                                <ul className={classes.descriptions}>

                                    <Typography component="li"
                                        variant="subtitle1"
                                        align="center"
                                    >
                                        <SupervisorAccountIcon fontSize="small" />
                                        {status}
                                    </Typography>
                                    <Typography component="li"
                                        variant="subtitle1"
                                        align="center"
                                    >
                                        <PinDropIcon fontSize="small" />
                                        {location}
                                    </Typography>

                                    <Typography component="li"
                                        variant="subtitle1"
                                        align="center"
                                    >
                                        <BrightnessHighIcon fontSize="small" />
                                        {temperature}
                                        {'℃'}
                                    </Typography>
                                </ul>
                            </CardContent>
                            <CardActions>
                                <Button href='/#/specification' fullWidth variant="contained" color="primary">
                                    작업 시작
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                    <Box>
                        <Typography variant="body2" color="textSecondary" align="center">
                            {'POTATO Folk Lift Self Driving System'}
                            <br />
                            {'Copyright © POTATO'}
                            {' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid >

    );
}

Welcome.defaultProps = {
    name: "지범",
    location: '창고',
    status: '작업중',
    battery: '82',
    temperature: '25'
}