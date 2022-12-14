import ProjectContext from "./ProjectContext";
import { useState } from "react";

const ProjectState = (props) => {

   const host = 'https://my-projects-server.vercel.app/api/';
    const [Projects, setProjects] = useState([]);
    const [Loader, setLoader] = useState();
    const [AlertMsg, setAlertMsg] = useState('');


    // seting Project to view a single project

    const [viewProject, setViewProject] = useState({});



    // getting all projects from backend

    const getAllProjects = async () => {
        setLoader(true);
        const response = await fetch(host + "Projects/getAllProjects",
            {

                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin':'*',
                    'Content-Type': 'application/json',
                    'authToken': localStorage.getItem('authTocken')
                }
            })
        const data = await response.json();
        setLoader(false);
        setProjects(data);

    }


    // creating a project 

    const createProject = async (Project) => {
        const response = await fetch(host + "Projects/createProject",
            {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin':'*',
                    'Content-Type': 'application/json',
                    'authToken': localStorage.getItem('authTocken')
                },
                body: JSON.stringify(Project)
            })
        getAllProjects();
        const res = await response.json()
        setAlertMsg(res.message);
    }


    // deleting a Project
    const deleteProject = async (id) => {
        const response = await fetch(host + "Projects/deleteProject/" + id,
            {
                method: 'DELETE',
                headers: {
                    'Access-Control-Allow-Origin':'*',
                    'Content-Type': 'application/json',
                    'authToken': localStorage.getItem('authTocken')
                },

            })
        const res = await response.json()
        setAlertMsg(res.message);
        getAllProjects()
    }


    // edit Project

    const editProject = async (Project, id) => {

        const response = await fetch(host + "Projects/updateProject/" + id,
            {
                method: 'PUT',
                headers: {
                    'Access-Control-Allow-Origin':'*',
                    'Content-Type': 'application/json',
                    'authToken': localStorage.getItem('authTocken')
                },
                body: JSON.stringify(Project)

            })
        const res = await response.json()
        setAlertMsg(res.message)
        getAllProjects()

    }



    // searching into the Projects

    const searchProject = async (text) => {
        setLoader(true)
        const response = await fetch(host + "Projects/searchProject/" + text,
            {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin':'*',
                    'Content-Type': 'application/json',
                    'authToken': localStorage.getItem('authTocken')
                },


            })
        const data = await response.json()
        setProjects(data);
        setLoader(false)

    }




    return (
        <ProjectContext.Provider value={{  viewProject, setViewProject, Projects, getAllProjects, searchProject, editProject, deleteProject, createProject, Loader, setLoader, AlertMsg, setAlertMsg }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;
