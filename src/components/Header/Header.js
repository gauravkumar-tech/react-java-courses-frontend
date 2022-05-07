import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { deepOrange, deepPurple } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  
  const logout = () =>{
    navigate("/")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Courses App
          </Typography>
          <Tooltip title={localStorage.getItem("user")}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{localStorage.getItem("user").charAt(0)}</Avatar>
          </Tooltip>
          <Tooltip title="Logout">
          <div onClick={logout}>
          <LogoutIcon style={{marginLeft: '10px'}}  />
          </div>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
