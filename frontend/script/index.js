let baseUrl=`http://localhost:5000`;

let form_register=document.querySelector(".all_detail form");

form_register.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let currentLocation=document.getElementById("location").value;
    let password=document.getElementById("password").value;
    let obj={
       name,
       email,
       currentLocation,
       password
    }
    registerNewUser(obj);
})

async function registerNewUser(obj){
    try {
        let res=await fetch(`${baseUrl}/user/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        let out=await res.json();
        alert(out.msg);
        window.location.href="./login.html"
    } catch (error) {
        console.log("error while registering from frontend");
        alert("error while register")
    }
}