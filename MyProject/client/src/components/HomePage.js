import React from 'react';
import './home.css';
import video from '../video/1.mp4';
import { useNavigate } from 'react-router-dom';
import ProjectsHome from './projects/ProjectsHome';
import Alerts from './projects/Alerts';



const HomePage = () => {

  const nevigate = useNavigate();

  return (
    <>
    <Alerts/>
    <div className='homepageContainer'>
      {(!localStorage.getItem('authTocken'))?
      <div>
      <video autoPlay loop muted src={video}></video>

      <div className="homepageContant">
        <div className="TextHeading">My Projects</div>
        <div className="texts"> With my projects you can save your projects with us. Host your web project and add the
          project link with title and description in this application. Keep all your project Togather </div>
        <div className="btn">
          <button onClick={() => nevigate('/login')} > Join Us </button>
        </div>
      </div>
      </div>
      :
   
    <ProjectsHome />
   }
    </div>
    </>
  )
}

export default HomePage
