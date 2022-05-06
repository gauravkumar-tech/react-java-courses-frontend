import React from 'react'
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import { useNavigate } from "react-router-dom";

export default function DeveloperInformation() {

    const allCourses = () =>{
        navigate("/allCourses")
    }

    const navigate = useNavigate();

    return (
        <Card style={{ height: '96%', width: '97%', margin: '10px', padding: '5px', paddingBottom: '01px' }}>
            <Container>
                <div>
                    <h4 >Hello, I’m</h4>
                    <h1 >GAURAV</h1>
                    <p>A Full Stack Developer(Backend : jdk 7,8, Sprin Boot 5, Frontend : Angular 9, Reactjs, Javascript ,Database : Oracle 11g) Having Experience 2 Years, 2 Months, 23 Days, Good Knowlegde of Micorsevices
                        Have Completed My Training in Java (Core + Advance) and Oracle DataBase as well From Jspider Noida.</p>
                    <div>My Skills</div>
                    <ul>
                    <li>Java 7,8</li>
                    <li>Angular 9</li>
                    <li>Spring Boot 5 + JPA With Hibernate 5 + Security</li>
                    <li>JavaScript + TypeScript</li>
                    <li>Jasper + Pdf + Excel + API + Apache POI</li>
                    <li>IReport</li>
                    <li>IReport 5.6.0</li>
                    <li>HTML + CSS + SCSS</li>
                    <li>ReactJS</li>
                    
                    </ul>
                    
                    <Button variant="contained" startIcon={<EmojiPeopleIcon />} href="https://gauravkumar-tech.github.io/portfolio/index.html" target="_blank">View my Work</Button>
                    <Button variant="contained" startIcon={<EmojiNatureIcon />} style={{marginLeft:'5px',backgroundColor:'#ef0078'}} onClick={allCourses}>Get Started</Button>
                </div>
            </Container>
        </Card>
    )
}
