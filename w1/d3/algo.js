var age = 10

function checkAge(age) {
    if(age >16) {
        console.log('you can borrow my keys')
    }else{
        console.log('you can borrow my bike')
    }
}

checkAge(age)

checkAge(17)









// Algo #1

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);



// I should bring: sunglass, a coat, and a smile!


// Algo #2

for(var i=10; i>0; i--) {              
    if(i != 2) {
      console.log(i);
    } else {
      console.log("ignition!");
    }
  }
      
  console.log("liftoff!");


//   10, 9, 8, 7, 6, 5, 4, 3, ignition, 1, liftoff!
  

//   Algo #3

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for(var i=0; i<numbers.length; i++){
    if(numbers[i] >= 0) {
        countPositives ++
    }
}
    
console.log("there are " + countPositives + " positive values");


// there are 5 positive values