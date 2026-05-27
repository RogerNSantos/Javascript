function calcular(){
    var pardal = window.document.querySelector('input#velo')
    var res = window.document.querySelector('div#res')
    var velo = Number(pardal.value)
    res.innerHTML = `<p>Sua velocidade atual é <strong> ${velo}Km/h</strong></p>`

    if(velo > 80){
        res.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade!`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
 }