'use strict';

const doc = document;
const cityContainerEl = doc.querySelector('#city-container');
const cityFormEl = doc.querySelector('#city-form');
const citySearchInput = doc.querySelector('#city');



//const formSearchHandler = (event) => {
//
//  event.preventDefault();
//  let city = citySearchInput.value.trim();
//
//  if (city) {
//    citySearchInput.value = '';
//  } else {
//    alert('please enter a city name');
//  }
//  console.log(event);
//};
//
//
//
//const displayWeatherData = (weatherData, citySearch) => {
//
//  if (weatherData.length === 0) {
//    cityContainerEl.textContent = 'City not found';
//    return;
//  }
//
//}


const getWeatherData = () => {

  let api = 'https://api.openweathermap.org/data/2.5/forecast?q=phoenix&appid=e3b8bd27aaa26d31be8e66dd93093f79';

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
};

getWeatherData();

//cityFormEl.addEventListener('submit', formSearchHandler);