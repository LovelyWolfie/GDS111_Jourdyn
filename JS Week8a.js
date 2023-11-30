class Player {
    constructor() {
        this.name = "";
        this.level = 0;
    }
    setName(temp) {
        this.name = temp;
    }
    getName() {
    return  this.name;
    }
    setLevel (newlevel) {
    this.level = newlevel;
    }
    getLevel () {
    return this.level;
    }
}
 debugger;
const mario = new Player();
mario.setName("Mario");
mario.setLevel(10);

const luigi = new Player();
luigi.setName("Luigi");
luigi.setLevel(15);

const peach = new Player();
peach.setName("Peach");
peach.setLevel(25);

const arrayOfObjects = [mario, luigi, peach];
console.log(arrayOfObjects[1].getName());