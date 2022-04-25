console.log(Math.floor(100.98))

var random = Math.random(6);

console.log(Math.floor(random*10))




// algo #1
var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);   
console.log(ceiling);
console.log(random);



// 1
// 4
// any number btwn 0 and 0.999



// algo #2
function d6() {
    var roll = Math.random();
    roll = Math.floor(roll * 6 + 1);
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);



// algo #3
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];


function life(arr) {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
}


life(lifesAnswers);
