let weather = {
    apiKey: "8514cf9602fa050a6b109c2ea9b1bbc9",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid=" 
        + this.apiKey)
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            this.displayWeather(data);
        })
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        const { country } = data.sys;
        console.log(name, icon, description, temp, country);
        
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".city").innerText = name + ", " + country;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".contents").innerText = description.toUpperCase();
        document.querySelector(".weather").classList.remove("loading");

    },
    // Takes in the city name as param
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-button")
.addEventListener("click", () => {
    weather.search();
});

// When keyboard enter
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});