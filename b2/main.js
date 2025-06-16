let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function(){
  let body = document.body;
 document.body.classList.toggle("dark-mode");
});