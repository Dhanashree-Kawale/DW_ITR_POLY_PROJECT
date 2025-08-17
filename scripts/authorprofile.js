document.addEventListener("DOMContentLoaded", () => {

  let authors = JSON.parse(localStorage.getItem("storedauthors") || "[]");


  let author = authors[authors.length - 1];
  console.log(author);
   

  if (author) {
    document.querySelector("#name").innerHTML = `Name : <b>${author.authorname}</b>`;
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
     }  

   document.querySelector(".profile").innerHTML = "<p>No profile found.</p>";
})
});