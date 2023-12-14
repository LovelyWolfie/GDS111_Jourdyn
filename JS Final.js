
let x;
let z;
let d;

document.getElementById("rollbutton").onclick = function() {

 x = Math.floor(Math.random() *100) + 1;
 y = Math.floor(Math.random() * 100) + 1;
 d = Math.floor(Math.random() * 100) + 1;

 document.getElementById("xlabel").innerHTML = x
 document.getElementById("zlabel").innerHTML = z
 document.getElementById("dlabel").innerHTML = d
}