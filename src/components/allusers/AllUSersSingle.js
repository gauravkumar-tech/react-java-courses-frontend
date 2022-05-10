import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import '../ProfileComponent/UserProfile.css'
import AllUSerDataTable from './AllUSerDataTable';
import axios from 'axios';
import baseURl from '../../constant';

export default function AllUSersSingle() {

    useEffect(() => {
        handleSubmit();
    }, [])

    const [users, setUsers] = useState([]);
    const [Headings, setHeadings] = useState([]);

    const handleSubmit = () => {
        axios.post(baseURl + 'User/getAllUsers', //proxy uri
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            }).then(function (response) {
                setUsers(response.data.data);
                setHeadings(response.data.heading);
            },
                (error) => {
                    console.log(error)
                });
    }

    return (
        <Card style={{ height: '96%', width: '97%', margin: '10px', padding: '5px', paddingBottom: '01px' }}>
            <AllUSerDataTable heading={Headings} users={users} handleSubmit={handleSubmit}/>
        </Card>
    )
}
