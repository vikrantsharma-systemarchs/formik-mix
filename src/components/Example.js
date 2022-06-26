

import React, { useState } from 'react';

import axios from 'axios';
import Button from "@mui/material/Button";

/*
const [user, setUser] = useState('');
 const fetchUsers=()=>{
     console.log('Fetching News');
     axios.get('http://localhost:4000/user')
         .then((response)=>{
             console.log(response.data);
             setUser(response.data.email);
         })
      }

  */

const fetchUsers=()=>{

}
const Example=()=> {
    return (
        <div>
            <h1>A Computer Science Portal for Geeks</h1>
            <Button variant="outlined" onClick={fetchUsers} >
                Fetch Users
            </Button>
            <p>hello</p>
        </div>
    );
}
export default Example;