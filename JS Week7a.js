// Declaring and defining Car class
class Car {
constructor(name, year) {
this.name = name;
this.year = year;
}
getName() {
return this.name;
}
getYear() {
    return this.year;
}
}

// Daclaring an car objects miata
const miata = new Car("Mazda Miata", 2024);

//Using the object
console.log("My car is " + miata.getName());
console.log("A " + miata.getYear() + " model ");