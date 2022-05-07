import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import './SingleHelpus.css'
import pic from '../../img/qrcode.png'

export default function SingleHelpus() {
    return (
        <Card style={{ height: '96%', width: '97%', margin: '10px', padding: '5px', paddingBottom: '01px' }}>
            <div className='helpus' >
                <div style={{ margin: '10px' }}>
                    <Typography variant="h4" gutterBottom component="div">
                        Know more About us or Donate US!!
                    </Typography>
                </div>
                <div className='back'>
                    <img src={pic} style={{height:'50%',width:'50%'}}></img>
                </div>
            </div>
        </Card>
    )
}
