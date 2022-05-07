import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import axios from 'axios';
import baseURl from '../../constant'
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import GauravAlerts from './GauravAlerts';
import '../sidemenuComponents/AddCourse.css'
import SnackBar from '../snackbar/SnackBar';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    backgroundColor: '#d2c2fd'
};

function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
}

export default function Singup() {

    const showSnackBar = () => {
        setShowSnackBar1(true);
        setTimeout(()=>{
            setShowSnackBar1(false);
            
        },3000)
        
    }

    const [resp1, Setresp1] = useState();
    const [mess, Setmess] = useState();
    const [showSnackBar1 , setShowSnackBar1] = useState(false);

    const [data, SetData] = useState([]);
    const [opensnack, setOpensnack] = React.useState(false);

    useEffect(() => {
        document.title = `Login Page`;
    });

    const navigate = useNavigate();

    const [transition, setTransition] = React.useState(undefined);

    const handleClick = (Transition) => () => {
        setTransition(() => Transition);
        setOpensnack(true);
    };

    const handleClosesnack = () => {
        setOpensnack(false);
    };

    const handleSubmit = (e) => {
        const data = {
            id: null,
            userName: e.target[0].value,
            password: e.target[1].value,
        }
        axios.post(baseURl + 'User/create', //proxy uri
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                data: data
            }).then(function (response) {
                if(response.data.UserSaved==true){
                    Setresp1('success')
                    Setmess(response.data.message)
                    showSnackBar();
                    setTimeout(()=>{
                        handleClose()
                    },3000)
                }else{
                    Setresp1('fail')
                    Setmess(response.data.message)
                    showSnackBar();
                }
            },
                (error) => {
                    Setresp1('fail')
                    Setmess("Request Failed!! Try Again.")
                    console.log(error)
                    console.log("from login error");
                });
        e.preventDefault();
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant="contained" onClick={handleOpen} style={{ color: 'white', backgroundColor: '#d500f9' }} endIcon={<PersonPinIcon />}>Sign up</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ display: 'flex' }}>
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            GK
                        </Avatar>
                        <div style={{ marginLeft: '5px' }}>
                            Seems like you're new, Sign up Now !!
                        </div>
                    </div>

                    <Card style={{ marginTop: '5px', padding: '10px' }}>

                        <Container>
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
                                        <Button startIcon={<AccountCircleIcon />} variant="contained" type='submit'>Sign Up</Button>
                                    </ButtonGroup>
                                </div>
                            </form>
                        </Container>
                    </Card>

                    <div id={showSnackBar1 == true ? 'showAddCourseSnackBar' : 'hideAddCourseSnackBar'}>
                        <SnackBar response={resp1} message={mess} />
                    </div>

                </Box>
            </Modal>
        </div>
    )
}

