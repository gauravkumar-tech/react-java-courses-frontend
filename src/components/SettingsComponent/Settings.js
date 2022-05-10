import React, { useEffect } from 'react'
import Header from '../Header/Header';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Sidemenu from '../sidemenu/Sidemenu';
import Footer from '../Footer/Footer'
import SingleSetting from './SingleSetting';


export default function Settings() {
  return (
    <div>
      <Box sx={{ width: '100%',  height: '590px'  }}>
        <Header />
        <Grid container rowSpacing={1}>
          <Grid item xs={3}>
            <Sidemenu />
          </Grid>
          <Grid item xs={9} >
            <Card style={{ backgroundColor: '#f2e9f3', height: '100%', }}>
              <SingleSetting/>
            </Card>
          </Grid>
        </Grid>
       
      </Box>
      <Footer />
    </div>
  )
}
