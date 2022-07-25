const app = document.querySelector('.weather-app');
const temperature = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const statusWeather = document.querySelector('.weather__status');
const humidity = document.querySelector('.humidity');
const nameOutput = document.querySelector('.city__name');
const weatherMini = document.querySelector('.weather__mini');
const cities = document.querySelectorAll('.city');
const btn = document.querySelector('.search__button');
const search = document.querySelector('.search');
const form = document.getElementById('locationInput');
const wind = document.querySelector('.wind');
const cloudy = document.querySelector('.cloud');

function changeParameter(data) {
	const date = new Date(data.dt * 1000);
	temperature.innerHTML = Math.round(data.main.temp) + '&#176';
	nameOutput.innerHTML = data.name;
	timeOutput.innerHTML = date.toString().slice(0, 24);
	statusWeather.innerHTML = data.weather[0].description;
	wind.innerHTML = (data.wind.speed * 3.6).toFixed(2);
	humidity.innerHTML = data.main.humidity + '%';
	cloudy.innerHTML = data.clouds.all + '%';
	weatherMini.setAttribute(
		'src',
		`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
	);
}

const api = '6b3a3e5042dbc83aeafbf5187e5e82f5';
//Promise

const promise = (url) => {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		request.onload = function () {
			if (this.status === 200) {
				resolve(request.response);
			} else {
				reject(request.response);
			}
		};
		request.open('GET', url, true);
		request.send();
	});
};

search.addEventListener('change', (e) => {
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${api}&lang=en&units=metric`;

	promise(url)
		.then((res) => JSON.parse(res))
		.then((data) => {
			changeParameter(data);
		})
		.catch((err) => console.log(err));
});

cities.forEach((city) => {
	city.addEventListener('click', () => {
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.innerText}&appid=${api}&lang=en&units=metric`;
		promise(url)
			.then((res) => JSON.parse(res))
			.then((data) => {
				changeParameter(data);
			})
			.catch((err) => console.log(err));
	});
});
console.log();
