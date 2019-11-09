const axios = require("axios");
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("get", function getWeather(data) {
  const { city } = data;
  const apiKey = "698cf3167edf31bf108219c12311be2b";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  axios
    .get(url)
    .then(({ data }) => console.log(data))
    .catch(err => console.log(err));
});

module.exports = emitter;
