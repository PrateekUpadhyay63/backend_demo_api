const mongo=require("mongoose");

const postSchema=new mongo.Schema({
    first_name:{
        type:String,
        require:true,
    },
    last_name:{
        type:String,
        require:true,
    },
    pan:{
        type:String
    },
    office_addr:{
        type:String
    }
})

const postModel = mongo.model("prePostData",postSchema)
module.exports=postModel