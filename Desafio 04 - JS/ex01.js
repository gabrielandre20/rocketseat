/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/



let nota = -8


if (nota >= 90) {
    nota = 'A'
    console.log(nota)
} else if (nota <= 89 && nota >= 80) {
    nota = 'B'
    console.log(nota)
} else if (nota <= 79 && nota >= 70 ) {
    nota = 'C'
    console.log(nota)
} else if (nota <= 69 && nota >= 60) {
    nota = 'D'
    console.log(nota)
} else if (nota < 60 && nota >= 1) {
    nota = 'F'
    console.log(nota)
} else {
    console.log('Nota Inválida')
}



