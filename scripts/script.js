let sidemenubtn=document.querySelector(".nav-panel span");
let sidemenuclose=document.querySelector(".side-menu-close i");
let sidemenu=document.querySelector(".side-menu");

sidemenubtn.addEventListener("click",()=>{
    sidemenu.style.visibility="visible";
})

sidemenuclose.addEventListener("click",()=>{
    sidemenu.style.visibility="hidden";
})


let loginbt=document.querySelector("#login-btn");

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("isLoggedIn") === "true") {
        if (loginbt) {
            loginbt.disabled = true;
            loginbt.innerHTML="logged in"
        }
    }
});

let logout=document.querySelector(".log-out");

logout.addEventListener("click",()=>{
    localStorage.removeItem("userinfo");
    loginbt.disabled=false;
    loginbt.innerHTML="login";

})