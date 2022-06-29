const form = document.querySelector('#form');
const Form = document.querySelector('.Form');
const formcontrol = document.querySelectorAll('.form-control');
const idbtn = document.querySelector('#btn');
const classbtn = document.querySelector('.btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const password = document.querySelector('#password');
const confpass = document.querySelector('#confpass');
const namemsg = document.querySelector('.namemsg');

console.log(formcontrol)
//prevent default onclick//
document.getElementById("btn").addEventListener("click", 
    function(event){
        event.preventDefault();
        validateInput();
    }
)

function validateInput (){
        //CHECK USER NAME IS EMPTY
    if( name.value ===""){
        onError(name, "Idiot Type Your Name")
    }else{
        onSuccess(name)
    }

}

function onSuccess(input){
    const parent = input.parentElement;
    const msgele = parent.querySelector(".i");
    msgele.style.visibility="hidden";
    msgele.innerText="";
}

function onError(input, message){
    const parent = input.parentElement;
    const msgele = parent.querySelector(".i");
    msgele.style.visibility="visible";
    msgele.innerText= message;
    setTimeout (() => msgele.remove(), 5000);

}  