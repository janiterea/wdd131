const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;

document.body.style.backgroundColor = ""

const temperature = 10;
const windSpeed = 5;
function calculateWindChill(temp, wind) {
    return 13.12 + (0.6215 * temperature) - (11.37 * windSpeed ** 0.16) + (0.3965 * temperature * windSpeed ** 0.16);
}

let windChill;

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChill = "N/A";
}

console.log(windChill);

document.querySelector("#windChill").textContent = windChill;


