var word = window.document.getElementsByName('word')
var but = window.document.getElementById('but')

but.addEventListener('mouseenter', mousein)
but.addEventListener('mouseout', mout)
but.addEventListener('click', mclick)

function mousein() {
    but.style.background = 'rgb(140, 67, 67)'
}

function mout() {
    but.style.background = 'rgb(228, 0, 0)'
}

function mclick() {
    var word1 = window.document.querySelector('input#word')
    var leng = window.document.querySelector('div#length')
    if (word1.value <= 0 || word1.value > 0) {
        alert('[ERRO]Números não são aceitos!')
    } else {
        leng.innerHTML = `${word1.value.length}`
    }
}