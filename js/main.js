const input = document.querySelector("input");
const btn = document.querySelector("button");

const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");

const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");

const apiLink = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=70a1b3128222ce7241d73e5a7fc49809";
const units = "&units=metric";
let city;
let url;
