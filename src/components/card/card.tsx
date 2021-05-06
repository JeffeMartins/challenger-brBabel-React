import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MockJson from "../../api/MOCK_DATA.json";
import commercial from "../../static/images/cards/commercial.jpg";




const useStyles = makeStyles({
    root: {
        maxWidth: 260,
        maxHeight: 260,

    },
});

type props = {};

interface CompanyModel {
    name: string;
    cnpj: string;
    demanda: number;
    faturamentoAnual: string;
    sobre: string;
    logo: string;
}


export default function CardCompany(): JSX.Element {
    const classes = useStyles();

    const [log, setLogo] = useState<CompanyModel[]>()

    const teste = import('../../static/images/cards/americanas.png')

    useEffect(() => {

    }, [])

    return (

        <>

            {

                MockJson.map((data) => {

                    return (

                        <Grid item xs={3}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={data.name}
                                        height="120"
                                        image={commercial}
                                        title={data.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {data.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {data.sobre}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    )
                })

            }

        </>

    )


}
