// let menuBtn = document.querySelector('.menu__toggler'); 
// let menu = document.querySelector('menu__items'); 

// menuBtn.addEventListener('click',function () {
//     menuBtn.classList.toggle('active'); 
//     menu.classList.toggle('active'); 
// })



const form = document.forms["form"]; 

form.addEventListener("input",inputHandler); 


function inputHandler ({target}){
    if(target.hasAttribute("data-reg")){
        inputCheck(target); 
    }
}


function inputCheck(el) {
    const inputValue = el.value; 
    const inputReg = el.getAttribute("data-reg"); 
    const reg = new RegExp(inputReg); 

    if(reg.test(inputValue)){
        el.style.border ="1px solid rgb(0,196,0)"
    }
    else{
        el.style.border ="1px solid rgb(255,0,0)"
    }
}