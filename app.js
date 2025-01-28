let sidenav = document.getElementById("mySideNav")
let openBtn = document.getElementById("openBtn")
let closeBtn = document.getElementById("closeBtn")

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav (){
    sidenav.classList.add("active");
}

function closeNav (){
    sidenav.classList.remove("active")
}

const searchBtn = document.querySelector(".searchBtn");
const cancelBtn = document.querySelector(".cancelBtn");
const searchInput = document.querySelector("#input");
const searchBar = document.querySelector(".searchBar");

searchBtn.onclick = () =>{
    searchBar.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
}

cancelBtn.onclick = () =>{
    searchBar.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
}