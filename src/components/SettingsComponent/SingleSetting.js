import React, { useState } from 'react'
import Card from '@mui/material/Card';
import axios from 'axios';
import baseURl from '../../constant';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Typography from '@mui/material/Typography';
import '../ProfileComponent/UserProfile.css'
import UserProfile from '../ProfileComponent/UserProfile';
import TextField from '@mui/material/TextField'
import SnackBar from '../snackbar/SnackBar';
import { useNavigate } from 'react-router-dom';

export default function SingleSetting() {

    const navigate = useNavigate();

    const showSnackBar = () => {
        setShowSnackBar1(true);
        setTimeout(() => {
            setShowSnackBar1(false);
        }, 3000)
    }

    const [resp1, Setresp1] = useState();
    const [mess, Setmess] = useState();
    const [showSnackBar1, setShowSnackBar1] = useState(false);

    // this is for login for user.
    const handleSubmit = (e) => {
        const data = {
            id: localStorage.getItem('userID'),
            password: e.target[0].value,
        }
        axios.post(baseURl + 'User/changePassword', //proxy uri
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                data: data
            }).then(function (response) {
                if (response.data.UserPresent) {

                    showSnackBar();
                    Setresp1('success')
                    Setmess(response.data.message)
                    localStorage.setItem("user", response.data.user.userName);
                    localStorage.setItem("userID", response.data.user.id);
                    localStorage.setItem("password", response.data.user.password);
                    localStorage.setItem("userType", response.data.user.userType);
                    setTimeout(()=>{
                        navigate("/")
                    },3000)
                } else {
                    showSnackBar();
                    Setresp1('fail')
                    Setmess('Sign Up!! Invalid User')
                }
            },
                (error) => {
                    console.log(error)
                });
        e.preventDefault();
    }



    return (
        <Card style={{ height: '96%', width: '97%', margin: '10px', padding: '5px', paddingBottom: '01px' }}>
            <Container >
                <div >
                    <div style={{ paddingLeft: '450px', paddingTop: '20px', marginBottom: '10px' }}>
                        <Tooltip title={localStorage.getItem("user")}>
                            <Avatar style={{ height: '70px', width: '70px', }} sx={{ bgcolor: '#4a148c' }}>{localStorage.getItem("user").charAt(0)}</Avatar>
                        </Tooltip>
                    </div>
                    <Card elevation={10} style={{ backgroundColor: '#f8bbd0', padding: '10px' }}>
                        <div style={{ textAlign: 'center', margin: '10px' }}>
                            <Typography variant="h4" gutterBottom component="div">
                                <span style={{ color: '#4a148c' }}>  Change Account Password, for UserName {localStorage.getItem("user")} !!</span>
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="h6" gutterBottom component="div">
                                <span style={{ color: '#4a148c' }}> Your Old User Password :</span>  {localStorage.getItem("password")}
                                &nbsp;&nbsp;
                            </Typography>
                        </div>

                        <div>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    id="password"
                                    label="New Password"
                                    helperText="Enter New Password"
                                    variant="standard"
                                    type="password"
                                    style={{ width: '35%', }}
                                />
                                <div>
                                    <Button variant="contained" type="submit" style={{ backgroundColor: '#d50000' }} startIcon={<VpnKeyIcon />}>change Password</Button>
                                </div>
                            </form>
                        </div>
                    </Card>
                </div>
            </Container>
            <div id={showSnackBar1 == true ? 'showAddCourseSnackBar' : 'hideAddCourseSnackBar'}>
                <SnackBar response={resp1} message={mess} />
            </div>
        </Card>

    )
}
