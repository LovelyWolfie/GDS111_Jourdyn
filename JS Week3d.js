console.log("Hey, I am inside Week3 D.");

console.log('<<<Main Menu>>>');
console.log("               ");
console.log("<1> Instructions");
console.log("<2> Play Game");
console.log("<3> Quit");
console.log("              ");
console.log("Select a number: ");

var a = Number(prompt("The any value: "));
var b = Number(prompt("Enter another value: "));
var difference = 0;

if ( a > b) {
    difference = a - b;
} else {
    difference = b - a;
}

console.log("The difference = " + difference);