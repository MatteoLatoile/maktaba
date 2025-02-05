let input = document.querySelector('#password');
let showBtn = document.querySelector('.oeil');
let minuscule = document.querySelector('#minuscule');
let majuscule = document.querySelector('#majuscule');
let chiffre = document.querySelector('#chiffre');
let lenght = document.querySelector('#lenght');

showBtn.onclick = function(){
    if(input.type === "password"){
    input.type = "text";
    showBtn.classList.add('actives');
    }else{
        input.type = "password"
        showBtn.classList.remove('actives');
    }
}

input.onfocus = function(){
    document.getElementById('message').style.display = "block"
}

input.onblur = function(){
    document.getElementById('message').style.display = "none"
}

input.onkeyup = function(){
    //valider les lettre minuscule
    
    let lowerCaseLetters = /[a-z]/g
    if(input.value.match(lowerCaseLetters)){
        minuscule.classList.remove('invalid');
        minuscule.classList.add('valid');
    }else{
        minuscule.classList.remove('valid');
        minuscule.classList.add('invalid');
    }
    //valider les majuscules
    let upperCaseLetters = /[A-Z]/g
    if(input.value.match(upperCaseLetters)){
        majuscule.classList.remove('invalid');
        majuscule.classList.add('valid');
    }else{
        majuscule.classList.remove('valid');
        majuscule.classList.add('invalid');
    }
    //valide les nombres
    let numberPassword = /[0-9]/g
    if(input.value.match(numberPassword)){
        chiffre.classList.remove('invalid');
        chiffre.classList.add('valid');
    }else{
        chiffre.classList.remove('valid');
        chiffre.classList.add('invalid');
    }

    //valide la longueur
    if(input.value.length >= 8){
        lenght.classList.remove('invalid');
        lenght.classList.add('valid');
    }else{
        lenght.classList.remove('valid');
        lenght.classList.add('invalid');
    }
}