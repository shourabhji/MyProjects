import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import ProjectContext from './context/Projects/ProjectContext';
import Alerts from './projects/Alerts';






const LoginSignup = () => {
    const {setAlertMsg} = useContext(ProjectContext);
    const nevigate = useNavigate();
    const [toggler, settoggler] = useState(true);
    const [LoginCredentials, setLoginCredentials] = useState({ email: "", password: "" });
    const [SignupCredentials, setSignupCredentials] = useState({ email: "", password: "", name: "", ckeckPassword: "" });



    // handle toggle
    const handleToggler = () => {

        settoggler(!toggler);

        const login = document.getElementsByClassName('login').item(0);
        const signup = document.getElementsByClassName('signup').item(0);

        if (toggler) {
            login.style.display = 'none'
            setTimeout(() => {
                signup.style.display = 'block'
            }, 100);
        }
        else {
            signup.style.display = 'none'
            setTimeout(() => {
                login.style.display = 'block'

            }, 100);

        }


    }


    /// handle login

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch("https://my-projects-server.vercel.app/api/auth/login",
            {
                method: 'POST',
                Access-Control-Allow-Origin: * ,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(LoginCredentials)

            })
        const res = await response.json()
        setAlertMsg(res.message);


      
        if (res.authTocken) {
            localStorage.setItem('authTocken', res.authTocken)
                nevigate('/')
                window.location.reload();
        }

    }

    // handle signup

    const handleSignup = async(e) => {
        e.preventDefault();
        const { ckeckPassword, password } = SignupCredentials;
        if (password !== ckeckPassword) {
            return setAlertMsg('Password and Confirm password did not match');
        }
        const response = await fetch("https://my-projects-server.vercel.app/api/auth/signup",
        {
            method: 'POST',
            Access-Control-Allow-Origin: * ,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(SignupCredentials)

        })
    const res = await response.json()
    if (res.authTocken) {
        localStorage.setItem('authTocken', res.authTocken)
        
        setAlertMsg(res.message)
        setTimeout(() => {
            nevigate('/')
            window.location.reload();
        }, 1000);
        

    }

    }


    /// handle change for values

    const handlechangeLogin = (e) => {
        setLoginCredentials({
            ...LoginCredentials,
            [e.target.name]: e.target.value
        })
    }
    const handlechangeSignup = (e) => {
        setSignupCredentials({
            ...SignupCredentials,
            [e.target.name]: e.target.value
        })

    }

    return (
        <div className='loginContainer' >
        <Alerts />
            <div className="login">
                <div className='headingText'>Login</div>
                <form method='post' onSubmit={handleLogin}  >
                    <div className="element"><div className="text">Email :</div><input type="email" value={LoginCredentials.email} name="email" onChange={handlechangeLogin} required placeholder='Enter email' /></div>
                    <div className="element"><div className="text">Password :</div><input type="password" value={LoginCredentials.password} name="password"  onChange={handlechangeLogin} required minLength={6} placeholder='Enter password' /></div>
                    <div className="btn">
                        <button type="submit">Login</button>
                    </div>
                    <div className="bottum">Already registered Try <span onClick={handleToggler}> Sign Up</span></div>
                </form>

            </div>




            <div className="signup">
                <div className='headingText'>Sign Up</div>
                <form method='post' onSubmit={handleSignup} >
                    <div className="element">
                        <div className="text">Name :</div><input name='name' type="text" value={SignupCredentials.name} onChange={handlechangeSignup} placeholder='Enter name' required minLength={4} />
                    </div>
                    <div className="element">
                        <div className="text">Email :</div><input type="email" value={SignupCredentials.email} onChange={handlechangeSignup} name='email' required placeholder='Enter email' />
                    </div>
                    <div className="element">
                        <div className="text">Password :</div><input type="password" name='password' required minLength={6} value={SignupCredentials.password} onChange={handlechangeSignup} placeholder='Enter password' />
                    </div>
                    <div className="element">
                        <div className="text">Confirm Password :</div><input type="password" name='ckeckPassword' onChange={handlechangeSignup} value={SignupCredentials.ckeckPassword} required placeholder='Re-Enter password' />
                    </div>
                    <div className="btn">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
                <div className="bottum">Already registered Try <span onClick={handleToggler}> Login</span></div>
            </div>
        </div>
    )
}

export default LoginSignup
