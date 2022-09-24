const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000 ;
const app = express();
dotenv.config();
app.use(express.json({extendex:true}) , express.urlencoded({extended:true}));
app.use(cors());


const mongoURI = process.env.MONGO;

mongoose.connect(mongoURI , {useUnifiedTopology: true}).then(()=>{console.log("connect to mmongodb")}).catch(err => console.log(err));



app.get('/' , (req,res) =>{
    res.send('hello')
})
app.use('/api/auth' , require('./routes/auth.js'));
app.use('/api/projects' , require('./routes/projects.js'));
 
app.listen(PORT , ()=> {
    console.log(`your app is running on http://localhost:${PORT}`)
});

