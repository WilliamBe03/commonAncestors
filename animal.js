class Animal {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
        this.hunger = 0;
        this.thirst = 0;
    };
    grow(amount) {
        this.height += amount;
    };
    fatten(amount) {
        this.weight += amount;
    };
    drink() {
        this.thirst -= 10;
    }
    eat() {
        this.hunger -= 10;
        this.fatten(3);
    };
    run(distance) {
        let weightLost = (distance * 0.2);
        this.fatten(-weightLost)
        this.hunger += distance * 0.5;
        this.thirst += distance * 0.5;
    };
};

module.exports = Animal;