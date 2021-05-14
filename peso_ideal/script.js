function checar() {

    var sex = window.document.getElementsByName('sex')
    var alt = window.document.getElementById('altura')
    var genero = ''
    var res = window.document.querySelector('div#res')
    if (alt.value <= 0) {
        alert('[ERRO] Digite a altura')
    } else if (sex[0].checked) {
        genero = 'Masculino'
        res.innerHTML = `Gênero: ${genero}`
        res.innerHTML += `<p>Altura: ${alt.value}</p>`
        res.innerHTML += `<p>Peso ideal: ${72.7*alt.value-58}</p>`

    } else if (sex[1].checked) {
        genero = 'Feminino'
        res.innerHTML = `Gênero: ${genero}`
        res.innerHTML += `<p>Altura: ${alt.value}</p>`
        res.innerHTML += `<p>Peso ideal: ${62.1*alt.value-44.7}</p> `

    }
}