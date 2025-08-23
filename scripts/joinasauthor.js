 let form=document.querySelector("form");

form.addEventListener("submit",function(e){
       e.preventDefault();
       let author=form.fname.value;
       let username=form.username.value;
       let gender=form.gender.value; 
       let email= form.email.value;            
       let bio= form.bio.value;
       let phno= form.phno.value;
       
       let authorinfo={author:author,username:username,gender:gender,email:email,bio:bio,phno:phno,joinedasauthor:false}
       
       let authors=JSON.parse(localStorage.getItem("storedauthors")) || [];
      
       authors.push(authorinfo);
       localStorage.setItem("storedauthors",JSON.stringify(authors));
       alert("You have created your account successfully author! ")
       
       
       document.querySelector("#viewprofile").disabled = false;
})
          
         
            

