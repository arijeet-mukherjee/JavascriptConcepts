var yourFavFood = function (name) {
    console.log(this);
    console.log(this.getYourFavFood(name) + "\tis your favourite food");
}

var food = {
    name : '',
    getYourFavFood : function (name) {
        this.name = name ;
        return name.toUpperCase();        
    }
}

//yourFavFood("Briyani"); //Function will throw reference error if invoked directly since the fuction name is not in blocked scope of here this is Window

/**
 * call : Call doesnot create a copy of function, rather it calls a method with given 'this' value and arguments provided individually
 * apply : same as Call but it takes in argument as an array
 * bind : Bind created a new function that when called has its this value set to the provided value
 */

//Call Example
yourFavFood.call(food , 'Briyani');

//Apply Example
yourFavFood.apply(food, ['Briyani']);

//Bind Example
let copyFoodMethod = yourFavFood.bind(food);
copyFoodMethod('Briyani');

/**
 * Output Same in all cases here :
 */

//Output : { name: '', getYourFavFood: [Function: getYourFavFood] } , BRIYANI is your favourite food