const apiKey = "8bcd8db1c84e44c9b39235855262909";
const apiUrl = "https://api.weatherapi.com/v1/current.json?lang=es&key=";

const inputCiudad = document.querySelector("#input-ciudad");
const botonBuscar = document.querySelector(".buscador button");
const iconoClima = document.querySelector(".clima-icono");

async function obtenerClima() {
    const ciudad = inputCiudad.value;
    if (ciudad === "") return;

    const respuesta = await fetch(`${apiUrl}${apiKey}&q=${ciudad}`);
    const datos = await respuesta.json();

    console.log(datos);
    
    document.querySelector(".temp").innerHTML = Math.round(datos.current.temp_c) + "°C";
    document.querySelector(".ciudad").innerHTML = datos.location.name;
    document.querySelector(".humedad").innerHTML = datos.current.humidity + "%";
    document.querySelector(".viento").innerHTML = datos.current.wind_kph + " km/h";
    document.querySelector(".clima-texto").innerHTML = datos.current.condition.text;
document.querySelector(".clima-icono").src = "https:" + datos.current.condition.icon;
}