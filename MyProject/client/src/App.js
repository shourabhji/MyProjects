import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs';
import ProjectState from './components/context/Projects/ProjectState';
import User from './components/projects/User';

const App = () => {
  return (
    <>
      <ProjectState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/login' element={<LoginSignup />} />
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/ContactUs' element={<ContactUs />} />
            <Route exact path='/user' element={<User/>} />
          </Routes>
        </BrowserRouter>
        </ProjectState>
    </>

  )
}

export default App
