let tries = 3

function randomNumber(){
    let max = 100
    let min = 1
    return Math.floor((Math.random() * (max - min + 1)) + min)
}

function validNumberQuantity(number){
    if(number >= 1 && number <= 100) return true
    return false
}

function pNumber(){
    let number = prompt('Ingrese un numero. tienes ' + tries + ' intentos')
    number = parseInt(number)

    while (!validNumberQuantity(number) || isNaN(number)) {
        number = prompt("Numero no valido. Ingresar nuevo numero");
    }

    return number
}

function victory(number){
    alert(`Acertaste! el numero era: ${number}`)
}

function defeat(number){
    alert(`Perdiste :c el numero era: ${number}`)
}

function numberLessThanRandomNumber() {
    let number = prompt(`El número a encontrar es mayor. Ingresar otro número.\nIntentos restantes: ${tries-=1}`);
    number=parseInt(number);

    while(!validNumberQuantity(number) || isNaN(number)) {
        number = prompt(`Número fuera de rango o inválido. Ingrese nuevamente un numero. Le quedan ${tries} intentos`)
        number = parseInt(number)
    }
    return number

}
function numberGreaterThanRandomNumber() {
    let number = prompt(`El número a encontrar es menor. Ingresar otro número.\nIntentos restantes: ${tries-=1}`);
    number=parseInt(number);

    while(!validNumberQuantity(number) || isNaN(number)) {
        number = prompt(`Número fuera de rango o inválido. Ingrese nuevamente un numero. Le quedan ${tries} intentos`)
        number = parseInt(number)
    }
    return number
}

function game(){
    const findNumber = randomNumber()
    let number = pNumber()
    console.log('findNumber: ', findNumber)
    console.log('number: ', number)
    for(let i = 1; (i <= tries || number === findNumber) ; i++){
        if(number === findNumber) break
        if(number < findNumber) number = numberLessThanRandomNumber(tries - i) //15
        else number = numberGreaterThanRandomNumber(tries - i)
    }
    if(findNumber === number) victory(findNumber)
    else defeat(findNumber)
}

game()