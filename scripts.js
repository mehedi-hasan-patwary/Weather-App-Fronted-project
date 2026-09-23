
const apiKey="85db28a5f9e8686fed38c54f39fa4006";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=sylhet";

async function checkWeather(){
    const response=await fetch(apiUrl+`&appid=${apiKey}`);

    var data=await response.json();
    console.log(data);
}

checkWeather();

