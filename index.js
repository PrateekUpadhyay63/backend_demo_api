const express = require("express")
const bodyParser= require("body-parser")
const postRouter  = require("./routes/route.js")
require("./conn.js")

const app = express();
app.use(bodyParser())
app.use('/api/v1', postRouter)
app.listen(4500,()=>{
    console.log("server is listening on port : 4500" )
})

