const apiKey = "f44dcf10c34cc032926d3078b70470b6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherImg = document.querySelector(".weather_img")


async function deflt(){
    const response = await fetch( apiUrl + "Rajshahi" + `&appid=${apiKey}`)
    var data = await response.json()
    console.log(data)
    console.log(response)

document.querySelector(".city").innerHTML = data.name
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C"
document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
if(data.weather[0].main == "Clouds"){
    weatherImg.src ="images/clouds.png"
}
else if(data.weather[0].main == "Clear"){
    weatherImg.src = "images/clear.png"
}
else if(data.weather[0].main == "Rain"){
    weatherImg.src = "images/rain.png"
}
else if(data.weather[0].main == "Drizzle"){
    weatherImg.src = "images/drizzle.png"
}
else if(data.weather[0].main == "Mist"){
    weatherImg.src = "images/mist.png"
}
else if(data.weather[0].main == "Snow"){
    weatherImg.src = "images/snow.png"
}
else if(data.weather[0].main == "Haze"){
    weatherImg.src = "images/haze.png"
}

}

deflt();


async function checkWeather(city) {
    const response = await fetch( apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()
    console.log(data)
    console.log(response)

    if(response.status==404){
     document.querySelector(".err").style.display = "block"
     document.querySelector(".whether").style.display = "none";
     
    }
    else{
        document.querySelector(".city").innerHTML = data.name
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C"
document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"

if(data.weather[0].main == "Clouds"){
    weatherImg.src ="images/clouds.png"
}
else if(data.weather[0].main == "Clear"){
    weatherImg.src = "images/clear.png"
}
else if(data.weather[0].main == "Rain"){
    weatherImg.src = "images/rain.png"
}
else if(data.weather[0].main == "Drizzle"){
    weatherImg.src = "images/drizzle.png"
}
else if(data.weather[0].main == "Mist"){
    weatherImg.src = "images/mist.png"
}
else if(data.weather[0].main == "Snow"){
    weatherImg.src = "images/snow.png"
}
else if(data.weather[0].main == "Haze"){
    weatherImg.src = "images/haze.png"
}


    }



}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
} )



