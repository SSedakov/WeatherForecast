
let urlPosition = 'https://get.geojs.io/v1/ip/geo.json';
let btnShowWeather = document.getElementById('btnShowWeather');
let olList = document.getElementById('olList');
let img = document.getElementById('img');


btnShowWeather.addEventListener('click',showWeather);


async function getPosition(){
  let response = await fetch(urlPosition);
  let position = await response.json();

  return position;
}


async function showWeather(){

  let position = await getPosition();
 
    let latitude = position.latitude;
    let longitude = position.longitude;
    let city = position.city;
    console.log(city);
    
    let urlWeather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    let response = await fetch(urlWeather);
    let weather = response.json();
    weather.then((res) => {
      
      let temperature = res.current_weather.temperature;
      let windspeed = res.current_weather.windspeed;
      let weatherCode = res.current_weather.weathercode;
      let resWeatherCode = getweatherCode(weatherCode);
      createLi(temperature,windspeed,resWeatherCode,weatherCode); 
      console.log(weatherCode);
    })
     
     
    function getweatherCode(weatherCode){
      switch (weatherCode) {
        case 0:
           return 'Clear sky';
        case 1: 
            return 'Mainly clear';
        case 2:
              return 'partly cloudy';
        case 3: 
               return 'overcast';
        case 45:
                return 'Fog and depositing rime fog';
        case 48:
                 return 'Fog'
        case 51: 
                 return 'Drizzle: Light, moderate, and dense intensity';
        case 53: 
                 return 'Drizzle: Light, moderate, and dense intensity';
        case 55: 
                 return 'Drizzle: Light, moderate, and dense intensity';
        case 56:
                 return '	Freezing Drizzle: Light and dense intensity';
        case 57:
                 return '	Freezing Drizzle: Light and dense intensity';
        case 61: 
                 return 'Rain: Slight, moderate and heavy intensity';
        case 66:
                  return 'Freezing Rain: Light and heavy intensity';
        case 67:
                    return 'Freezing Rain: Light and heavy intensity';
        case 71: 
                   return '	Snow fall: Slight, moderate, and heavy intensity';
        case 73: 
                   return '	Snow fall: Slight, moderate, and heavy intensity';
        case 75: 
                   return '	Snow fall: Slight, moderate, and heavy intensity';
        case 77:
                   return 'Snow grains';
        case 80: 
                      return '	Rain showers: Slight, moderate, and violent';
        case 81: 
                      return '	Rain showers: Slight, moderate, and violent';
        case 82: 
                      return '	Rain showers: Slight, moderate, and violent';
        case 85:
                       return '	Snow showers slight and heavy';
        case 86:
                       return '	Snow showers slight and heavy';
        case 95: 
                        return '	Thunderstorm: Slight or moderate';
        case 96:
                        return '	Thunderstorm with slight and heavy hail';
        case 99:
                        return '	Thunderstorm with slight and heavy hail';
        default:
          break;
      }
    }
  

}

 function createLi(temperature,windspeed,resWeatherCode,weatherCode){
  


  const li = document.createElement('li');
  li.innerHTML = `<li>Температура : ${temperature}</li>`
  olList.append(li);

  const li1 = document.createElement('li');
  li1.innerHTML = `<li> Скорость ветра : ${windspeed}</li>`;
  olList.append(li1);

  const li2 = document.createElement('li');
  li2.innerHTML = `<li>Тип осадков : ${resWeatherCode}</li>`;
  olList.append(li2);

  img.src = getImg(weatherCode);
   
 
  
 }


   function getImg(weatherCode) {
    switch (weatherCode) {
      case 0:
         return  './img/clear.jpg';
      case 1: 
          return './img/clear.jpg';
      case 2:
            return './img/clear.jpg';
      case 3: 
             return './img/clear.jpg';
      case 45:
              return './img/fog.jpg';
      case 48:
               return './img/fog.jpg';
      case 51: 
               return './img/wind.jpg';
      case 53: 
               return './img/wind.jpg';
      case 55: 
               return './img/wind.jpg';
      case 56:
               return './img/wind.jpg';
      case 57:
               return './img/wind.jpg';
      case 61: 
               return './img/rain.jpg';
      case 66:
                return './img/rain.jpg';
      case 67:
                  return './img/rain.jpg';
      case 71: 
                 return './img/snow.jpg';
      case 73: 
                 return './img/snow.jpg';
      case 75: 
                 return './img/snow.jpg';
      case 77:
                 return './img/snow.jpg';
      case 80: 
                    return './img/rain.jpg';
      case 81: 
                    return './img/rain.jpg';
      case 82: 
                    return './img/rain.jpg';
      case 85:
                     return './img/snow.jpg';
      case 86:
                     return './img/snow.jpg';
      case 95: 
                      return './img/huricane.jpg';
      case 96:
                      return './img/huricane.jpg';
      case 99:
                      return './img/huricane.jpg';
      default:
        break;
   }
  }