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
    dob:{
        type:String,

    },
    pan:{
        type:String
    },
    office_addr:{
        type:String
    },
    residence_addr:{
        type:String
    }
})

const postModel = mongo.model("postData",postSchema)
module.exports=postModel