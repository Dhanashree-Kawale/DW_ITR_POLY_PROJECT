document.addEventListener("DOMContentLoaded", () => {


let booktoview = JSON.parse(localStorage.getItem("booktoview"));

    if (booktoview) {
      
      let section=document.querySelector("section");
      
  section.innerHTML=`<div class="main-container">
  <div class="view-card" style="padding: 30px;
        border-radius: 6px;
        box-shadow: 0px 0px 4px 1px rgb(161, 160, 160);
        width: 96%;
        display: flex;
        gap: 30px;
        justify-content: center;
        margin-bottom: 30px;">
    <div class="book-cover">
      <img src="${booktoview.cover}" alt="">
    </div>
    <div class="book-details">
      <div class="book-title"><h3>${booktoview .btitle}</h3></div>
      <div class="book-info">
        <p><b>Author:</b>${booktoview.author} </p>
        <p><b>Genre:</b>${booktoview.genre}</p>
        <p><b>Language:</b>English</p>
        <p><b>Status:</b>Completed</p>
      </div>

      <div class="summery">
        <p>${booktoview.synopsis}</p>
      </div>

      <div class="stats1" style="font-weight: 800;"> 
        <span>4.2M<br><p style="font-weight: 400;"><i class="fa-solid fa-star" style="color:#d91656; font-size:7px;"></i> Rating</p></span>
        <span>2.3K<br><p style="font-weight: 400;"><i class="fa-solid fa-eye" style="font-size:7px; color:#d91656;"></i> Reads</p></span>
        <span>4.1K<br><p style="font-weight: 400;"><i class="fa-solid fa-thumbs-up" style="color:#d91656; font-size:8px;"></i> Likes</p></span>
      </div>

      <div class="read-btn-main">
        <button class="read-btn" id="read-btn" >Start Reading</button>
        <button class="read-btn"><i class="fa-solid fa-gift" style="color: white; font-size: 10px;"></i> Support Author</button>
        <button class="read-btn" id="addtolibrary" >+</button>
        </div>
    </div>
  </div>
</div>

<div class="story">
  <div class="story-title">
    <h3 style="text-align: center;">${booktoview.btitle}</h3>
    <button style="border:none; background:none; cursor:pointer; font-size:12px;" >
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
  <p class="sub-p">${booktoview.story}</p>
</div>
`
    } else {
      document.querySelector(".book-details").innerHTML = "<p>No book selected.</p>";
    }

let readbtn=document.querySelector("#read-btn");
let story=document.querySelector(".story");
let close=document.querySelector(".story-title button")


readbtn.addEventListener("click",function(){
    story.style.display = "block";
})

close.addEventListener("click",function(){
    story.style.display = "none";
})


let addtolibrary = document.querySelector("#addtolibrary")
addtolibrary.addEventListener("click",function(){
  let index=JSON.parse(localStorage.getItem("indexofbooktoaddinlibrary"));
  console.log(index);
  
  addtolibrarybook(index);
})
   

      function addtolibrarybook(index){
     let librarybooks =JSON.parse(localStorage.getItem("librarybooks")) || [];
      let books=JSON.parse(localStorage.getItem("books"))
      console.log(books);
      
     let booktobeadded=books[index];

     let exists = librarybooks.some(book=> book.btitle === booktobeadded.btitle);
     if(!exists) {
      librarybooks.push(booktobeadded);

      localStorage.setItem("librarybooks",JSON.stringify(librarybooks));
       alert("book added to library!")
     }else{
        alert("book already present in your library!")
     }

      }
})