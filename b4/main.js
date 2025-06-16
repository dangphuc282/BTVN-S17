const squares = document.querySelectorAll('.square');
const body = document.body;

squares.forEach(square => {
  square.addEventListener('mouseover',function () {
    const color = square.getAttribute('data-color');
    body.style.backgroundColor = color;
  });
});
