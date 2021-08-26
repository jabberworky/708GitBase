import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import blue from '@material-ui/core/colors/blue';
import { Button } from '@material-ui/core';

const color = blue[200];


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: color,
    },
}));

export default function CtrlFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />

            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">Test footer bar this section will be controller</Typography>
                    <Button>STOP</Button>
                </Container>
            </footer>
        </div>
    );
}