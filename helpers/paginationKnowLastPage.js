function knowLastPage (numero) {
    let numeroEnString=String(numero)
    let numeroEnArray=numeroEnString.split("")
    numeroEnArray.pop()
    let numeroRecortadoEnString=numeroEnArray.join("")
    let numeroRecortado=Number(numeroRecortadoEnString)
    return numeroRecortado+1
}

module.exports=knowLastPage