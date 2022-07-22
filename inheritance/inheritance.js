/**JavaScript classes introduced in ECMAScript 2015 are 
 * primarily syntactical sugar over JavaScript's existing prototype-based inheritance*/

//Inheritance using Class which is a syntactic sugar in the javascript unlike the other programming language
//Parent class
class PersonClass {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends PersonClass {

}

let student1 = new Student('Arijeet');
student1.greet(); //Output : Hello Arijeet



//Same using function protypical inheritance
function Person(name){
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
}

let student2 = new Person("Arijeet");
console.log(student2)
student2.greet(); //Output : Hello Arijeet