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
    var a = ingredients.crustType[Math.floor(Math.random()*ingredients.crustType.length)];
    var b = ingredients.sauceType[Math.floor(Math.random()*ingredients.sauceType.length)];
    var c = ingredients.cheese[Math.floor(Math.random()*ingredients.cheese.length)];
    var d = ingredients.toppings[Math.floor(Math.random()*ingredients.toppings.length)];

    pizzaOven(a, b, c, d);
}

console.log(randomPizza());

    var a = ingredients.crustType[Math.floor(Math.random()*ingredients.crustType.length)];
    var b = ingredients.sauceType[Math.floor(Math.random()*ingredients.sauceType.length)];
    var c = ingredients.cheese[Math.floor(Math.random()*ingredients.cheese.length)];
    var d = ingredients.toppings[Math.floor(Math.random()*ingredients.toppings.length)];

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);