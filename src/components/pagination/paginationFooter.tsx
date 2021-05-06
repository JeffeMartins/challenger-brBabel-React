import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
                display: 'flex',
                justifyContent: 'flex-and',
                width: '100%',
            },
        },
    }),
);

type props = {};

// type paginationFooter = {
//     numberPage: number,
// }

export default function BasicPagination() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination count={5}/>

        </div>
    );
}