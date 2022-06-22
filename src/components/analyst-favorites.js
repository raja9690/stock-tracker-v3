import * as React from "react"

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import service from "../api/invoke-function-service"
import { getRapidAPIData } from "../api/invoke-external-service";
import FormAlert from './forms/alert'

const favData = [
 { price: 1261.15, changePercent: -2.2932384, symbol: 'TECHM.NS' },
 { price: 1261.15, changePercent: 2.2932384, symbol: 'MARUTI.NS' },
 { price: 1261.15, changePercent: 2.2932384, symbol: 'ONGC.NS' },
 { price: 1261.15, changePercent: -2.2932384, symbol: 'ICICIBANK.NS' }
]

const Favorites = () => {

    const [favSymbolList, setFavSymbolList] = React.useState([]);
    // const [symbolConfigList, setSymbolConfigList] = React.useState([]);
    const [apiCofigStatus, setApiConfigStatus] = React.useState('default');

    React.useEffect(() => {
        service.get('get-live-symbols').then((response) => {
            if (response.status === 200) {
                const symbols = [];
                response.data.forEach(function (data) {
                    const parsedData = data.data.body;
                    symbols.push(parsedData)
                });
                console.log(symbols);
                // setSymbolConfigList(symbols);
                const marketData = [];
                if (symbols.length === 0) {
                    setApiConfigStatus('error');
                    setFavSymbolList(favData);
                } else {
                    symbols.forEach(function (req, index) {
                        setTimeout(function () {
                            // Get Data from RapidAPI
                            const apiData = getRapidAPIData(req);
                            apiData.then((response) => {
                                console.log(response)
                                if (response.status === 200) {
                                    marketData.push(response.data.result);
                                    setFavSymbolList([...marketData]);
                                    console.log(marketData);
                                }
                            });
                        }, index * 2000);
                    })
                }
                
            }

        }).catch((e) => {
            setApiConfigStatus('error');
            setFavSymbolList([...favData]);
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
                {'Favorites Market Data'}
            </Typography>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <FormAlert apiCofigStatus={apiCofigStatus} />
                <Grid container spacing={3} sx={{ mb: 4 }}>
                    {favSymbolList.map((data) => (
                        <Grid item xs={12} md={4} lg={3} key={data.symbol}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 100
                                }}
                            >
                                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                    {data.symbol}
                                </Typography>
                                <Typography component="p" variant="h4">
                                    {data.regularMarketPrice}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </div>
    )
}

export default Favorites
