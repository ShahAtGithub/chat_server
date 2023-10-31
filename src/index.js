const express=require("express");
const cors = require('cors');
const bodyParser=require("body-parser")
const { PORT } = require("./config/serverConfig");

const connectDB = require("./config/db");
const router = require("./routes");
const setUpAndStartServer=async()=>{
   
    await connectDB()
    const app=express();
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use("/api",router)
  
    app.get("/",(req,res)=>{
        res.send("it's working ....")
    })
    

    app.listen(PORT||4000,()=>{
        console.log(`server runing at ${PORT||4000}`)
       
    })


}

setUpAndStartServer()