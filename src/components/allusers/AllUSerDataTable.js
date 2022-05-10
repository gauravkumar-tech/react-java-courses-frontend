import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import baseURl from '../../constant';
import axios from 'axios';  


export default function AllUSerDataTable({heading , users ,  handleSubmit}) {

    const deleteUser = (id) => {
        const data = { 
            "id" : id
        }
        
        axios.post(baseURl + 'User/deleteUser', //proxy uri
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                data:data
            }).then(function (response) {
                handleSubmit();
            },
                (error) => {
                    console.log(error)
                });
    }



    return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow >
        <TableCell></TableCell>
        {heading.map((tb)=>(
            <TableCell align={tb.align} key={tb.Heading}>{tb.Heading}</TableCell>  
        ))}
        
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((row) => (
          <TableRow
            key={row.userName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            {row.userType != 'Admin' ? 
            <TableCell align="left">
            <Button variant="contained" style={{backgroundColor:'red'}} onClick={()=>{deleteUser(row.id)}}
            startIcon={<DeleteForeverIcon/>}>Delete User</Button></TableCell> : 
            <TableCell align="right"></TableCell>}
            <TableCell align="right">{row.password}</TableCell>
            <TableCell align="right">{row.id}</TableCell>
            <TableCell align="right">{row.userType}</TableCell>
            <TableCell component="th" align="right" scope="row">
            {row.userName}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
