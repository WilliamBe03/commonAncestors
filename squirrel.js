const Animal = require("./animal");

class Squirrel extends Animal {
    constructor(height, weight, colour) {
        super(height, weight);
        this.colour = colour;
    };
    climb(height) {
        let weightLost = (height * 0.1);
        this.fatten(-weightLost);
        this.hunger += height * 0.2;
        this.thirst += height * 0.2;
    };
};

module.exports = Squirrel;