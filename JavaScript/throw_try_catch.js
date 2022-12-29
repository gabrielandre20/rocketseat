// Throw

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é necessário'
    }

    console.log(name)
}

//try e catch

try {
    sayMyName('Gabriel')
} catch (e) {
    console.log(e)
}

console.log('Após try/catch')