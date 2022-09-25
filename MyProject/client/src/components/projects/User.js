import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './user.css'

const User = () => {

    const nevigate = useNavigate();

    useEffect(() => {
        getUserinfo();

    }, []);

    const [user, setuser] = useState('');
    const getUserinfo = async () => {

        const response = await fetch("https://myprojectserver-production.up.railway.app/api/auth/getUser",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authToken': localStorage.getItem('authTocken')
                },

            })
        setuser(await response.json());
    }

    const handleLogout = () => {
        nevigate('/')
        localStorage.removeItem('authTocken');
        window.location.reload();

    }



    return (
        <div className='userBackground'>
            <div className="userCard">
                <div className="icon">
                    <i className='fa fa-user' />
                </div>
                <div className="name">{user.name}</div>
                <div className="email">
                    {user.email}
                </div>
                <div className="btn">
                    <button onClick={handleLogout}>Logout</button>
                </div>

            </div>


        </div>
    )
}

export default User
