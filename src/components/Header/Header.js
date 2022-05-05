import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';

export default function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Courses App
          </Typography>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{localStorage.getItem("user").charAt(0)}</Avatar>
          <Tooltip title="Logout">
          <LogoutIcon style={{marginLeft: '10px'}} />
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
