function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();

setInterval(updateTime, 1000);

function updateCity(event) {
  let city = event.target.value;
  if (city === "current") {
    city = moment.tz.guess();
  }
  let cityName = city.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(city);

  let cityElement = document.querySelector("#selected-city");

  cityElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName} </h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>

          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/"class="go-back">Go Back</a>`;
}

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);

function changeTheme() {
  let body = document.querySelector("body");

  body.classList.toggle("dark");
}

let button = document.querySelector(".dark-theme");
button.addEventListener("click", changeTheme);
