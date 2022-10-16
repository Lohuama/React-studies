class Alumn extends Person{
    constructor(name, age, turma){
        super(name, age);
        this.turma = turma;
    } 
    greetings(){
        console.log("Olá! Menu nome é ", this.name, "sou da turma ", this.turma)
    } 
}
module.exports = Alumn