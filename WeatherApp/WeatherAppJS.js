const input = document.querySelector('input');
const btn = document.querySelector('button');

const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');

const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&APPID=41f33b51dd518167d4518ba7bf9b6d22'
const units = '&units=metric';
let city;
let url;

const getWeather = () => {

    // city = input.value;
    city = 'Warsaw';

    url = apiLink + city + apiKey + units;
    axios.get(url)
        .then(res => {
            const temp = res.data.main.temp;
            const hum = res.data.main.humidity;

            cityName.textContent = res.data.name;
            temperature.textContent = `${Math.floor(temp)}°C`;
            humidity.textContent = `${hum}%`;

            console.log(`City: ${city}`);
            console.log(`Temperature: ${temp}`);
            console.log(`Humidity: ${hum}`);
        })
}

getWeather();