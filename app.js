


    fetch('http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then(res => res.json())
    .then(data =>{
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
    document.querySelector('.temp').innerHTML = "Temperature: " + data.main.temp + '&deg;'+"C";
    document.querySelector(".pressure").innerHTML = "Pressure: " + data.main.pressure + " hPa";
    document.querySelector(".humidity").innerHTML ="Humidity: " + data.main.humidity + "%";
    document.querySelector('.description').textContent ="Description: " + data.weather[0]['description'];
    document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".deg").innerHTML = data.wind.deg;
    })