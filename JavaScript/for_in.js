let person = {
    name:'Gabriel',
    age: 30,
    weight: 67.8
}

for (let property in person) {
    console.log(property)
    console.log(person['name'])
    console.log(person.name)
    console.log(person[property])
}
