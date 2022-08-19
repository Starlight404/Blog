const mongoose = require ("mongoose")


const PostSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    passeord:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default: "",
    },
    

},{timestamps:true});

module.exports = mongoose.model("Posr", PostSchema);