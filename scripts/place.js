const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 10;
const windSpeed = 5.2;
function calculateWindChill(temp, wind) {
    return 13.12 + (0.6215 * temp) - (11.37 * wind ** 0.16) + (0.3965 * temp * wind ** 0.16);
}

let windChill;

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`;
} else {
    windChill = "N/A";
}

console.log(windChill);

document.querySelector("#windChill").textContent = windChill;