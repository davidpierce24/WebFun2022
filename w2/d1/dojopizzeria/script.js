function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven('deep dish', 'traditional', 'mozzarella', ['pepperoni', 'sausage']);

console.log(p1);

var p2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);

console.log(p2);

var p3 = pizzaOven('hand tossed', 'pesto', ['mozzarella', 'ricotta'], 'chicken');

console.log(p3);

var p4 = pizzaOven('deep dish', 'marinara', ['mozzarella', 'parmesan'], ['pepperoni', 'sausage', 'beef']);

console.log(p4);


var ingredients = {
    'crustType' : ['original', 'hand tossed', 'thin', 'deep dish'],
    'sauceType' : ['marinara', 'pesto', 'olive oil'],
    'cheese' : ['mozarella', 'parmesan', 'feta', 'ricotta'],
    'toppings' : ['sausage', 'chicken', 'pepperoni', 'olives', 'mushrooms', 'onions']
}

function randomPizza() {
    var crustType = ingredients.crustType[Math.floor(Math.random()*crustType.length)];
    var crustType = ingredients.crustType[Math.floor(Math.random()*crustType.length)];
    var crustType = ingredients.crustType[Math.floor(Math.random()*crustType.length)];
    var crustType = ingredients.crustType[Math.floor(Math.random()*crustType.length)];
}

