const area = document.querySelector(".weatherValue");
const weatherBtn = document.querySelector(".weatherButton");
const field = document.querySelector(".weatherInput");
let weatherImg = document.querySelector(".weatherFirstImg");
const myApiWeatherKey = "926b2ad5627ee3952c641e171fd9cd7a";
let city;
let url;
const weather = () => {
  city = field.value;
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myApiWeatherKey}`;
  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        area.innerHTML = data.weather[0].description;
        switch (data.weather[0].description) {
          case "clear sky":
            weatherImg.setAttribute("src", "./img/clouds.jpg");
            break;
          default:
            weatherImg.setAttribute("src", "");
            break;
        }
      });
  } catch (e) {
    console.log(e);
  }
};
weatherBtn.addEventListener("click", weather);
