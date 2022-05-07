import React from 'react'
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import './UserProfile.css'
import {useNavigate} from 'react-router-dom'

export default function UserProfile() {

    const settingPage = () =>{
        navigate("/settings")
    }

    const navigate = useNavigate();

    return (
        <Card style={{ height: '96%', width: '97%', margin: '10px', padding: '5px', paddingBottom: '01px' }}>
            <Container >
                <div >
                    <div style={{ paddingLeft: '450px', paddingTop: '20px', marginBottom: '10px' }}>
                        <Tooltip title={localStorage.getItem("user")}>
                            <Avatar style={{ height: '70px', width: '70px', }} sx={{ bgcolor: '#4a148c' }}>{localStorage.getItem("user").charAt(0)}</Avatar>
                        </Tooltip>
                    </div>
                    <Card elevation={10} style={{ backgroundColor: '#f8bbd0', padding:'10px' }}>
                        <div style={{ textAlign: 'center', margin: '10px' }}>
                            <Typography variant="h4" gutterBottom component="div">
                              <span style={{color:'#4a148c'}}>  Welcome {localStorage.getItem("user")} !!</span>
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h6" gutterBottom component="div">
                            <span style={{color:'#4a148c'}}> Your User Id :</span> {localStorage.getItem("userID")}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h6" gutterBottom component="div">
                            <span style={{color:'#4a148c'}}> Your User Name :</span>  {localStorage.getItem("user")}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h6" gutterBottom component="div">
                            <span style={{color:'#4a148c'}}> Your User Type :</span>  {localStorage.getItem("userType")} !!
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h6" gutterBottom component="div">
                            <span style={{color:'#4a148c'}}> Your User Password :</span>  {localStorage.getItem("password")} 
                            &nbsp;&nbsp;
                            <Button variant="contained" onClick={settingPage} style={{backgroundColor:'#d50000'}} startIcon={<VpnKeyIcon/>}>change Password</Button>
                            </Typography>
                        </div>
                        <div id={localStorage.getItem("userType") == 'Normal' ? 'Normal' : 'Admin'}>
                            <Typography variant="h6" gutterBottom component="div">
                                Note: Please Note That You Dont have, Administrative privilages, as of your type is : {localStorage.getItem("userType")}
                            </Typography>
                        </div>
                        <div id={localStorage.getItem("userType") == 'Admin' ? 'Admin1' : 'Normal1'}>
                            <Typography variant="h6" gutterBottom component="div">
                                Note: Please Note That You have <span style={{color:'red'}}>Administrative</span> privilages, as of your type is : {localStorage.getItem("userType")} 
                                &nbsp;. You can also add courses.
                            </Typography>
                        </div>
                    </Card>
                </div>
            </Container>
        </Card>
    )
}
