const mongoose = require('mongoose');
const  {Schema}    = mongoose;

const projectSchema = new Schema({
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    Title:{
        type:String,
        required: true
    },
    Description:{
        type:String
    },
    Link:{
        type:String,
        require: true,
    }
});


module.exports = mongoose.model('Projects' , projectSchema)