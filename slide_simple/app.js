// cria um vetor de pesquisa de imagem
let images = ['astronaut.png', 'earth.png', 'mars.png', 'moon.png', 'sun.png'];
let i = 0;

//adiciona imagem inicial ao canvas
let canvas = document.getElementById('canvas');
canvas.style.background = `url(./images/${images[0]})`

//adiciona eventListeners para arrows
let arrows = document.querySelectorAll('.arrow');

arrows.forEach(function(arrow) {
    arrow.addEventListener('click', function(e) {
        if (e.target.id === "left") {
            //verifica if no começo do vetor
            i--;
            if (i < 0) {
                i = images.length - 1;
            }
            canvas.style.background = `url(./images/${images[i]})`;
        } else if (e.target.id === "right") {
            i++;
            if (i >= images.length) {
                i = 0;
            }
            canvas.style.background = `url(./images/${images[i]})`;
        }
    })
});