'use strict';

const apiKey = 'e3b8bd27aaa26d31be8e66dd93093f79';
const citySubmit = document.querySelector('#city-submit');
const cityInput = document.querySelector('#city-input');


const citySubmitHanlder = (event) => {

  event.preventDefault();

  let cityName = cityInput.value;

  if (cityName) {
    getCurrentWeather(cityName);
    cityInput.value = '';
  } else {
    alert('Please enter a city.');
  }
  //console.log(event);
};

// display current weather
const displayCurrentWeather = (data) => {

  let currentCity = document.querySelector('#city-name');

  let displayCurrentCity = data.name;
  currentCity.textContent = displayCurrentCity;

  let displayCurrentTemp = data.main;
  let currentTemp = document.createElement('h5');
  currentTemp.textContent = 'Temperature: ' + displayCurrentTemp.temp + ' °F';
  currentCity.appendChild(currentTemp);

  let displayCurrentHumidity = data.main;
  let currentHumidity = document.createElement('h5');
  currentHumidity.textContent = 'Humidity: ' + displayCurrentHumidity.humidity + ' %';
  currentCity.appendChild(currentHumidity);

  let displayCurrentWindSpeed = data.wind;
  let currentWindSpeed = document.createElement('h5');
  currentWindSpeed.textContent = 'Wind Speed: ' + displayCurrentWindSpeed.speed + ' MPH';
  currentCity.appendChild(currentWindSpeed);

};

const displayForecast = (castData) => {

  let forecast = document.querySelector('#forecast-card');




}

// fetch current weather
const getCurrentWeather = (cityName) => {

  let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;
  let castApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      displayCurrentWeather(data, cityName);
      console.log(data);
    })
  fetch(castApi)
    .then((res) => res.json())
    .then((castData) => {
      console.log(castData);
    })
};

citySubmit.addEventListener('click', citySubmitHanlder);