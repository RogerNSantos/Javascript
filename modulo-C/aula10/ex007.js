function somar(){
    var num1 = window.document.getElementById ('numb1')
    var num2 = window.document.querySelector ('input#numb2')
    var res = window.document.getElementById ('res')
    var numb1 = Number(num1.value)
    var numb2 = Number(num2.value)
    var s = numb1 + numb2
    res.innerHTML = `A soma entre ${numb1} e ${numb2} é = ${s}`

}