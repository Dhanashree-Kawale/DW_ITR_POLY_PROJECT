
let books = JSON.parse(localStorage.getItem("books")) || [];
const container = document.querySelector(".cards");


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






const searchInput = document.querySelector(".search-box");
  const cards = document.querySelectorAll(".card");

  
  function filterBooks() {
    const searchValue = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const category = card.querySelector(".category").textContent.toLowerCase();
      
      
      if (title.includes(searchValue) || category.includes(searchValue)) {
        card.style.display = "block"; 
      } else {
        card.style.display = "none"; 
      }
    });
  }

  
  searchInput.addEventListener("input", filterBooks);
