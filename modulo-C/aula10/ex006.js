var a = window.document.getElementById('area') //Serve para todas as funções
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){    
    a.innerText = 'Você clicou!'
    a.style.background = 'red'
}

function entrar(){
    a.innerText = "Você entrou!"
}

function sair(){
    a.innerText = "Você saiu!"
    a.style.background = "burlywood"
}