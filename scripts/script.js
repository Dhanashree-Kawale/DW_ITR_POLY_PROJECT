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
let joinasauthorbtn = document.querySelector("#joinasauthor");
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("isLoggedIn") === "true") {
        if (loginbt) {
            loginbt.disabled = true;
            loginbt.innerHTML="logged in"
            joinasauthorbtn.disabled=true;
        }
    }
});

let logout=document.querySelector(".log-out");

logout.addEventListener("click",()=>{
    localStorage.removeItem("userinfo");
    localStorage.setItem("isLoggedIn","false")
    loginbt.disabled=false;
    loginbt.innerHTML="login";
})
joinasauthorbtn.addEventListener("click",function(){
if(localStorage.getItem("isLoggedIn")=="false"){
        joinasauthorbtn.disabled = false
        window.location.href = "./joinasauthor.html";
    }
})

sidemenubtn.addEventListener("click",function(){
        openMenu();
})

sidemenuclose.addEventListener("click",function(){
    closeMenu()
})

 function openMenu() {
      sidemenu.classList.add("open");
      overlay.classList.add("active");
    }

    function closeMenu() {
      sidemenu.classList.remove("open");
      overlay.classList.remove("active");
    }



    
let books = JSON.parse(localStorage.getItem("books")) || [];
const container = document.querySelector(".new-arrival-row.trending-row");


if (books.length === 0) {
    container.innerHTML = "<p>No books published yet.</p>";
} else {
    books.forEach((book,index) => {
        container.innerHTML += `
            <div class="card" data-index="${index}">
                <img src="${book.cover}" alt="Book Cover">
                <div class="info">
                <h3 class="btitle">${book.btitle}</h3>
                <div class="smallinfo"> 
                <p class="category">${book.genre}</p>
                 <p class="views">4.8k views</p>
                </div>
                </div>
            </div>
        `;
    });
}
  
   

     let bookcard= document.querySelectorAll(".card");
     bookcard.forEach((cover,index)=>{
         let indexofbooktoaddinlibrary=index;
        localStorage.setItem("indexofbooktoaddinlibrary",indexofbooktoaddinlibrary)
        cover.addEventListener("click",function(){
            alert("event on book added")
           let booktitle= cover.dataset.index;
          let booktoview = books[index];
          console.log(booktoview);
          

         localStorage.setItem("booktoview",JSON.stringify(booktoview));
         console.log("storedbook",booktoview);
          window.location.href="byme.html";
         
     })
    
    })


 


   