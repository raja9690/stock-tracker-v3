import * as React from 'react';
import TextField from '@mui/material/TextField';


const ApiHeader = props => {

    return (
        <TextField
            required
            id="apiHeader"
            label="Configured"
            disabled
            multiline
            value={JSON.stringify(props.headerData, null, 4)}
            rows={15}
            sx={{ width: 500 }}
        />
    );
}

export default ApiHeader
