import React from 'react';
import Alert from '@mui/material/Alert';

export default function GauravAlerts() {
    return (
        <div>
            {console.log("im called")}
            <Alert severity="success" color="info">
                This is a success alert — check it out!
            </Alert>
        </div>
    )
}
