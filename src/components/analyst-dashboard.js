import * as React from "react"
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import service from "../api/invoke-function-service"
import { getRapidAPIData } from "../api/invoke-external-service";
import MarketDataTable from "./analyst-tableview";
import FormAlert from './forms/alert'


const MarketData = () => {
    const [symbolList, setSymbolList] = React.useState([]);
    const [selectedSymbol, setSelectedSymbol] = React.useState('');
    const [liveMarketData, setLiveMarketData] = React.useState(null);
    const [apiCofigStatus, setApiConfigStatus] = React.useState('default');

    const searchData = () => {
        if (selectedSymbol) {
            console.log(selectedSymbol.symbol)
            // service Data from RapidAPI
            const data = getRapidAPIData(selectedSymbol.config);
            data.then((response) => {
                if (response.status === 200) {
                    setLiveMarketData(response.data)
                } else {
                    setApiConfigStatus('error');
                }
            }).catch((e) => {
                setApiConfigStatus('error');
                console.log('An API error occurred', e);
            })
        } else {
            setApiConfigStatus('error');
        }
    }

    React.useEffect(() => {
        service.get('get-configured-symbols').then((response) => {
            if (response.status === 200) {
                const symbols = []
                response.data.forEach(function (data) {
                    const parsedData = data.data.body;
                    const symbolData = {
                        label: parsedData.params.Symbol,
                        symbol: parsedData.params.Symbol,
                        config: parsedData
                    }
                    symbols.push(symbolData);
                });
                console.log(symbols);
                setSymbolList(symbols);
            }

        }).catch((e) => {
            setApiConfigStatus('error');
            console.log('An API error occurred', e);
        })
    }, []);

    return (
        <div className="analyst-container">
            <Typography
                component="h2"
                variant="h4"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1, mb: 2 }}
            >
                {'Live Market Data'}
            </Typography>
            <FormAlert apiCofigStatus={apiCofigStatus} />
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}
                    >
                        <Grid container spacing={3} item xs={12} md={12} lg={12}>
                            <Grid item xs={12} md={12} lg={12}>
                                <Typography
                                    component="h3"
                                    variant="h5"
                                    color="inherit"
                                    noWrap
                                    sx={{ flexGrow: 1, mb: 1 }}
                                >
                                    {'Choose Symbol For Live Market Data'}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12} lg={3}>
                                <Autocomplete
                                    autoHighlight
                                    disablePortal
                                    id="symbol"
                                    options={symbolList}
                                    onChange={(event, newValue) => {
                                        setSelectedSymbol(newValue);
                                    }}
                                    renderInput={(params) => <TextField required {...params} label="Symbol" />}
                                />
                            </Grid>
                            <Grid item xs={12} md={12} lg={3}>
                                <Button variant="contained" onClick={searchData}>Get Live Data</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            {liveMarketData && (
                <MarketDataTable analystData={liveMarketData.result} />
            )}
        </div>
    )
}

export default MarketData
