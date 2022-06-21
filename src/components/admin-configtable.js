

import * as React from 'react';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Button from '@mui/material/Button';
import service from "../api/invoke-function-service"

const CustomizedTables = () => {  

  const [apiList, setApiList] = React.useState([]);
  const [apiListHeaders, setApiListHeaders] = React.useState([]);

  React.useEffect(() => {
    service.get('get-api-config').then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        setApiListHeaders(Object.keys(response.data[0]));
        setApiList(response.data);
      }
    }).catch((e) => {
      console.log('An API error occurred', e);
    })
  }, []);

  const submitConfigApi = () => {
    alert("Trigger Node MS");
  }

  return (
    <div className="admin-body-container">
      <div className="adim-panel">
        <Paper>
          <Typography variant="h4" color="inherit">
            {'Configured API Detail'}
          </Typography>

          <hr />

          <Table>
            <TableHead>
              <TableRow>
                {apiListHeaders.map(header => (
                  <TableCell align="left">{header.toUpperCase()}</TableCell>
                ))}
                <TableCell align="left">{"Action"}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apiList.map((emp, index) => (
                <TableRow key={index}>
                  {apiListHeaders.map(header => (
                      typeof emp[header] === 'string' ? <TableCell align="left">{emp[header]}</TableCell> : 
                      <TableCell align="left"> { Object.keys(emp[header]).map(head => (
                          <span>{emp[header][head]}</span>
                      ))}
                      </TableCell>
                  ))}
                  <TableCell align="left">
                  <Button disabled variant="contained" onClick={submitConfigApi}>
                    Trigger
                  </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </div>
  );
}

export default CustomizedTables
