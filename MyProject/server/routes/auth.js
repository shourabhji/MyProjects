const express = require('express');
const cors = require('cors');
const router = express.Router();
const user = require('../models/user');
const bcrypt = require('bcryptjs');
var JWT = require('jsonwebtoken');
var jwt_secreat = "tiasdfdg#$56@3rfsdfasasdf";
const fetchUser = require('../middleware/fetchUser')

router.options('*', cors());



router.get('/', async (req, res) => {

   res.send("Hello")

});

// Route1  cewating new user at /api/auth/signup using post request and jwt tocke  to get token for login

router.post('/signup', async (req, res) => {

    try {
        const { email, password, name } = req.body;

        let User = await user.findOne({ email: email });

        if (User) {
            return res.send({ message: `email is already registered as ${User.name} plese try another email` })
        }


        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(password, salt);

        User = await user({
            name: name, password: securePassword, email: email
        }).save();

        const data = {
            User: { id: User.id }
        }
        const authTocken = JWT.sign(data, jwt_secreat);

      return  res.send({ message:"Registered Successfully" ,authTocken })

    } catch (error) {

     return   res.send({ message: `${error}` })

    }

});




// Route 2  using post request for login

router.post('/login', async (req, res) => {

    try {

        const { email, password } = req.body;
        const User = await user.findOne({ email });

if(!User){
    return res.send({message: "This email is not registered yet Try signup" })
}
const passwordCompare = await bcrypt.compare(password, User.password);

if(!passwordCompare){
    return res.send({message:"please enter a valid password"})
}
    const data = {
        User: { id: User.id }
    }
    const authTocken = JWT.sign(data , jwt_secreat);
    return  res.send({ "message":"Login Successfully",authTocken})


    } catch (error) {
        return    res.send({"message": "some error occoured" + error})
    }
});






//  Route 3
// getting user login details using post : /api/auth/getUser //  Login requaired   

router.post('/getUser' ,fetchUser, async (req,res)=>{
    try {
        

        const userID = req.User.id;
        const User = await user.findById(userID).select('-password');
      return  res.send(User);


    } catch (error) {
      return  res.send({message:"some error occured"+error })
    }
})















module.exports = router;
