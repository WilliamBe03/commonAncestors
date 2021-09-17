const Animal = require("./animal");

class Lion extends Animal {
    attack() {
        this.weight -= 2;
        this.eat()
    };
    roar() {
        console.log('Roar!');
    };
};

module.exports = Lion;