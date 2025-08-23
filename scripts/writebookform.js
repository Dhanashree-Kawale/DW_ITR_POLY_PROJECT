function previewCover() {
    const file = document.querySelector('#cover-file').files[0];
    const preview = document.querySelector('#cover-preview');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
           
            preview.src =e.target.result; 
               
        }
        reader.readAsDataURL(file);
    } else {
        alert("please choose a file for preview!")
    }
}

let coverData = "";


document.getElementById("cover-file").addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            coverData = e.target.result;
            document.getElementById("cover-preview").src = coverData;
        }
        reader.readAsDataURL(file);
    }
});

function saveBook() {
    let currauthor = JSON.parse(localStorage.getItem("author"))|| {author:"unknown"};
    
    const btitle = document.getElementById("book-title").value;
    const genre = document.getElementById("book-genre").value;
    const synopsis = document.getElementById("synopsis").value;
    const story = document.getElementById("story").value;

    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push({ btitle:btitle, author:currauthor.author,genre, cover: coverData, synopsis,story});

    localStorage.setItem("books", JSON.stringify(books));
    alert("Book Published!");
     window.location.href = "publishedbooks.html"; 
}




