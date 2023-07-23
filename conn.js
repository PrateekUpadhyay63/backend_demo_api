const mongo =require("mongoose")

mongo.connect("mongodb+srv://prateekupadhyay0199:Vinove123@cluster0.k8iudqp.mongodb.net/",{useNewUrlParser:true,useUnifiedTopology: true }).then((res)=>{
    console.log("Mongo Connected")
}).catch((err)=>{
    console.log(err.message,"Error")
})