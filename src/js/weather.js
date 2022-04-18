const area = document.querySelector (".weatherArea");
const cities = document.querySelectorAll(".city");
const url = ""

const weather = () => {
    return fetch(url) .then(response => response.json())
};
weather() .then (data => {area.innerHTML = data})