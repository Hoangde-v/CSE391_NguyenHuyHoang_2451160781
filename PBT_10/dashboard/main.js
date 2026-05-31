const refreshBtn = document.getElementById("refreshBtn");
const globalLoading = document.getElementById("globalLoading");
const loadTime = document.getElementById("loadTime");
const widgets = [
  document.getElementById("userWidget"),
  document.getElementById("weatherWidget"),
  document.getElementById("dogWidget"),
];
/* ====================== UI HELPERS ====================== */ function showWidgetLoading() {
  widgets.forEach((widget) => {
    widget.innerHTML = ` <p class="loading"> Loading... </p> `;
  });
}
function renderWidget(index, data) {
  // User API
  if (index === 0) {
    const user = data.results[0];
    widgets[index].innerHTML =
      ` <img src="${user.picture.large}"> <h3>${user.name.first} ${user.name.last}</h3> <p>${user.email}</p> `;
  } // Weather API
  if (index === 1) {
    const weather = data.current_weather;
    widgets[index].innerHTML =
      ` <h3> ${weather.temperature}°C </h3> <p> Wind Speed: ${weather.windspeed} </p> `;
  } // Dog API
  if (index === 2) {
    widgets[index].innerHTML = ` <img src="${data.message}"> `;
  }
}
function renderWidgetError(index, message) {
  widgets[index].innerHTML = ` <p class="error"> ❌ ${message} </p> `;
}
/* ====================== LOAD DASHBOARD ====================== */ async function loadDashboard() {
  const startTime = Date.now();
  globalLoading.style.display = "block";
  showWidgetLoading();
  const results = await Promise.allSettled([
    fetch("https://randomuser.me/api/").then((r) => r.json()),
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current_weather=true",
    ).then((r) => r.json()),
    fetch("https://dog.ceo/api/breeds/image/random").then((r) => r.json()),
  ]);
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      renderWidget(index, result.value);
    } else {
      renderWidgetError(index, result.reason.message);
    }
  });
  const totalTime = Date.now() - startTime;
  loadTime.textContent = `Data loaded in ${totalTime} ms`;
  globalLoading.style.display = "none";
}
/* ====================== REFRESH ====================== */ refreshBtn.addEventListener(
  "click",
  loadDashboard,
);
/* ====================== INIT ====================== */ loadDashboard();
