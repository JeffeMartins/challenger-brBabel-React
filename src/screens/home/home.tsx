import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonAddCompany from "../../components/button/buttonAddCompany";
import BasicPagination from "../../components/pagination/paginationFooter";
import Card from "../../components/card/card";

type props = {};

export default function Home(props: props) {

    useEffect(() => {

    }, [])


    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: 'center', height: '100%'}}>

            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                        <span style={{fontSize: 30}}>Empresas</span>
                        <ButtonAddCompany/>
                    </div>
                </Grid>
                <Card/>
                <Grid item xs={12}>
                    <div style={{display: 'flex', alignItems: "center", width: '100%'}}>
                        <BasicPagination/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}