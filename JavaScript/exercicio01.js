// 1. Declare uma variável de nome weight

    //var weight

// 2. Que tipo de dado é a variável acima?

    //console.log(typeof weight)

/*3. Declare uma variável e atribua valores para cada um dos dados:
    . name: String
    . age: Number (interger)
    . stars: Number (float)
    .isSubscribed: Boolean


    let name = 'Gabriel'
    let age = 26
    let stars = 3.5
    let isSubscribed = True



/*4. Avariável student abaixo é de que tipo de dados?

4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

4.2 Mostre no console a seguinte mensagem:

    <name> de idade <Age> pesa <weight> kg.

*/

let student = {
    name : 'Gabriel',
    age : 26,
    weight : 67.8
}

console.log(`${student.name} de idade ${student.age} anos, pesa ${student.weight} kg.`)

console.log(typeof student)

/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio */

    let students = []
    //console.log(typeof student)

/* 6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. */

students = [student]

//console.log(students)

/*7. Coloque no console o valor da posição zero do array acima */

//console.log(students[0])

/*8. Crie um novo student e coloque na posição 1 do array students */

let student2 = {
    name : 'Bianca',
    age : 48,
    weight : 75.2
}

students.push(student2)

console.log(students[1])

/* 9. Sem rodar o código, responda qual é a resposta do codigo abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

console.log(a)
var a = 1 */

// a = undefined, pois o java script lê de forma vertical na ordem que está escrito.

console.log(a)
var a = 1





    