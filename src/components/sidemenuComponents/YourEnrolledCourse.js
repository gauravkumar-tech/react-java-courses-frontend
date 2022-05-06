import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCardIcon from '@mui/icons-material/AddCard';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import pic from '../../img/defaultcourses.png';

export default function YourEnrolledCourse({courseDescription , courseName}) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{margin:'10px'}} elevation={5} >
    <CardMedia
    component="img"
    height="194"
    image={pic}
    alt="Course Img"
/>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {courseName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {courseDescription}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" startIcon={<DocumentScannerIcon/>} style={{backgroundColor:'#64B5F6'}} variant="contained">Continue Learning</Button>
    </CardActions>
  </Card>
  )
}
