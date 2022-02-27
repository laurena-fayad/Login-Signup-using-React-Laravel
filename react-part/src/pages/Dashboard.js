import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Dashboard = () => {

    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setToken(localStorage.getItem("token"))
        axios.get('http://127.0.0.1:8000/api/auth/user-profile',
        {headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
            setName(res.data.name);
            setEmail(res.data.email);
        }).catch(function (error) {
            console.log(error);
        });

    });

    return (
        <div>
           <h1>Welcome {name}!</h1> 
            <h3>Email: {email}</h3>
        </div>
    );
};

export default Dashboard;