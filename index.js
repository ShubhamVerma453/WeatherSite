const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const port = process.env.port || 3000;

const app = express();
app.use(express.static("public"));   
app.use(bodyParser.urlencoded({extended:false}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/html/index.html");
});

app.post("/", (req, res)=>{
    let city = req.body.city;
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=c51fe6c18a02dda49ab9619742a109cd&units=metric";
    https.get(url, (response)=>{
        response.on("data", (data)=>{
            let value = JSON.parse(data);
            // console.log(value);
            if(value.cod == 404){
                console.log("ok");
            }else{
                console.log("not");
            }
        });
        res.send(city);
    });
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