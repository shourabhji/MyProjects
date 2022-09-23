import React , {useContext , useEffect} from 'react'
import Project from './Project';
import './AllProjects.css'
import ProjectContext from '../context/Projects/ProjectContext';
import ViewProject from './ViewProject';
import Spinner from './Spinner';


const AllProjects = () => {

    const context = useContext(ProjectContext);
    const {Projects , getAllProjects ,viewProject,Loader} = context;




    useEffect(() => {
        getAllProjects();
        // eslint-disable-next-line
    },[]);



  return (
    <>
{Loader?<Spinner/>:
<div>
{
(Projects.length === 0 && Loader === false )?<div className="noProjects">
       <h1> No Projects to show , Try add One</h1>
      </div>:
    <div className='AllProjectsContainer' >
      {
        Projects.map((element)=>{ 
                return <Project  key={element._id}  Title={element.Title} Description={element.Description} _id={element._id} Link={element.Link} />
        })
      }
    </div>}
    </div>}
    <ViewProject project={viewProject} />
    </>
  )
}

export default AllProjects; 
