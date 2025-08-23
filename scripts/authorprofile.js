document.addEventListener("DOMContentLoaded", () => {

  let authors = JSON.parse(localStorage.getItem("storedauthors") || "[]");


  let author = authors[authors.length - 1];
  console.log(author);
  localStorage.setItem("author",JSON.stringify(author));
  let currauthor=JSON.parse(localStorage.getItem("author"))
   console.log("currauthor"+currauthor);
   

  if (author) {
    document.querySelector("#name").innerHTML = `Name : <b>${author.author}</b>`;
    document.querySelector("#username").innerHTML = `Username : <b>${author.username}</b>`;
    document.querySelector("#gender").innerHTML = `Gender :  <b>${author.gender}</b>`;
    document.querySelector("#email").innerHTML = `Email :  <b> ${author.email}</b>`;
    document.querySelector("#bio").innerHTML = `Bio :   <b> ${author.bio}</b>`;
    document.querySelector("#phno").innerHTML = `Phone :   <b>${author.phno}</b>`;
  } else {
    document.querySelector(".profile").innerHTML = "<p>No profile found.</p>";
  }
   

document.querySelector("#delete-acc").addEventListener("click",function(){
     alert("Deleting your account will make you lose all data!");
     if((authors.length-1)>=0){
    authors.splice((authors.length-1),1);
    localStorage.setItem("storedauthors",JSON.stringify(authors))
    localStorage.removeItem("author");
    localStorage.removeItem("booksbycurrauthor");
     }  

   document.querySelector(".profile").innerHTML = "<p>No profile found.</p>";
})

let books = JSON.parse(localStorage.getItem("books")) || [];
let booksbycurrauthor = books.filter(b => b.author === currauthor.author);
const container = document.getElementById("cards");
localStorage.setItem("bookbycurrentauthor", JSON.stringify(booksbycurrauthor));

container.innerHTML = "";

if (booksbycurrauthor.length === 0) {
    container.innerHTML = "<p>No books published yet.</p>";
} else {
    booksbycurrauthor.forEach((book, index) => {
        container.innerHTML += `
        <div class="book-card" data-index="${index}">
            <img src="${book.cover}" alt="Book Cover">
            <h4 class="btitle">${book.btitle}</h4>
            <div class="bookinfo">  
                <span>${book.genre}</span>
                <button class="addtolibrary">+</button>
            </div>
            <button class="unpublish">-</button>
        </div>
        `;
    });
}


container.addEventListener("click", (e) => {
    const card = e.target.closest(".book-card");
    if (!card) return;
    const index = parseInt(card.dataset.index);

    
    if (e.target.classList.contains("addtolibrary")) {
        e.stopPropagation();
        let librarybooks = JSON.parse(localStorage.getItem("librarybooks")) || [];
        const booktobeadded = booksbycurrauthor[index];

        if (!librarybooks.some(b => b.btitle === booktobeadded.btitle)) {
            librarybooks.push(booktobeadded);
            localStorage.setItem("librarybooks", JSON.stringify(librarybooks));
            alert("Book added to library!");
        } else {
            alert("Book already present in your library!");
        }
        return;
    }

  
    if (e.target.classList.contains("unpublish")) {
        e.stopPropagation();
        const globalIndex = books.findIndex(b => b.btitle === booksbycurrauthor[index].btitle);
        if (globalIndex > -1) {
            books.splice(globalIndex, 1);
            localStorage.setItem("books", JSON.stringify(books));
            location.reload();
        }
        return;
    }

    
    const booktoview = booksbycurrauthor[index];
    localStorage.setItem("booktoview", JSON.stringify(booktoview));
    console.log("storedbook", booktoview);
    window.location.href = "byme.html";
});


const editBtn = document.querySelector(".edit");
const doneBtn = document.querySelector(".done");

editBtn.addEventListener("click", () => {
    doneBtn.style.visibility = "visible";
    container.querySelectorAll(".unpublish").forEach(btn => btn.style.visibility = "visible");
});

doneBtn.addEventListener("click", () => {
    doneBtn.style.visibility = "hidden";
    container.querySelectorAll(".unpublish").forEach(btn => btn.style.visibility = "hidden");
});

});