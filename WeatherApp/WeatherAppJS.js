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

const thunderstormImg = '/WeatherApp/WeatherApp grafiki/thunderstorm.png';
const drizzleImg = '/WeatherApp/WeatherApp grafiki/drizzle.png';
const rainImg = '/WeatherApp/WeatherApp grafiki/rain.png';
const snowImg = '/WeatherApp/WeatherApp grafiki/ice.png';
const cloudImg = '/WeatherApp/WeatherApp grafiki/cloud.png';
const fogImg = '/WeatherApp/WeatherApp grafiki/fog.png';
const sunImg = '/WeatherApp/WeatherApp grafiki/sun.png';
const unknownImg = '/WeatherApp/WeatherApp grafiki/unknown.png';

const getWeather = () => {
    
    city = (!input.value) ? 'Minsk' : input.value;
    // city = 'Wroclaw';

    url = apiLink + city + apiKey + units;
    axios.get(url)
        .then(res => {
            const temp = res.data.main.temp;
            const hum = res.data.main.humidity;
            const status = Object.assign({}, ...res.data.weather);
            const weatherID = status.id;

            cityName.textContent = res.data.name;
            temperature.textContent = `${Math.floor(temp)}°C`;
            humidity.textContent = `${hum}%`;
            weather.textContent = status.main;
            warning.textContent = '';
            input.value = '';


            if (weatherID >= 200 && weatherID < 300) {
                photo.setAttribute('src', thunderstormImg)
            } else if (weatherID >= 300 && weatherID < 500) {
                photo.setAttribute('src', drizzleImg)
            } else if (weatherID >= 500 && weatherID < 600) {
                photo.setAttribute('src', rainImg)
            } else if (weatherID >= 600 && weatherID < 701) {
                photo.setAttribute('src', snowImg)
            } else if (weatherID >= 801 && weatherID < 900) {
                photo.setAttribute('src', cloudImg)
            } else if (weatherID >= 701 && weatherID < 800) {
                photo.setAttribute('src', fogImg)
            } else if (weatherID === 800) {
                photo.setAttribute('src', sunImg)
            } else {
                photo.setAttribute('src', unknownImg)
            }
            // console.log(`City: ${city}`);
            // console.log(`Temperature: ${temp}`);
            // console.log(`Humidity: ${hum}`);
            // console.log(res.data.weather);
            // console.log(weatherID);
        })
        .catch(() => warning.textContent = 'Wpisz poprawną nazwę miasta.')
}

getWeather();
btn.addEventListener('click', getWeather);