import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import CirLabel from './CirLabel';
import { Box } from '@material-ui/core';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Vinfo() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Folk Lift Info</Title>
            <Typography component="p" variant="h5">
                {'전동 지게차 2호기'}
            </Typography>

            <Typography color="textSecondary" className={classes.depositContext}>
                장비관리 담당: 우지범
            </Typography>
            <Box marginTop={1}>
                <span> <CirLabel /> </span>

                <Typography color="textSecondary" variant="h6">
                    Battery Life (이 글씨 퍼센트 옆으로)
                </Typography>
            </Box>

            <div>
                {/* 특이사항으로 바꿔서 점검일과 상세 스펙 팝업 페이지 필요 */}
                <Link color="primary" href="#" onClick={preventDefault}>
                    다음 점검일 2022년 03월 21일
                </Link>
            </div>
        </React.Fragment>
    );
}