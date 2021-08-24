import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import hostdata from "../hostData.json"

function LinearProgressWithLabel(props) {

    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export default function Probar() {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);



    React.useEffect(() => {
        const timer = setInterval(() => {
            //setProgress((prevProgress) => (prevProgress >= 100 ? 3 : prevProgress + 1.3));
            if (hostdata.work == 'upstream') {
                switch (hostdata.status) {
                    case 'a': setProgress((prevProgress) => (prevProgress >= 20 ? 20 : prevProgress + 1));
                    case 'x': setProgress((prevProgress) => (prevProgress >= 30 ? 30 : prevProgress + 1));
                    case 'z': setProgress((prevProgress) => (prevProgress >= 40 ? 40 : prevProgress + 1));
                    case 'b': setProgress((prevProgress) => (prevProgress >= 60 ? 60 : prevProgress + 1));
                    case 'y': setProgress((prevProgress) => (prevProgress >= 70 ? 70 : prevProgress + 1));
                    case 'd': setProgress((prevProgress) => (prevProgress >= 90 ? 90 : prevProgress + 1));
                }
            }

        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root}>
            <LinearProgressWithLabel value={progress} />
        </div>
    );
}