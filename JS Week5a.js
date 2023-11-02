//Returns random number:
//let num1 = Math.random();
//console.log(num1);

// Returns a random integer from 1 to 11
let x = Math.floor(Math.random() * 11) + 1;
console.log("The number is: " + x);
if (x==7 || x==11) {
console.log("congratulations, you win!");
} else {
console.log("Sorry, you lost. ");
}