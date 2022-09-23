import React, { useContext, useEffect } from 'react';
import './Alerts.css';
import ProjectContext from '../context/Projects/ProjectContext';

const Alerts = () => {

    const { AlertMsg, setAlertMsg } = useContext(ProjectContext);


    useEffect(() => {
        handleAlert();
    });


    const handleAlert = () => {
        const alert = document.getElementById('alert');
            if (AlertMsg !== "") {
                alert.style.display = 'block'
            }
          setTimeout(() => {
            setAlertMsg("");
        alert.style.display = 'none';
          }, 1000);
    }



    return (
        <div className='alertContainer' id='alert'>
            <h6>{AlertMsg}</h6>
        </div>
    )
}

export default Alerts;
