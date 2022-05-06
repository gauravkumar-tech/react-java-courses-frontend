import React, { useEffect } from 'react'
import Header from '../Header/Header';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Sidemenu from '../sidemenu/Sidemenu';
import DeveloperInformation from '../sidemenuComponents/DeveloperInformation';
import Footer from '../Footer/Footer'

export default function Dashboard() {

  useEffect(() => {
    const name = localStorage.getItem("user") + " Dashboard"
    document.title = name;
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Header />
        <Grid container rowSpacing={1}>
          <Grid item xs={3}>
            <Sidemenu />
          </Grid>
          <Grid item xs={9} >
            <Card style={{ backgroundColor: '#f2e9f3', height: '100%' }}>
             <DeveloperInformation/>
            </Card>
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </div>
  )
}
