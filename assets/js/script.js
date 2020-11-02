'use strict';

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
  console.log(event);
};

// display current weather
const displayCurrentWeather = (data) => {

  let list = document.querySelector('ul');

  let displayCurrentTemp = data.main;
  let currentTemp = document.createElement('li');
  currentTemp.textContent = 'Temperature: ' + displayCurrentTemp.temp + ' °F';
  list.appendChild(currentTemp);

  let displayCurrentHumidity = data.main;
  let currentHumidity = document.createElement('li');
  currentHumidity.textContent = 'Humidity: ' + displayCurrentHumidity.humidity + ' %';
  list.appendChild(currentHumidity);

  let displayCurrentWindSpeed = data.wind;
  let currentWindSpeed = document.createElement('li');
  currentWindSpeed.textContent = 'Wind Speed: ' + displayCurrentWindSpeed.speed + ' MPH';
  list.appendChild(currentWindSpeed);

  // let displayCurrentUVIndex = data.main;
  // let currentUVIndex = document.createElement('li');
  // currentUVIndex.textContent = 'UV Index: ' + displayCurrentUVIndex;
  // list.appendChild(currentUVIndex);

};

// fetch current weather
const getCurrentWeather = (cityName) => {

  let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=e3b8bd27aaa26d31be8e66dd93093f79`;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      displayCurrentWeather(data, cityName);
      console.log(data, cityName);
    });
};

citySubmit.addEventListener('click', citySubmitHanlder);