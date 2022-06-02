
// let title = document.getElementsByTagName("h1");

// console.log(title.innerHTML.toUpperCase())


let colors = ['#ff0000', '#00ff00', '#0000ff'];
let random_color = colors[Math.floor(Math.random() * colors.length)];
let card = document.getElementsByClassName('card')
card.addEventListener('mouseenter', e => {
    card.style.border = random_color;
  });
