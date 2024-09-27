const input = document.querySelector("input");
const btn = document.querySelector("button");

const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const clouds = document.querySelector(".clouds");

const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");

const $apiLink = "https://api.openweathermap.org/data/2.5/weather?q=";
const $apiKey = "&appid=70a1b3128222ce7241d73e5a7fc49809";
const $units = "&units=metric";
let $city;
let $url;
const $now = new Date();
console.log($now);
const $hours = $now.getHours();
const $minutes = $now.getMinutes();
console.log(`Godzina: ${$hours}:${$minutes}`);

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
			clouds.textContent = "";
			input.value = "";
			
			if (status.id >= 200 && status.id < 300) {
				if (status.icon === "11d") {
					photo.setAttribute("src", "img/11d.png");
				} else {
					photo.setAttribute("src", "img/11n.png");
				}
				// photo.setAttribute("src", "img/thunderstorm.png");
				weather.textContent = "Burze";
				clouds.textContent = `Chmury ${res.data.clouds.all} %`;
			} else if (status.id >= 300 && status.id < 400) {
				if (status.icon === "09d") {
					photo.setAttribute("src", "img/09d.png");
				} else {
					photo.setAttribute("src", "img/09n.png");
				}
				// photo.setAttribute("src", "img/drizzle.png");
				weather.textContent = "Mżawka";
				clouds.textContent = `Chmury ${res.data.clouds.all} %`;
			} else if (status.id >= 500 && status.id < 600) {
				if (status.icon === "10d") {
					photo.setAttribute("src", "img/10d.png");
					weather.textContent = "Deszczowo";
				} else if (status.icon === "10n") {
					photo.setAttribute("src", "img/10n.png");
					weather.textContent = "Deszczowo";
				}
				if (status.icon === "09d") {
					photo.setAttribute("src", "img/09d.png");
					weather.textContent = "Deszczowo";
				} else if (status.icon === "09n") {
					photo.setAttribute("src", "img/09n.png");
					weather.textContent = "Deszczowo";
				}
				if (status.icon === "13d") {
					photo.setAttribute("src", "img/13d.png");
					weather.textContent = "Marznący deszcz";
				} else if (status.icon === "13n") {
					photo.setAttribute("src", "img/13n.png");
					weather.textContent = "Marznący deszcz";
				}
				// photo.setAttribute("src", "img/rain.png");
				clouds.textContent = `Chmury ${res.data.clouds.all} %`;
			} else if (status.id >= 600 && status.id < 700) {
				if (status.icon === "13d") {
					photo.setAttribute("src", "img/13d.png");
				} else {
					photo.setAttribute("src", "img/13n.png");
				}
				// photo.setAttribute("src", "img/ice.png");
				weather.textContent = "Śnieg";
				clouds.textContent = `Chmury ${res.data.clouds.all} %`;
			} else if (status.id >= 700 && status.id < 800) {
				if (status.icon === "50d") {
					photo.setAttribute("src", "img/50d.png");
					clouds.textContent = `Chmury ${res.data.clouds.all} %`;
					if (status.id == 701 || status.id == 721 || status.id == 741) {
						weather.textContent = "Mgła";
					}
					if (status.id == 711) {
						weather.textContent = "Dym";
					}
					if (status.id == 731 || status.id == 761) {
						weather.textContent = "Pył";
					}
					if (status.id == 751) {
						weather.textContent = "Piasek";
					}
					if (status.id == 762) {
						weather.textContent = "Popiół";
					}
					if (status.id == 771) {
						weather.textContent = "Szkwał";
					}
					if (status.id == 781) {
						weather.textContent = "Tornado";
					}
				} else {
					photo.setAttribute("src", "img/50n.png");
					clouds.textContent = `Chmury ${res.data.clouds.all} %`;
					if (status.id == 701 || status.id == 721 || status.id == 741) {
						weather.textContent = "Mgła";
					}
					if (status.id == 711) {
						weather.textContent = "Dym";
					}
					if (status.id == 731 || status.id == 761) {
						weather.textContent = "Pył";
					}
					if (status.id == 751) {
						weather.textContent = "Piasek";
					}
					if (status.id == 762) {
						weather.textContent = "Popiół";
					}
					if (status.id == 771) {
						weather.textContent = "Szkwał";
					}
					if (status.id == 781) {
						weather.textContent = "Tornado";
					}
				}
				// photo.setAttribute("src", "img/fog.png");
				// weather.textContent = "Mgła";
			} else if (status.id == 800) {
				if (status.icon === "01d") {
					// photo.setAttribute("src", "img/01d.png");
					photo.setAttribute("src", "img/sun.png");
					weather.textContent = "Słonecznie";
				} else {
					// photo.setAttribute("src", "img/01n.png");
					photo.setAttribute("src", "img/moon.png");
					weather.textContent = "Pogodnie";
				}
				clouds.textContent = `Chmury ${res.data.clouds.all} %`;
			} else if (status.id == 801) {
				if (status.icon === "02d") {
					photo.setAttribute("src", "img/02d.png");
				} else {
					photo.setAttribute("src", "img/02n.png");
				}
				// photo.setAttribute("src", "img/cloud.png");
				weather.textContent = "Zachmurzenie małe";
				clouds.textContent = `Chmury ${res.data.clouds.all} %`;
			} else if (status.id == 802) {
				if (status.icon === "03d") {
					photo.setAttribute("src", "img/03d.png");
				} else {
					photo.setAttribute("src", "img/03n.png");
				}
				// photo.setAttribute("src", "img/cloud.png");
				weather.textContent = "Zachmurzenie umiarkowane";
				clouds.textContent = `Chmury ${res.data.clouds.all} %`;
			} else if (status.id == 803) {
				if (status.icon === "04d") {
					photo.setAttribute("src", "img/04d.png");
				} else {
					photo.setAttribute("src", "img/04n.png");
				}
				// photo.setAttribute("src", "img/cloud.png");
				weather.textContent = "Pochmurnie";
				clouds.textContent = `Chmury ${res.data.clouds.all} %`;
			} else if (status.id == 804) {
				if (status.icon === "04d") {
					photo.setAttribute("src", "img/04d.png");
				} else {
					photo.setAttribute("src", "img/04n.png");
				}
				// photo.setAttribute("src", "img/cloud.png");
				weather.textContent = "Zachmurzenie duże";
				clouds.textContent = `Chmury ${res.data.clouds.all} %`;
			} else {
				photo.setAttribute("src", "img/unknown.png");
			}

			console.log("---------------");
			// console.log(res.data);
			console.log(res.data.name);
			console.log(res.data.sys.country);
			console.log(res.data.clouds.all);
			console.log(`Chmury ${res.data.clouds.all} %`);
			// console.log(res.data.sys);
			// console.log(weather.textContent);
			console.log(status);
			console.log(status.id);
			console.log(status.main);
			console.log(status.icon);
			console.log("---------------");
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
