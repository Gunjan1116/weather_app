let token=sessionStorage.getItem('token');
const baseUrl=`https://silly-fox-tank-top.cyclic.app/`
let cont =document.querySelector(".history_data");
if(token){
    getHistoryWeather();
}else{
    alert("Login first!!");
    window.location.href="./login.html";
}

async function getHistoryWeather(){
    try {
        let res=await fetch(`${baseUrl}/weather/history`,{
            method:"GET",
            headers:{
                "Content-Type":'application/json',
                "Authorization":token
            }
        });
        let out=await res.json();
        console.log(out);
        displayData(out.data);
    } catch (error) {
        console.log("error while getting history weather data",error);
        alert("error while getting history weather data");
    }
}

function displayData(data){
    cont.innerHTML="";
    cont.innerHTML=data.map((el)=>{
        return `
        <h1>Previous Weather Data of ${el.cityName} for ${el.date} at ${el.time}</h1>
        <h3>Temperature: ${el.temperature} C</h3>
        `
    });
}

   