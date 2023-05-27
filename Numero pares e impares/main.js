let even= [];

function numberIn() {
    let numero = prompt("Ingresar un numero mayor a 0: ");
    numero = parseInt(numero)
    while (numero <=0 || isNaN(numero)) {
        numero = prompt("Numero no valido. Ingresar nuevo numero");
    }
    console.log("Numero ingresado: "+numero)
    return numero
}

function evenNumber(number) {
    for (let i = 1; i <=number; i++) {
        if(i %2 === 0) even.push(i)
    }
    return even
}

function oddNumber(number){
    let odds=[];
    for (let i = 1; i <= number; i++) {
        if (i %2 != 0) odds.push(i)
    }
    return odds
}

function evenNumberSum(){
    let sum =0;
    for (let i = 0; i < even.length; i++) {
        sum += even[i]
    }
    return sum;
}

function numbers() {
    number=numberIn();
    console.log(`Numeros pares: `+evenNumber(number))
    console.log(`Numeros impares: `+oddNumber(number))
    console.log(`Suma de numeros pares: `+evenNumberSum())
}

numbers()