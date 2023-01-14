const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.port || 3000;

const app = express();
app.use(express.static("public"));   
app.use(bodyParser.urlencoded({extended:false}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/html/index.html");
});

app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/html/aboutMe.html");
});

app.get("/project", (req, res)=>{
    res.sendFile(__dirname+"/html/otherWork.html");
});

app.listen(port, ()=>{
    console.log("listening");
});