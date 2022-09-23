const JWT = require('jsonwebtoken');
var jwt_secreat = "tiasdfdg#$56@3rfsdfasasdf";



const fetchUser = (req,res, next) => {


    const token = req.header('authToken')

    // get the user from the jwt tocken and add it to req object
     if(!token) {
        res.status(401).send({ message :'auth tocken not found'})
     }
     try{
        const data = JWT.verify(token , jwt_secreat);
        req.User = data.User;
        next()
     } catch (error) {
        res.status(401).send({ message : 'Please auth.. using a valid token' })
     }


    
}




module.exports= fetchUser; 