let form = document.querySelector("form");
let loginbtn = document.querySelector(".login-btn");
let usernameinput = document.querySelector("#username");
let passwordinput = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    if (e.submitter === loginbtn) {
        e.preventDefault();

        if (localStorage.getItem("isLoggedIn") === "true") {
            loginbtn.disabled = true;
            loginbtn.innerHTML = "Logged in";
            alert("You are already logged in!");
            return;
        }

        let username = usernameinput.value;
        let password = passwordinput.value;

        let logininfo = { username, password };
        localStorage.setItem("userinfo", JSON.stringify(logininfo));
        localStorage.setItem("isLoggedIn", "true");

        loginbtn.disabled = true; 
        loginbtn.innerHTML = "Logged in";

        form.reset();

        window.location.href = "index.html";
    }
});

let gotuserinfo = JSON.parse(localStorage.getItem("userinfo"));
