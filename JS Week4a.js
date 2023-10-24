console.log ("I am inside Week4 A JaveScript.");
var wideScope = 7;
if (wideScope== 7) {
    let localScope = 10;
    console.log("LocalScope inside if-block = " + localScope)
    console.log("wideScope inside if-block =  " + localwide)
}

console.log("LocalScope outside if-block = " + localScope);
console.log("wideScope outside if-block = " + localwide);