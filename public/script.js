
document.getElementById("btn-submit").addEventListener("click", searchData);

function searchData(event) {
    event.preventDefault();
    // alert("ok");
    let city = document.getElementById("form-city").value;
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=c51fe6c18a02dda49ab9619742a109cd&units=metric";
    try {
        
        let data = fetch(url).then(response => response.json()).then(data => {
            let cod = data.cod;
            if(cod == 404)
                return;
    
            document.getElementById("city").innerText = data.name;
            document.getElementById("country").innerText = data.sys.country;
            document.getElementById("temp").innerText = data.main.temp;
            let logo = data.weather[0].icon;
            document.getElementById("weather-data").classList.remove("display-none");
        });
    } catch (error) {
        console.log("error");
    }
};







// app.post("/", (req, res)=>{
//     let city = req.body.city;
//     let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=c51fe6c18a02dda49ab9619742a109cd&units=metric";
//     https.get(url, (response)=>{
//         response.on("data", (data)=>{
//             let value = JSON.parse(data);
//             // console.log(value);
//             if(value.cod == 404){
//                 console.log("City not found");
//                 res.sendFile(__dirname+"/html/index.html");
//             }else{
//                 searchData();
//                 res.sendFile(__dirname+"/html/index.html");
//             }
//         });
//     });
// });