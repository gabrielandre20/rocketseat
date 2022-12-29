/* Sistema de gastos Familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [1500.00, 2400.00, 1800.00],
    expenses: [200, 100, 1200.00, 500]
}

function sum (array) {
    let total = 0;

    for (let value of array) {
        total +=value
    }

    return total
}

function calculateBalance () {
   const calculateIncomes = sum (family.incomes)
   const calculateExpenses = sum (family.expenses)

   const totalFamily = calculateIncomes - calculateExpenses

   const itsOk = totalFamily >= 0

   let balanceText = 'Negativo'

   if (itsOk) {
        balanceText = 'Positivo'
   } 

   console.log(`Seu saldo é ${balanceText}, com o valor de ${totalFamily.toFixed(2)} reais.`)

}

calculateBalance()

