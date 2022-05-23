import * as React from 'react';
import TextField from '@mui/material/TextField';


export default function UseFormControl() {
    return (
        <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            sx={{ width: 300 }}
            defaultValue="Default Value"
        />
    );
}