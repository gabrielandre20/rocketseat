//Operador Condicional (Ternário)

// Dependendo da condição, receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

//Exemplos

//Café da manhâ
let pao = true
let queijo = false

const niceBreackfast = pao || queijo ? 'Café Top' : 'Café Ruim'

//console.log(niceBreackfast)

//Maior de 18

let age = 28
const canDrive = age >= 18 ? 'Can Drive' : "Can't Drive"

console.log(canDrive)