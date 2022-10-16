const Person = require('./person')
const Alumn = require('./alumn')

const maria = new Alumn("MAria", 30, "A")
console.log(maria)
maria.greetings()

const jose = new Person("jose", 30)
jose.greetings()
