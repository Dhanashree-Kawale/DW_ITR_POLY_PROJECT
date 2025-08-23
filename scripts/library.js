document.addEventListener("DOMContentLoaded", () => {
 let container=document.querySelector(".book-list");
  let librarybooks=JSON.parse(localStorage.getItem("librarybooks")) || [];

  librarybooks.forEach((book,index)=>{
    container.innerHTML+=`
      <div class="book-card" data-index=${index}>
               <img src="${book.cover}" >
               <div class="book-title">${book.btitle}</div>
               <div class="info">
                <span class="category">${book.genre}</span>
                <span class="views">1.2K views</span>
               </div>
               <button class="removefromlibrary" >-</button>
               </div>
    `;
  })

       
  function deleteFromLibrary(index){
    
    librarybooks.splice(index,1);
    localStorage.setItem("librarybooks",JSON.stringify(librarybooks));
    location.reload();
  }

 let removefromlibrary= document.querySelectorAll(".removefromlibrary")

 removefromlibrary.forEach(item => {
  item.addEventListener("click", function(e) {
    e.stopPropagation(); 
    let card = item.closest(".book-card"); 
    let index = card.dataset.index;        
    deleteFromLibrary(index);             
  });
});

  document.querySelector(".edit").addEventListener("click",()=>{
    document.querySelector(".done").style.visibility="visible";
    removefromlibrary.forEach(item => {
    item.style.visibility = "visible";
  });
  })

   document.querySelector(".done").addEventListener("click",function(){
    this.style.visibility="hidden";
    removefromlibrary.forEach(item => {
    item.style.visibility = "hidden";
   })
  })

  
 let librarybook= JSON.parse(localStorage.getItem("librarybooks"))
     let bookcard= document.querySelectorAll(".book-card");
   
     bookcard.forEach((cover,index)=>{
        cover.addEventListener("click",function(){
            alert("event on book added")
           let booktitle= cover.dataset.index;
          let booktoview = librarybook[index];

         localStorage.setItem("booktoview",JSON.stringify(booktoview));
         console.log("storedbook",booktoview);
          window.location.href="byme.html";
         
     })
    
    })
})