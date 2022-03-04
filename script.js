///APIKEY e6fe50350d2b7296a8585b8989013f31


const mainBox = document.querySelector(".main-box");

function showPermissionBox(){
    mainBox.innerHTML = `
    <span class="text">Concorda em compartilhar sua localização?</span>
    <button onclick="getLocation()">Sim! Não existe mais privacidade mesmo</button>
    <button onclick="showSearchBox()">Não! Eles estão me observando...</button>
    `
}

function showSearchBox(){

}

function showWeatherBox(response){
    console.log(response);
    const weatherData = response.data;
    mainBox.innerHTML = `
    <ul class="display-box">
        <li class="city responce-box">${weatherData.name}</li>
        <li class="temp responce-box">${weatherData.main.temp}°C</li>
        <li class="current-weather responce-box">${weatherData.weather[0].description}</li>
        <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png">
    </ul>`

}

function apiError(){
    console.log("error");
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeather);
    } else { 
      mainBox.innerHTML = "Que pena, seu browser não suporta geolocation.";
      showSearchBox();
    }
}

function getWeather(position){
    console.log("doing")
    const promise = axios.get(`https://api.openweathermap.org/data/2.5/weather?id=524901&lang=pt_br&lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=e6fe50350d2b7296a8585b8989013f31`);
    promise.then(showWeatherBox);
    promise.catch(apiError);
}

function showPosition(position) { ///TESTE
    mainBox.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }





showPermissionBox();