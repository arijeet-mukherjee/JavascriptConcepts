**Inheritance in javaScript**

Inheritance in JavaScript is a very vast concept and there are many methods to implement it. Mainly there are three types of inheritance in JavaScript. They are, ```prototypal```, ```pseudo classical```, and ```functional```.

**1. Prototypal Inheritance**
This type of inheritance in JavaScript adds new properties and methods to the existing object. Prototypal inheritance in JavaScript makes use of prototype object that is object.prototype. It is a method through which an object can inherit the properties as well as the methods of another object. Initially, in order to get and set the [[Prototype]] of the object we used Object.getPrototypeOf and Object.setPrototypeOf. But now we can make use of __proto__.

**2. Pseudo-classical Inheritance**
This inheritance in JavaScript is very similar to the previous one, prototypal inheritance. In Pseudo classical inheritance, it emulates the classical inheritance by using prototypal inheritance. But if you are programming with ES6, then this type of inheritance in JavaScript is not supported. As one can use conventional classes that are using the keyword class. In Pseudo-classical inheritance, we try to create a class with a method that is intended to be called using the new keyword.

**3. Functional Inheritance**
From the name of the inheritance, you understand that this type of inheritance in JavaScript makes use of functions. Functional Inheritance uses an augmenting function to the instance of the object in order to inherit the features of that object.
