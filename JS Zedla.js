class Player{

constructor(health, weapon, armor,) {
    this.health = health;
    this.weapom = weapon;
    this.armor = armor;
    }
    setHealth(x) {
    this.health = x;
    }
    getHealth() {
    return this.health;
    }
    setWeapon(x) {
    this.weapon = x;   
}
    getWeapon() {
    return this.weapon;
}
    setArmor(x) {
        this.armor = x;
    }
    getArmor() {
        return this.armor;
    }
}

const link = new Player();
link.setHealth(210);
link.setWeapon(110);
link.setArmor(200);
console.log("Link's Stats:");
console.log("Link Health:");
console.log(link.getHealth());
console.log("Link Weapon Stats:");
console.log(link.getWeapon());
console.log("Link Armor Stats:");
console.log(link.getArmor());