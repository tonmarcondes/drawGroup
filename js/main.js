const elemento = document.getElementById('nome')
const botao = document.querySelector('button')


function adiciona() {
    lista.appendChild(li)
    nome = document.getElementById('nome').value
    console.log(nome);
}

function carrega() {
    // nome = 'Wellygton Marcondes'
    texto = document.createTextNode(nome)
    li = document.createElement('li')
    lista = document.getElementById('lista')
        // document.querySelector('h1').innerHTML(nome)

}
const janela = window.addEventListener("load", () => {
    carrega()
})