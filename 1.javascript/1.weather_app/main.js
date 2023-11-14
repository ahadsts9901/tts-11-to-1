





async function getWeather(event) {

    event.preventDefault()

    let API_KEY = "26ae9a0b27a97215beaa4b5df9aa15fb"

    let cityName = document.querySelector("#search").value

    try {

        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)

        console.log(response.data);

        document.querySelector("#temp").innerText = response.data.main.temp + " °C"
        document.querySelector("#city").innerText = response.data.name
        document.querySelector("#country").innerText = response.data.sys.country

    } catch (error) {
        console.log(error);
    }

}