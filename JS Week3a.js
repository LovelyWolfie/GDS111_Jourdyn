console.log("I am inside Week3a JavaScript file");
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d')
c.front = "30px Arial";
c.fillText("Welcome to my game", 10, 50)