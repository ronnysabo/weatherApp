const apiKey = "fa3a565a0030936783d125789dbb5613";
const city = "Halmstad";

// funktion som fetchar data, kollar respons och sedan omvandlar json sträng till javasript objekt..
// denna används sedan som referens i min weatherApp

let getData = async (url) => {
  let response = await fetch(url);
  console.log("Fetch returned " + response.status);
  if (response.ok) {
    console.log("Fetch gick bra");
  }
  let data = await response.json();
  return data;
};

// gör en request till url

let weatherApp = async () => {
  let info = await getData(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
  );

  // spara kordinater (longitud,latitud) i variabler

  let lon = info[0].lon;
  let lat = info[0].lat;

  // gör en request för och hämta väderdata

  let getWeather = await getData(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );

  console.log(getWeather);

  // omvandla data till variabler

  let weather = getWeather.main.temp;
  let country = getWeather.sys.country;
  country = " Sweden";
  let clouds = getWeather.weather[0].description;

  // acessa och ändra DOMen

  let resultCity = document.getElementById("location");
  resultCity.innerHTML = city + "," + country;
  let weatherTemp = document.getElementById("temperature");
  weatherTemp.innerHTML = weather.toFixed(0) + "°C, " + clouds;
  if (clouds == true) {
    weatherTemp.innerHTML = weather.toFixed(0) + "°C, " + clouds;
  } else {
    weatherTemp.innerHTML = weather.toFixed(0) + "°C";
  }
};

//kalla på väderappsfunktionen

weatherApp();
