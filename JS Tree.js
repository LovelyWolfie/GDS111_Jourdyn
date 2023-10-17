console.log ('I am inside Tree.js');
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
var c = canvas.getContext('2d');
c.fillRect(100, 100, 100, 100);
c.fillRect(200, 100, 200, 100);
c.fillRect(300, 300, 300, 200);
c.fillRect(400, 200, 400, 200);
c.fillRect(500, 100, 300, 600);
c.fillRect(700, 300, 100, 300);
c.fillRect(1000, 100, 200, 800);
c.fillRect(400, 200, 100, 900);
c.fillRect(300, 400, 100, 100);