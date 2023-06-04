import React from "react"
import Axios from "axios"

function App() {

 const [text, newText] = React.useState("")
 const [weatherr, setWeather] = React.useState("")
 const [temp, setTemp] = React.useState("")
 const [humidity, setHumi] = React.useState("")
 const [wind, setWind] = React.useState("")
 const [icon, setIcon] = React.useState("")
 const [feel, setFeel] = React.useState("")
 const [pressure, setPress] = React.useState("")

 


 
 const appid = "a5085bb71055b4060654baa6c2e988d6"
 const url = "weather?q="

 function callApi(){

 if (text.length === 0) {
  setWeather("Invalid input")
 }else{
  Axios.get('https://api.openweathermap.org/data/2.5/'+url+text+"&appid="+appid+"&units=metric").then((response) => {
    const anss = response.data;
    setWeather(anss.weather[0].description)
    setTemp(anss.main.temp + " ℃")
    setHumi("Humidity: "+anss.main.humidity+"%")
    setWind("Wind Speed: "+anss.wind.speed+" km/hr" )
    setIcon(anss.weather[0].icon)
    setFeel("Feels Like: "+anss.main.feels_like+" ℃")
    setPress("Pressure: "+ anss.main.pressure)
  })}
 }   


  function handleChange(eve){
    newText(eve.target.value)
  }


  
    return (
      <div className="content" >
        <input className="int" placeholder="Enter Your City Name" onChange={handleChange} type="text" name={text} id="" />
       <button className="butt" onClick={callApi} type="submit" >Search</button>
       <p className="tem" >{temp} </p>
       <p className="ans" >{weatherr}  </p>
       <p className="hum" > {humidity} </p>
       <p className="win">  {wind}</p>
       <p className="Feel" > {feel}</p>
       <p>{pressure}</p>
       <img src={"https://openweathermap.org/img/wn/"+icon+"@2x.png"} alt="" />
      </div>  
    )
}

export default App;
