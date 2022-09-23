import React, { Fragment , useContext } from 'react';
import './Project.css';
import ProjectContext from '../context/Projects/ProjectContext';

const Project = (props) => {

    const context  = useContext(ProjectContext);
    const { setViewProject} = context;


    const { Title, Description, Link, _id } = props;
    const ProjectDetails ={Title,Description,Link,_id};



    const handleView = () => {

        const viewProjectHTM = document.getElementById('viewProject')
        viewProjectHTM.style.display = "block";      
        setViewProject(ProjectDetails);

       
        
    }

    return (
        <Fragment>
            <div className='Project'>
                <div className='Title'> <div className="text">{Title} </div>
                    <span>
                        <i onClick={handleView} className="fa fa-eye" />
                        <a href={props.Link} >
                            <i className="fa fa-link" />
                        </a>
                    </span>
                </div>
            </div>
        </Fragment>
    )
}

export default Project
