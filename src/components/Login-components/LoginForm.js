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
import PersonPinIcon from '@mui/icons-material/PersonPin';
import axios from 'axios';
import baseURl from '../../constant'
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

    const [data, SetData] = useState([]);

    useEffect(() => {
        document.title = `Login Page`;
      });

    const navigate = useNavigate();

    // this is for login for user.
    const handleSubmit = (e) => {
        const data = {
            id: null,
            userName: e.target[0].value,
            password: e.target[1].value,
        }
        axios.post( baseURl + 'User/login', //proxy uri
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                data : data
            }).then(function (response) {
                SetData(response.data.user);
                localStorage.setItem("user",response.data.user.userName);
                navigate("/dashboard")
            },
            (error)=>{
                console.log(error)
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
                    title="Welcome To React Courses UI !!"
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
                            <Button variant="contained" style={{ color: 'white', backgroundColor: '#d500f9' }} endIcon={<PersonPinIcon />}>Sign up</Button>
                        </ButtonGroup>
                    </div>
                </form>
            </Card>
        </Card>
    )
}
