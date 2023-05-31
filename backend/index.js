const express=require("express");
const { connection } = require("./config/db");
require("dotenv").config();


const app=express();


app.get("/",(req,res)=>{
    res.send("Welcome to home page!")
})

app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("connected to DB");
        console.log(`server is running at port ${process.env.port}`)
    } catch (error) {
        console.log("Not able to connected to DB");
        console.log(error);
    }
})