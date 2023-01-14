document.getElementById("btn-submit").addEventListener("click", searchData);

function searchData(event) {
    event.preventDefault();     //after clicking search page remain in same state (don't refresh)
    // alert("ok");
    let city = document.getElementById("form-city").value;
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c51fe6c18a02dda49ab9619742a109cd&units=metric";
    try {
        let data = fetch(url).then(response => response.json()).then(data => {
            let cod = data.cod;
            if (cod == 200) {
                document.getElementById("city").innerText = data.name;
                document.getElementById("country").innerText = data.sys.country;
                document.getElementById("temp").innerText = data.main.temp;
                let logo = data.weather[0].icon;
                let imgSrc = "http://openweathermap.org/img/wn/" + logo + "@2x.png";
                document.getElementById("img").src = imgSrc;
                document.getElementById("country").classList.remove("display-none");
                document.getElementById("temp-box").classList.remove("display-none");
                document.getElementById("weather-img").classList.remove("display-none");
            } else {
                document.getElementById("city").innerText = "City not found";
                document.getElementById("country").classList.add("display-none");
                document.getElementById("temp-box").classList.add("display-none");
                document.getElementById("weather-img").classList.add("display-none");
            }

        });
    } catch (error) {
        console.log("error");
    }
};