/*

prototype-based lenguage
prototype chain
__proto__

*/

/*
    Type conversion (typecasting) vs Type Coersion
        . Alteração de um tipo de dado para outro

*/

console.log('9' + 5) //Concatenação com Type Coersion
console.log(Number('9') + 5) // Type Conversion 
console.log('Fim do exercício')

//Transformar string em número e número em string
/*
let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))*/

//Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

/*
let word = 'Paralelepipedo'
console.log(word.length)
let number = 1234
console.log(String(number).length)
console.log('Fim do Exercício 2')
*/
//Transformar um número quebrado com 2 casas decimais e trocar o ponto por vírgula

let num = 433244.5589
console.log(num.toFixed(2).replace(".", ","))
console.log('Fim do exercício 3')

//Transformar letras minúsculas em maiúsculas e vice-versa
let word = 'Programar é muito bacana!'
console.log(word.toLocaleUpperCase())
console.log(word.toLocaleLowerCase())
console.log('Fim do exercício 4')


//Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let text = 'Aprendendo JavaScript com Curso Online!'
let myArray = text.split(' ')
let textWithUnderline = myArray.join('_')
console.log(textWithUnderline)
console.log('FIM DO EXERCÍCIO 5')

//Encontrar Palavra em uma frase ou texto

let phrase = 'Eu quero vivero amor!'
console.log(phrase.includes('amor'))
console.log('Fim do Exercício 6')

//Criar Array com construtor

let array1 = new Array('a', 'b', 'c') 
console.log(array1)
console.log('FIM DO EXERCÍCIO 7')
//Contar elementos de array

console.log(['a', 'b', 'c'].length)
console.log('FIM DO EXERCICIO 8')

//Transformar uma cadeia de caracteres em elementos de um array

let palavra = 'manipulação'
console.log(Array.from(palavra))