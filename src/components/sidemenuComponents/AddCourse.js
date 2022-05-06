import Header from '../Header/Header';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Sidemenu from '../sidemenu/Sidemenu';
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';
import baseURl from '../../constant'
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';


export default function AddCourse() {
    
    const [course, Setcourse] = useState([]);

    useEffect(() => {
        document.title = `Add Course`;
    },[]);

    const navigate = useNavigate();

    // this is for login for user.
    const handleSubmit = (e) => {
        const data = {
            id: null,
            courseName: e.target[0].value,
            courseDescription: e.target[1].value,
        }
        axios.post(baseURl + 'courses/Create', //proxy uri
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                data: data
            }).then(function (response) {
                navigate("/allCourses")
                console.log("from login error");
            },
                (error) => {
                    console.log(error)
                    console.log("from login error");
                });
        e.preventDefault();
    }


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
          <Card style={{ height: '96%', width: '97%', margin: '10px', padding: '10px', paddingBottom: '01px' }}>
          <Container>
          

          <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
          <div>
              <TextField
                  id="courseName"
                  label="Course Name"
                  helperText="Enter Course Name"
                  variant="standard"
                  style={{ width: '100%', marginTop: "10px" }}
              />
          </div>
          <div>
              <TextField
                  id="courseDescription"
                  label="Course Description"
                  helperText="Enter Course Description"
                  variant="standard"
                  type="text"
                  style={{ width: '100%' }}
              />
          </div>
          <div style={{ marginTop: '20px' }}>
              <ButtonGroup>
                  <Button startIcon={<LoginIcon />} variant="contained" type='submit'>Add Course</Button>
              </ButtonGroup>
          </div>
      </form>
          </Container>
          </Card>
          </Card>
        </Grid>
      </Grid>
       <Footer />
    </Box>
  </div>
  )
}
