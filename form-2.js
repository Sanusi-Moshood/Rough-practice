const name = document.querySelector(".name");
const password = document.querySelector(".password");
const errmsg = document.querySelector(".errmsg");
const passmsg = document.querySelector(".passmsg");
const fpass = document.querySelector("#fpass")




document.getElementById("logbtn").addEventListener("click" ,
        function(event) {
            event.preventDefault();
            validateInput();
        }

)

function validateInput(){

    if(name.value === "" ){
            errmsg.innerHTML = "please type in your user name";
            document.getElementById("redborder").style.borderBottom = "2px solid red"    
            setTimeout (() => errmsg.remove(), 5000);       
    } else {
        document.getElementById("redborder").style.borderBottom = "2px solid rgb(41, 228, 41)"
    }

    if(password.value === "" ){
        fpass.style.color = "red"
        setTimeout (() => fpass.remove(), 5000);  
        passmsg.innerHTML = "please type in your password";
        document.getElementById("red2border").style.borderBottom = "2px solid red" 
        setTimeout (() => passmsg.remove(), 5000);  
        
} else {
    document.getElementById("red2border").style.borderBottom = "2px solid rgb(41, 228, 41)"
}
}