import React , {useState,useContext} from 'react';
import './CreateNewProject.css';
import ProjectContext from '../context/Projects/ProjectContext';

const CreateNewProject = () => {

    const {createProject} = useContext(ProjectContext);
    
    const [AddProjectToggler, setAddProjectToggler] = useState(true);
    const [ProjectDetails, setProjectDetails] = useState({Title:"",Description:"",Link:""});
    
    const handleAddProjectToggle = ()=>{

        setAddProjectToggler(!AddProjectToggler);

        const AddProjectBtn = document.getElementById('AddProjectBtn');
        const AddProjectForm = document.getElementById('AddProjectForm');

        if(!AddProjectToggler){
            AddProjectBtn.style.display = "block";
            AddProjectForm.style.display = 'none';
        }
        else{
            AddProjectBtn.style.display = "none";
            AddProjectForm.style.display = 'block';
        }

    }

    const handleChange = (e)=>{

        setProjectDetails({
            ...ProjectDetails,
            [e.target.name] : e.target.value
        })

    }

    const handleAddProjectSubmit = (e)=>{
        e.preventDefault();
        createProject(ProjectDetails);
        handleAddProjectToggle();
        setProjectDetails({Title:"",Description:"",Link:""});

    }



    
    return (
        <>
            <div className="newProjectBtn" id='AddProjectBtn' onClick={handleAddProjectToggle}>
                <button> Add <i className='fa fa-plus'></i></button>
            </div>
            <div className="backgroundBlur" id='AddProjectForm'>
                <div className='NewProjectform'>
                    <div className="Xbtn" onClick={handleAddProjectToggle} >X</div>
                    <div className='headingText'>Add Project</div>
                    <form  onSubmit={handleAddProjectSubmit}  >
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
                            <button type="submit">ADD</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateNewProject
