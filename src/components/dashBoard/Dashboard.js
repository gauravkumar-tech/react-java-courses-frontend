import React ,{ useEffect }from 'react'
import Header from '../Header/Header';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Sidemenu from '../sidemenu/Sidemenu'

export default function Dashboard() {

    useEffect(() => {
        const name = localStorage.getItem("user") + " Dashboard"
        document.title =  name;
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
   

       <Box sx={{ width: '100%' }}>
       <Header />
       <Grid container rowSpacing={1}>
         <Grid item xs={3}>
         
           <Sidemenu/>
         </Grid>
         <Grid item xs={9}>


         </Grid>
       </Grid>
     </Box>
    </div>
    )
}
