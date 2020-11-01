'use strict';


const getWeatherData = () => {

  let api = 'https://api.openweathermap.org/data/2.5/forecast?q=phoenix&appid=e3b8bd27aaa26d31be8e66dd93093f79';

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
};

getWeatherData();