let form=document.querySelector("form");

form.addEventListener("submit",function(e){
       e.preventDefault();
       let authorname=form.fname.value;
       let username=form.username.value;
       let gender=form.gender.value; 
       let email= form.email.value;
       let bio= form.bio.value;
       let phno= form.phno.value;
       
       let authorinfo={authorname:authorname,username:username,gender:gender,email:email,bio:bio,phno:phno}
       
       let authors=JSON.parse(localStorage.getItem("storedauthors")) || [];
       authors.push(authorinfo);

       localStorage.setItem("storedauthors",JSON.stringify(authors));
       
       document.querySelector("#viewprofile").disabled = false;
})
          
         
            
