class Person{
    #id;
    constructor(name, age, gender, id){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.#id = id;
    }

    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }

    getter(){
        console.log(this.name);
    }

    calcuateInFiveYears(){
        console.log(this.age + 5);
    }

    set(){
        this.gender = "do not want you to know";
    }

    getId(){
        console.log(this.#id);
    }
}

const people = [];
const person1 = new Person("Alex", 15, "male", 222);
people.push(person1);
person1.greet();
console.log(person1.name, person1.age, person1.gender);
person1.age += 1;
console.log(person1.age);
const person2 = new Person("Nika", 24, "gigachad", 123);
const person3 = new Person("Ana", 20, "female", 314159265);
person1.getter();
person1.calcuateInFiveYears();
person3.set();
console.log(person3.gender);
person1.getId();
