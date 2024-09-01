const input = document.querySelector("input");
const btn = document.querySelector("button");

const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");

const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");

const $apiLink = "https://api.openweathermap.org/data/2.5/weather?q=";
const $apiKey = "&appid=70a1b3128222ce7241d73e5a7fc49809";
const $units = "&units=metric";
let $city;
let $url;

const getWeather = () => {
	// $city = input.value;
	$city = "London";
	$url = $apiLink + $city + $apiKey + $units;

	axios.get($url).then(res => {
		const temp = res.data.main.temp;
		const hum = res.data.main.humidity;
		const status = Object.assign({}, ...res.data.weather);

		cityName.textContent = res.data.name;
		weather.textContent = status.main;
		temperature.textContent = Math.floor(temp) + "° C";
		humidity.textContent = hum + " %";

		console.log(status.id);
	});
};
getWeather();
