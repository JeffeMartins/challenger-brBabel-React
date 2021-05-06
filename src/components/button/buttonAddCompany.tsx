import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

export default function ButtonAddCompany() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button style={{width: 200}} variant="contained" color="primary">
                Adicionar
            </Button>
        </div>
    );
}