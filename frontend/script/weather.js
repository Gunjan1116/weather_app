let token=sessionStorage.getItem('token');
const baseUrl=`https://silly-fox-tank-top.cyclic.app/`
let cont =document.querySelector(".all_data");
if(token){
    let detail_search=document.querySelector(".search_city form");
    detail_search.addEventListener("submit",(e)=>{
        e.preventDefault();
        let city=document.getElementById("city").value;
        getCurrentWeather(city);
    })
}else{
    alert("Login first!!");
    window.location.href="./login.html";
}

async function getCurrentWeather(city){
    try {
        let res=await fetch(`${baseUrl}/weather/current?q=${city}`);
        let out=await res.json();
        console.log(out);
        displayData(out.data);
    } catch (error) {
        console.log("error while getting current weather data",error);
        alert("error while getting current weather data");
    }
}

function displayData(data){
    cont.innerHTML="";
    cont.innerHTML=`
    <h1>Current Weather Data of ${data.name} for ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</h1>
    <h3>Temperature: ${(data.main.temp-273.15).toFixed(1)} C</h3>
    <h3>Wind Speed: ${data.wind.speed} km/hr</h3>
    <h3>Humidity ${data.main.humidity} %</h3>
    <button id="btn">Save To History</button>
    `;
    let btn=document.getElementById("btn");
    btn.addEventListener("click",()=>{
        let obj={
            cityName:data.name,
            temperature:(data.main.temp-273.15).toFixed(1),
            date:new Date().toLocaleDateString(),
            time:new Date().toLocaleTimeString()
        }
        saveToHistory(obj);
    })
}
async function saveToHistory(obj){
    try {
        let res=await fetch(`${baseUrl}/weather/save`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify(obj)
        })
        if(res.ok){
            let out=await res.json();
            alert(out.msg);
        }
    } catch (error) {
        console.log("error while saving the data",error);
        alert("error while saving the data");
    }
}