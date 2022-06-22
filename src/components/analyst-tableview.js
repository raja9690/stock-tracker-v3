
import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import service from "../api/invoke-function-service"

const MarketDataTable = props => {
    const [userInfo, setUserInfo] = React.useState([]);
    console.log(setUserInfo);

    const favChange = (event, symbol) => {
        const user = userInfo[0];
        console.log(event.target.checked);
        console.log(symbol);

        if (user.preferences.favorites.indexOf(symbol) >= 0) {
            user.preferences.favorites.splice(user.preferences.favorites.indexOf(symbol), 1)
        } else {
            user.preferences.favorites = [...user.preferences.favorites, symbol];
        }
        console.log(user);

        service.update(user).then((response) => {
            console.log(response)
        })
    };

    const checkIsFav = () => {
        const user = userInfo[0];
        let isFav = false;
        if (user && user.preferences.favorites.indexOf(props.analystData.symbol) >= 0) {
            isFav = true;
        }
        return isFav;
    }

    return (
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
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Favorite</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Symbol</TableCell>
                                    <TableCell>Short Name</TableCell>
                                    <TableCell>Quote Type</TableCell>
                                    <TableCell align="right">Regular Market Price</TableCell>
                                    <TableCell align="right">Regular Market Change</TableCell>
                                    <TableCell align="right">Regular Market Change Percent</TableCell>
                                    <TableCell align="right">Regular Market Open</TableCell>
                                    <TableCell align="right">Regular Market High</TableCell>
                                    <TableCell align="right">Regular Market Low</TableCell>
                                    <TableCell align="right">Regular Market Volume</TableCell>
                                    <TableCell align="right">Fifty Day Average</TableCell>
                                    <TableCell align="right">Fifty Day Average Change</TableCell>
                                    <TableCell align="right">Fifty Day Average Change Percent</TableCell>
                                    <TableCell align="right">Two Hundred Day Average</TableCell>
                                    <TableCell align="right">Two Hundred Day Average Change</TableCell>
                                    <TableCell align="right">Two Hundred Day Average Change Percent</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>
                                        {userInfo && (
                                            <Checkbox
                                                className="favIcon"
                                                icon={<FavoriteBorder />}
                                                checkedIcon={<Favorite />}
                                                checked={checkIsFav()}
                                                onChange={(event) => favChange(event, props.analystData.symbol)}
                                            />
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {
                                            props.analystData.regularMarketChangePercent > 0 ?
                                                (<ArrowUpwardIcon color={'success'} />) :
                                                (<ArrowDownwardIcon color={'error'} />)
                                        }
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {props.analystData.symbol}
                                    </TableCell>
                                    <TableCell>{props.analystData.shortName}</TableCell>
                                    <TableCell>{props.analystData.quoteType}</TableCell>
                                    <TableCell>{props.analystData.regularMarketPrice}</TableCell>
                                    <TableCell>{props.analystData.regularMarketChange}</TableCell>
                                    <TableCell>{props.analystData.regularMarketChangePercent}</TableCell>
                                    <TableCell align="right">{props.analystData.regularMarketOpen}</TableCell>
                                    <TableCell align="right">{props.analystData.regularMarketDayHigh}</TableCell>
                                    <TableCell align="right">{props.analystData.regularMarketDayLow}</TableCell>
                                    <TableCell align="right">{props.analystData.regularMarketVolume}</TableCell>
                                    <TableCell align="right">{props.analystData.fiftyDayAverage}</TableCell>
                                    <TableCell align="right">{props.analystData.fiftyDayAverageChange}</TableCell>
                                    <TableCell align="right">{props.analystData.fiftyDayAverageChangePercent}</TableCell>
                                    <TableCell align="right">{props.analystData.twoHundredDayAverage}</TableCell>
                                    <TableCell align="right">{props.analystData.twoHundredDayAverageChange}</TableCell>
                                    <TableCell align="right">{props.analystData.twoHundredDayAverageChangePercent}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default MarketDataTable