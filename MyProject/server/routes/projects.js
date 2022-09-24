const express = require('express');
const router = express.Router();
const Projects = require('../models/projects');
const fetchUser = require('../middleware/fetchUser');
const projects = require('../models/projects');


// Route 1 Create projects

router.post('/createProject', fetchUser, async (req, res) => {

    // checking the project already exists 

    let project = await Projects.findOne({ Title: req.body.Title })
    if (project) {
        return res.json({
            message: "This Project is already exist as " + project.Title + " try edit if you want"
        })
    };

    // Creating new project
    const { Title, Description, Link } = req.body;

    try {
        project = await new Projects({
            Title, Description, Link, User: req.User.id
        }).save()
        return res.json({ message: 'Project Created Successfully!' })
    } catch (error) {
        return res.json({ message: 'Some error occured ' + error })
    }


});










//  Route 2 get all projects

router.get('/getAllProjects', fetchUser, async (req, res) => {

    try {

        const Projects = await projects.find({ User: req.User.id });

      return  res.json(Projects);

    } catch (error) {
      return  res.json({ message: "some error occured " + error })
    }


});






// Route 3 delete a project

router.delete('/deleteProject/:id', fetchUser, async (req, res) => {


    try {
        // finding note to be deleted
        let Project = await Projects.findById(req.params.id);

        if (!Project) { return res.status(401).json({ message: "Project not found Maybe It was deleted" }) };

        // getting req.user from middleware fetchuser
        if (Project.User.toString() !== req.User.id) { return res.status(401).json({ message: "not Allowed" }) }

        /// Deleting contact
        await Projects.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Project has been deleted successfully!" });
    }
    catch (error) {
        return   res.status(401).json({message:"some error occured during deletion " + error})
    }



});









//Route 4 updating an existing Project

router.put('/updateProject/:id', fetchUser, async (req, res) => {

    try {

        const {Title , Description , Link} = req.body;
        const newProject = {};
        if (Title) { newProject.Title = Title }
      if (Description) { newProject.Description = Description }
      if (Link) { newProject.Link = Link }


        let Project = await Projects.findById(req.params.id);

        if (!Project) { return res.status(401).json({ message: "Project not found Maybe It doesn't exist." }) };

        // getting req.user from middleware fetchuser
        if (Project.User.toString() !== req.User.id) { return res.status(401).json({ message: "not Allowed" }) }


        // updating the project

        Project = await Projects.findByIdAndUpdate(req.params.id, { $set: newProject }, { new: true });
        return  res.status(200).json({message:"Project Updated successfully! "});

    }
    catch (error) {
        return res.status(401).json({message:"some error occured during Updation " + error});
    }
});






// Route 5  searching by Title


router.get('/searchProject/:text' , fetchUser , async (req,res)=>{


    try {
        
    var regex = new RegExp(req.params.text,'i');

   const result = await Projects.find({Title:regex});

   return res.json(result)

} catch (error) {
      return  res.json({message:'some error occured '+error})
}

})









module.exports = router;
