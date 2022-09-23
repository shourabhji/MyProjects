import React,{useState} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'


const Navbar = () => {


  const [toggler, settoggler] = useState(false);


const handleToggle =()=>{

  settoggler(!toggler);

  const element1 = document.getElementById('element1');
  const element2 = document.getElementById('element2');
  const element3 = document.getElementById('element3');


const navIteams = document.getElementsByClassName('navIteam');

if(toggler===false){
    Array.from(navIteams).forEach((navIteam)=>{
      navIteam.style.display = "block"
    });
    element3.style.display = 'none'
    element1.style.position = 'absolute'
    element2.style.position = 'absolute'
    element1.style.top = '2px'
    element2.style.top = '2px'
 

    element1.style.transform = "rotate(50deg)"
    element2.style.transform = "rotate(-50deg)"
}
else{
  Array.from(navIteams).forEach((navIteam)=>{
      navIteam.style.display = "none"
    });
    element3.style.display = 'block'
    element1.style.position = 'static'
    element2.style.position = 'static'


    element1.style.transform = "rotate(0)"
    element2.style.transform = "rotate(0)"
}


}

  return (
    <div>
      <div className="navbar">
        <ul>
        <div className="toggler" onClick={handleToggle}>
     <li id="element1"></li>
     <li id="element2"></li>
     <li id="element3"></li>
     </div>
        <li className='navIteam'><Link onClick={handleToggle} to="/">Home</Link></li>
        <li className='navIteam'><Link onClick={handleToggle} to="/ContactUs">Contact us</Link></li>
        {(!localStorage.getItem('authTocken'))?
        <li className='navIteam'><Link onClick={handleToggle} to="/login">Login</Link></li>:
        <li className='navIteam'> <Link onClick={handleToggle} to="/user"> <i className="fa fa-user col" /></Link></li>}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
