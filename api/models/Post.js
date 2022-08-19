const mongoose = require ("mongoose")


const PostSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
        unique:true
    },
    Description:{
        type:String,
        required:true,
    },
    Photo:{
        type:String,
        required:false
    },
    username:{
        type:String,
        require:true,
    },
    categories:{
        type:Array,
        require: false
    }
    

},{timestamps:true});

module.exports = mongoose.model("Post", PostSchema);