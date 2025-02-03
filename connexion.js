let input = document.querySelector('#password');
let showBtn = document.querySelector('.oeil');

showBtn.onclick = function(){
    if(input.type === "password"){
    input.type = "text";
    showBtn.classList.add('actives');
    }else{
        input.type = "password"
        showBtn.classList.remove('actives');
    }
}