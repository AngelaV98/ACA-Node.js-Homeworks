const axios = require("axios");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("get", function getWeather(data: any) {
  const { city } = data;
  const apiKey = "698cf3167edf31bf108219c12311be2b";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  axios
    .get(url)
    .then(({ data }: any) => console.log(data))
    .catch((err: any) => console.log(err));
});

module.exports = eventEmitter;
