let menuIcon = document.getElementById("menu-button");
let mainCont = document.getElementById("main-cont");
let closeButton = document.getElementById("close-icon");
menuIcon.addEventListener("click", ()=>{
 mainCont.style.display = "flex";
 mainCont.style.display = "flex";
 closeButton.style.display ="inline";
})
closeButton.addEventListener("click", ()=>{
    mainCont.style.display = "none";
 mainCont.style.display = "none";
 closeButton.style.display ="none";
})