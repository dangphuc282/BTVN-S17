let text = document.getElementById("text");
let hideBtn = document.getElementById("hideBtn");
let showBtn = document.getElementById("showBtn");

hideBtn.addEventListener("click", function() {
  text.style.display = "none";
});

showBtn.addEventListener("click", function() {
  text.style.display = "block";
});
