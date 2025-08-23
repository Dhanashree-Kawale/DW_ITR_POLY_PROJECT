let books = JSON.parse(localStorage.getItem("books")) || [];
const container = document.getElementById("book-list");


if (books.length === 0) {
    container.innerHTML = "<p>No books published yet.</p>";
} else {
    books.forEach((book,index) => {
        container.innerHTML += `
            <div class="book-card" data-index="${index}">
                <img src="${book.cover}" alt="Book Cover">
                <h4 class="btitle">${book.btitle}</h4>
                <div class="bookinfo">  
                <span>${book.genre}</span>
                <span style="color:#d91656">4.2K views</span>
                </div>
            </div>
        `;
    });
}
  
   

     let bookcard= document.querySelectorAll(".book-card");
   
     bookcard.forEach((cover,index)=>{
        let indexofbooktoaddinlibrary=index;
        localStorage.setItem("indexofbooktoaddinlibrary",indexofbooktoaddinlibrary)
        console.log(indexofbooktoaddinlibrary);
        cover.addEventListener("click",function(){
            alert("event on book added")
           let booktitle= cover.dataset.index;
          let booktoview = books[index];

         localStorage.setItem("booktoview",JSON.stringify(booktoview));
         console.log("storedbook",booktoview);
          window.location.href="byme.html";
         
     })
    
    })
    