import React,{useState,useContext} from 'react';
import AllProjects from './AllProjects';
import CreateNewProject from './CreateNewProject';
import './Projecthome.css';
import ProjectContext from '../context/Projects/ProjectContext';

const ProjectsHome = () => {

  const { searchProject,getAllProjects } = useContext(ProjectContext)


  const [searchToggler, setsearchToggler] = useState(true);





  const handleSearchToggler = ()=>{
   setsearchToggler(!searchToggler)
  }


  const handleSearchXbtn = ()=>{
    handleSearchToggler();
    getAllProjects();
  }


  const handleSearch = async (e)=>{

    if(e.target.value===""){
      getAllProjects();
    }
    else {searchProject(e.target.value)}

  } 


  return (
    <>
    <div className='ProjectHomeContainer'>
    {searchToggler=== true? 
    <>
      <CreateNewProject />
      <div className="searchbarContainer">
        <div onClick={handleSearchToggler} className="searchlogo"> <button><i className='fa fa-search' /></button></div>
            </div>
            </>:
        <div className="searchForm">
          <input type="text" name='searchText'  onChange={handleSearch} /> 
          <i className='fa fa-search' />
          <div id="cancelSearch" onClick={handleSearchXbtn} >X</div>
        </div>}
      
      <AllProjects />
     
    </div>
    </>
  )
}

export default ProjectsHome
