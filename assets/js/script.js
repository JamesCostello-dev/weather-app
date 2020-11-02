'use strict';

const apiKey = 'e3b8bd27aaa26d31be8e66dd93093f79';
const citySubmit = document.querySelector('#city-submit');
const cityInput = document.querySelector('#city-input');

const citySubmitHanlder = (event) => {

  event.preventDefault();

  let cityName = cityInput.value;

  if (cityName) {
    getCurrentWeather(cityName);
    searchHistory(cityName);
    cityInput.value = '';
  } else {
    alert('Please enter a city.');
  }
  //console.log(event);
};

//Search history
const searchHistory = (cityName) => {

  let recentSearch = document.querySelector('#search-history');

  let displaySearchHistory = document.createElement('li');
  displaySearchHistory.textContent = cityName;
  recentSearch.appendChild(displaySearchHistory);

}


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

  let cardDate0 = document.querySelector('#card-date-0');
  let cardTemp0 = document.querySelector('#card-temp-0');
  let cardHum0 = document.querySelector('#card-hum-0');
  let displayCardDate0 = castData.list[1].dt_txt;
  cardDate0.textContent = displayCardDate0;
  let displayCardTemp0 = castData.list[1].main.temp;
  cardTemp0.textContent = 'Temp: ' + displayCardTemp0 + ' °F';
  let displayCardHum0 = castData.list[1].main.humidity;
  cardHum0.textContent = 'Humidity: ' + displayCardHum0 + ' %';

  let cardDate1 = document.querySelector('#card-date-1');
  let cardTemp1 = document.querySelector('#card-temp-1');
  let cardHum1 = document.querySelector('#card-hum-1');
  let displayCardDate1 = castData.list[9].dt_txt;
  cardDate1.textContent = displayCardDate1;
  let displayCardTemp1 = castData.list[9].main.temp;
  cardTemp1.textContent = 'Temp: ' + displayCardTemp1 + ' °F';
  let displayCardHum1 = castData.list[9].main.humidity;
  cardHum1.textContent = 'Humidity: ' + displayCardHum1 + ' %';

  let cardDate2 = document.querySelector('#card-date-2');
  let cardTemp2 = document.querySelector('#card-temp-2');
  let cardHum2 = document.querySelector('#card-hum-2');
  let displayCardDate2 = castData.list[17].dt_txt;
  cardDate2.textContent = displayCardDate2;
  let displayCardTemp2 = castData.list[17].main.temp;
  cardTemp2.textContent = 'Temp: ' + displayCardTemp2 + ' °F';
  let displayCardHum2 = castData.list[17].main.humidity;
  cardHum2.textContent = 'Humidity: ' + displayCardHum2 + ' %';

  let cardDate3 = document.querySelector('#card-date-3');
  let cardTemp3 = document.querySelector('#card-temp-3');
  let cardHum3 = document.querySelector('#card-hum-3');
  let displayCardDate3 = castData.list[25].dt_txt;
  cardDate3.textContent = displayCardDate3;
  let displayCardTemp3 = castData.list[25].main.temp;
  cardTemp3.textContent = 'Temp: ' + displayCardTemp3 + ' °F';
  let displayCardHum3 = castData.list[25].main.humidity;
  cardHum3.textContent = 'Humidity: ' + displayCardHum3 + ' %';

  let cardDate4 = document.querySelector('#card-date-4');
  let cardTemp4 = document.querySelector('#card-temp-4');
  let cardHum4 = document.querySelector('#card-hum-4');
  let displayCardDate4 = castData.list[33].dt_txt;
  cardDate4.textContent = displayCardDate4;
  let displayCardTemp4 = castData.list[33].main.temp;
  cardTemp4.textContent = 'Temp: ' + displayCardTemp4 + ' °F';
  let displayCardHum4 = castData.list[33].main.humidity;
  cardHum4.textContent = 'Humidity: ' + displayCardHum4 + ' %';

}

// fetch current weather
const getCurrentWeather = (cityName) => {

  let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;
  let castApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      displayCurrentWeather(data, cityName);
      console.log(data);
    })
  fetch(castApi)
    .then((res) => res.json())
    .then((castData) => {
      displayForecast(castData, cityName);
      console.log(castData);
    })
};

citySubmit.addEventListener('click', citySubmitHanlder);