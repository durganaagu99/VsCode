let buttonElement=document.getElementById("button")
let contentEl=document.getElementById("content")
buttonElement.classList.add("button-style")
buttonElement.addEventListener("click", function(){
    contentEl.textContent="Welcome to Code World!"
    contentEl.classList.add("para")

});