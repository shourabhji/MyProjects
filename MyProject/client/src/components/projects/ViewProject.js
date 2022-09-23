import React, {useState,useContext} from 'react';
import './viewProject.css';
import ProjectContext from '../context/Projects/ProjectContext';

const ViewProject = (props) => {

  const {deleteProject,editProject} = useContext(ProjectContext);
  const {project} = props;
   
  const [editProjectToggler, seteditProjectToggler] = useState(false);
    const [ProjectDetails, setProjectDetails] = useState({Title:'',Description:'',Link:""});



  const [ProjectDisplaytoggle, setProjectDisplaytoggle] = useState(true);

  const handleViewProjectdisplay =()=>{
      const viewProject = document.getElementById('viewProject');

      setProjectDisplaytoggle(!ProjectDisplaytoggle);

      if(!ProjectDisplaytoggle){
            viewProject.style.display ="none";
      }else{
        viewProject.style.display ="none";
      }
  }


  // editProject Toggler

  const toggleEditProject =()=>{

   
    const editProjectForm = document.getElementById('editProjectForm');
    if(!editProjectToggler){
      editProjectForm.style.display = "block"
      seteditProjectToggler(!editProjectToggler);
      setProjectDetails({Title:project.Title,Description:project.Description,Link:project.Link})
    }
    else{
      editProjectForm.style.display = "none";
      seteditProjectToggler(!editProjectToggler);
    }

  }



  const handleChange = (e)=>{

setProjectDetails({
    ...ProjectDetails,
    [e.target.name] : e.target.value
    // eslint-disable-next-line
}) 

}

  const handleEditProject = (e)=>{
      e.preventDefault();
editProject(ProjectDetails,project._id)
toggleEditProject();
handleViewProjectdisplay();

  }

  const handleDeleteProject = ()=>{

    deleteProject(project._id);
    handleViewProjectdisplay();

  }


  return (
    <div className='viewProjectBackground' id='viewProject' >
          <div className="ProjectDetailContainer" id='viewProjectContainer' >
            <div className="Xbtn" onClick={handleViewProjectdisplay} >X</div>
            <div className="Title">{project.Title }</div>
            <div className="Descreption">{project.Description}</div>

      <div className="btnContainer">
      <i onClick={toggleEditProject} className="fa fa-edit" />
      <i onClick={handleDeleteProject} className="fa fa-trash" />
      <a href={project.Link}><i className="fa fa-link" /></a>
          </div>
          </div>

    <div className="editProjectContainer">

            <div className="backgroundBlur" id='editProjectForm'>
                <div className='NewProjectform'>
                    <div className="Xbtn" onClick={toggleEditProject} >X</div>
                    <div className='headingText'>Edit Project</div>
                    <form  onSubmit={handleEditProject}  >
                        <div className="element">
                            <div className="text">Title :</div>
                            <input type="text" name="Title" value={ProjectDetails.Title} onChange={handleChange} required placeholder='Enter Title' />
                        </div>
                        <div className="element">
                            <div className="text">Description :</div>
                            <textarea value={ProjectDetails.Description} cols="30" rows="6" name="Description" onChange={handleChange} placeholder='Enter Descreption' />
                        </div>
                        <div className="element">
                            <div className="text">Link :</div>
                            <input type="Text" value={ProjectDetails.Link} name="Link" onChange={handleChange} required placeholder='Enter or Past Link' />
                        </div>
                        <div className="btn">
                            <button type="submit">Save Edit</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>

    </div>
  )
}

export default ViewProject;
