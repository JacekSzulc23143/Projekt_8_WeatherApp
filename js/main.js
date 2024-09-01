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
	$city = !input.value ? "Gdynia" : input.value;
	$url = $apiLink + $city + $apiKey + $units;

	axios
		.get($url)
		.then(res => {
			const temp = res.data.main.temp;
			const hum = res.data.main.humidity;
			const status = Object.assign({}, ...res.data.weather);

			cityName.textContent = `${res.data.name} (${res.data.sys.country})`;
			weather.textContent = status.main;
			temperature.textContent = Math.floor(temp) + "° C";
			humidity.textContent = hum + " %";

			warning.textContent = "";
			input.value = "";

			if (status.id >= 200 && status.id < 300) {
				photo.setAttribute("src", "img/thunderstorm.png");
				weather.textContent = "Burze";
			} else if (status.id >= 300 && status.id < 400) {
				photo.setAttribute("src", "img/drizzle.png");
				weather.textContent = "Mżawka";
			} else if (status.id >= 500 && status.id < 600) {
				photo.setAttribute("src", "img/rain.png");
				weather.textContent = "Deszczowo";
			} else if (status.id >= 600 && status.id < 700) {
				photo.setAttribute("src", "img/ice.png");
				weather.textContent = "Śnieg";
			} else if (status.id >= 700 && status.id < 800) {
				photo.setAttribute("src", "img/fog.png");
				weather.textContent = "Mgła";
			} else if (status.id === 800) {
				photo.setAttribute("src", "img/sun.png");
				weather.textContent = "Słonecznie";
			} else if (status.id > 800 && status.id < 900) {
				photo.setAttribute("src", "img/cloud.png");
				weather.textContent = "Pochmurnie";
			} else {
				photo.setAttribute("src", "img/unknown.png");
			}

			console.log(res.data.name);
			console.log(res.data.sys.country);
			console.log(weather.textContent);
			console.log(status);
		})
		.catch(() => {
			warning.textContent = "Wpisz poprawną nazwę miasta.";
		});
};

const enterCheck = e => {
	if (e.keyCode === 13) {
		getWeather();
	}
};

getWeather();
btn.addEventListener("click", getWeather);
input.addEventListener("keyup", enterCheck);
