const API_KEY = "a7204dcbb827ab57088f18e8c55fe74a";
const FETCH_URL = "https://api.openweathermap.org/data/2.5/weather?q="

async function getData(cityName){
    const data = await fetch(`${FETCH_URL}${cityName}&appid=${API_KEY}&units=metric`)
    const jsonData = await data.json();
   
    return jsonData;    
}

const searchBtn = document.querySelector('.search-btn');
const cityInput = document.querySelector('.city-name');
const errorMessage = document.querySelector('.err-msg');
const currentTemperature = document.querySelector('.temp');
const displayData = document.querySelector('.dynamic-data-container');
const cityNameOnCard = document.querySelector('h3');
const windSpeed = document.querySelector('.wind-speed-val');
const humidityVal = document.querySelector('.humidity-val');
searchBtn.addEventListener('click', async () => {
    if(cityInput.value !== ''){
        const cityName = cityInput.value;
        console.log(cityName)
        const data = await getData(cityName);
        if(data?.cod !== '404'){
            console.log(Math.round(data?.main?.temp - 273.15))
            displayData.style.display = "block";
            currentTemperature.textContent = Math.round(data?.main?.temp) + "°C";
            humidityVal.textContent = data?.main?.humidity;
            windSpeed.textContent = data?.wind?.speed + "km/h";
            cityNameOnCard.textContent = data?.name;
            errorMessage.style.display = "none"
        }
        else{
            errorMessage.style.display = "block"
            displayData.style.display = "none";
        }       
    }
    else{
        errorMessage.style.display = "block"
        displayData.style.display = "none";
    }
    
})
