// const searchInput = document.querySelector('.search__input');
// const searchBtn = document.querySelector('.search__icon');
// const temperature = document.querySelector('.layout__temperature');
// const city = document.querySelector('.layout__city__name');
// const time = document.querySelector('.layout__city__time');
// const phenomena = document.querySelector('.layout__phenomena');
// const cloudyDetail = document.querySelector('.weather__cloudy__detail');
// const humidityDetail = document.querySelector('.weather__humidity__detail');
// const windDetail = document.querySelector('.weather__wind__detail');
// humidity;
// const listCity = Array.from(document.querySelectorAll('.city__item'));

// const api = '4642d943d1533ed91d8fa4df72ee768a';

// function changeParameter(data) {
// 	const date = new Date(data.dt * 1000);
// 	temperature.innerHTML = Math.round(data.main.temp);
// 	city.innerHTML = data.name;
// 	time.innerHTML = date.toString().slice(0, 24);
// 	phenomena.innerHTML = data.weather[0].description;
// 	windDetail.innerHTML = (data.wind.speed * 3.6).toFixed(2);
// 	humidityDetail.innerHTML = data.main.humidity + '%';
// 	cloudyDetail.innerHTML = data.clouds.all + '%';
// }

// // use callback

// // window.onload = () => {
// //     const xhttp = new XMLHttpRequest();

// //     xhttp.onload = () => {
// //         const data = JSON.parse(xhttp.response);
// //         changeParameter(data);
// //     }

// //     xhttp.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${window.localStorage.getItem("city")}&appid=${api}&lang=en&units=metric`);

// //     xhttp.send();
// // }

// // searchInput.addEventListener('change', (e) => {
// //     const xhttp = new XMLHttpRequest();

// //     window.localStorage.setItem("city", e.target.value);

// //     xhttp.onload = () => {
// //         const data = JSON.parse(xhttp.response);
// //         changeParameter(data);
// //     }

// //     xhttp.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${api}&lang=en&units=metric`);

// //     xhttp.send();
// // })

// // listCity.forEach(cityName => {
// //     cityName.addEventListener("click", () => {
// //         const xhttp = new XMLHttpRequest();
// //         xhttp.onload = () => {
// //             const data = JSON.parse(xhttp.response);
// //             changeParameter(data);
// //         }

// //         xhttp.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${cityName.innerText}&appid=${api}&lang=en&units=metric`);

// //         xhttp.send();
// //     })
// // })

// // use Promise

// const promise = (url) => {
// 	return new Promise((resolve, reject) => {
// 		const request = new XMLHttpRequest();
// 		request.onload = function () {
// 			if (this.status === 200) {
// 				resolve(request.response);
// 			} else {
// 				reject(request.response);
// 			}
// 		};
// 		request.open('GET', url, true);
// 		request.send();
// 	});
// };

// searchInput.addEventListener('change', (e) => {
// 	let url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${api}&lang=en&units=metric`;

// 	promise(url)
// 		.then((res) => JSON.parse(res))
// 		.then((data) => {
// 			changeParameter(data);
// 		})
// 		.catch((err) => console.log(err));
// });

// listCity.forEach((city) => {
// 	city.addEventListener('click', () => {
// 		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.innerText}&appid=${api}&lang=en&units=metric`;
// 		promise(url)
// 			.then((res) => JSON.parse(res))
// 			.then((data) => {
// 				changeParameter(data);
// 			})
// 			.catch((err) => console.log(err));
// 	});
// });
