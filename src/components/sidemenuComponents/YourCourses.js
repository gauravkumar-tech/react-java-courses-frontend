import React, { useEffect , useState} from 'react'
import Header from '../Header/Header';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Sidemenu from '../sidemenu/Sidemenu';
import axios from 'axios';
import baseURl from '../../constant'
import YourEnrolledCourse from './YourEnrolledCourse';
import Footer from '../Footer/Footer';

export default function YourCourses() {

    const [courses, SetCourses] = useState([]);

    useEffect(() => {
        document.title = `Courses Page`;
        handleSubmit();
    },[]);


    const handleSubmit = () => {
        axios.post(baseURl + 'courses/allCourses', //proxy uri
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            }).then(function (response) {
                console.log(response);
                    SetCourses(response.data.allCourses);
            },
                (error) => {
                    console.log(error)
                });
    }
    
  useEffect(() => {
    const name = "All Courses"
    document.title = name;
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
          <div style={{marginBottom:'50px'}}>
            {courses.map((m)=>( localStorage.getItem('userID')==m.userID ?
              <YourEnrolledCourse courseDescription={m.courseDescription} courseName={m.courseName} key={m.id} /> :
              ''  ))}
             {<YourEnrolledCourse courseDescription="This is just a free Course, to get you started in Programming." courseName="Learn C" key="1" />} 
            </div>
          </Container>
          </Card>
          </Card>
        </Grid>
      </Grid>
      <Footer/>
    </Box>
  </div>
  )
}
