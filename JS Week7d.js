class Player {
    constructor(health, xp) {
    this.health = health;
    this.xp = xp;
    }
    setHealth(x) {
    this.health = x;
    }
    getHealth() {
    return this.health;
    }
    setXP(temp) {
    this.xp = temp;   
}
    getXP() {
    return this.xp;
}
}

//create object mario
const mario = new Player(100, 20);
//Display stats using getters
console.log(mario.getHealth());
console.log(mario.getXP());
//change stats using setters
mario.setHealth(90);
mario.setXP(30);
//Redisplay new stats
console.log(mario.getHealth());
console.log(mario.getXP());