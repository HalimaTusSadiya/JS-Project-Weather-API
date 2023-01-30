

document.querySelector('button').addEventListener('click',function(){
    fetchWeather()
})
document.querySelector('input').addEventListener('keypress',function(event){
    if(event.key === "Enter"){
       fetchWeather();
       event.preventDefault();
    } 
})

function fetchWeather(){
    const getLocation = document.querySelector('input').value
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+getLocation+'&APPID=6ba87d49cb519ef1016b13a4e79a3343')
    .then(res => res.json())
    .then(data => setWeather(data))
    .catch(error => {
        alert(error)
        document.querySelector('input').value = ''
    });
}

function setWeather(data){
    const img = document.querySelector('img')
    const temperature = data.main.temp - 273.15;
    setText('temp',temperature.toFixed(2));
    setText('city',data.name);
    setText('weather-type',data.weather[0].main);
    if(data.weather[0].main == "Clear"){
        img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }
    document.querySelector('input').value = ''
    console.log(data);
}

function setText(id,value){
    document.getElementById(id).innerText = value;
}