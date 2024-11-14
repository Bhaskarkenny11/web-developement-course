const person={
    name:'tiger',
    age:25,
    occupation:'Hunting'
}
console.log(person)

const person1=new Object(); //creating a Object with New Object Keyword
person1.name='Hungry Cheetah',
person1.age=26,
person1.occupation='Hunting'

console.log(person1)


function personObj(name,age){     //creating Object with function constructor
    this.name=name
    this.age=age
}

const person4=new personObj('kenny',25)
console.log(person4)


class Personclass{     //creating object with class using constructor
    constructor(name,age){
        this.name=name
        this.age=age
    }
}
const Person5=new Personclass('vikram',40)
console.log(Person5.toString())

//Object.create()

function greet(){
    return 'hello';
}
console.log(greet())