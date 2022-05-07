import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  
  const logout = () =>{
    navigate("/")
  }

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#1A237E'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <div style={{textAlign:'center'}}> Courses App @ 2022  || Made By Gaurav</div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}
