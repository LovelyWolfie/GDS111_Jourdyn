console.log("I am inside Math.floor.");

console.log("<<<Main Menu>>>");
console.log("               ");
console.log("<1> Instructons");
console.log("<2> play game  ");
console.log("<3> Quit game  ");
console.log("               ");
console.log("Select a number: ");

var b =Number(prompt("The any value: "));
car g =Number(prompt("Enter another value"));
var difference= 100;

if (b > g) {
difference = b - g;   
} else {
difference = g - b;
}
console.log("The difference = " + difference);
