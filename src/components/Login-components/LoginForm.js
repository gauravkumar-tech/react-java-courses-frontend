import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';
import pic from '../../img/courses.jpg';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';
import baseURl from '../../constant'
import { useNavigate } from "react-router-dom";
import Singup from './Singup'
import SnackBar from '../snackbar/SnackBar';

export default function LoginForm() {

    const [data, SetData] = useState([]);

    useEffect(() => {
        document.title = `Login Page`;
    }, []);

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
            id: null,
            userName: e.target[0].value,
            password: e.target[1].value,
        }
        axios.post(baseURl + 'User/login', //proxy uri
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                data: data
            }).then(function (response) {
                if (response.data.UserPresent) {
                    SetData(response.data.user);
                    localStorage.setItem("user", response.data.user.userName);
                    localStorage.setItem("userID", response.data.user.id);
                    localStorage.setItem("password", response.data.user.password);
                    localStorage.setItem("userType", response.data.user.userType);
                    showSnackBar();
                    Setresp1('success')
                    Setmess(response.data.message)
                    setTimeout(()=>{
                        navigate("/dashboard")
                    },3000)
                } else {
                    showSnackBar();
                    Setresp1('fail')
                    Setmess(response.data.message)
                }
            },
                (error) => {
                    console.log(error)
                    Setresp1('fail')
                    Setmess("Invalid Request!!")
                });
        e.preventDefault();
    }

    return (
        <Card
            style={{ margin: '10px', padding: '10px', backgroundColor: '#714cfe', textAlign: 'justify' }}>
            <Card style={{
                marginTop: '5px', marginBottom: '5px',
                marginLeft: '340px',
                height: '520px', width: '550px',
                padding: '50px',

            }} elevation={20}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            GK
                        </Avatar>
                    }
                    title="Welcome To React Courses App !!"
                    subheader={new Date().toDateString()}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={pic}
                    alt="Course Img"
                />

                <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            id="userName"
                            label="User Name"
                            helperText="Enter User Name"
                            variant="standard"
                            style={{ width: '100%', marginTop: "10px" }}
                        />
                    </div>
                    <div>
                        <TextField
                            id="password"
                            label="Password"
                            helperText="Enter Password"
                            variant="standard"
                            type="password"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <ButtonGroup>
                            <Button startIcon={<LoginIcon />} variant="contained" type='submit'>Login</Button>
                            <Singup />
                        </ButtonGroup>
                    </div>
                </form>
                <div id={showSnackBar1 == true ? 'showAddCourseSnackBar' : 'hideAddCourseSnackBar'}>
                    <SnackBar response={resp1} message={mess} />
                </div>
            </Card>
        </Card>
    )
}