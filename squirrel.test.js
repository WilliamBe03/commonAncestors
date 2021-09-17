const Squirrel = require('./squirrel');

test("Squirrel height, weight and colour is set.", () => {
    const Peter = new Squirrel(40, 10, "Grey");
    expect(Peter.height).toBe(40);
    expect(Peter.weight).toBe(10);
    expect(Peter.colour).toBe("Grey");
});

test("Squirrel can run, eat and drink", () => {
    const Jimmy = new Squirrel(35, 8, "Red");
    Jimmy.run(20);
    expect(Jimmy.weight).toBe(4);
    expect(Jimmy.hunger).toBe(10);
    expect(Jimmy.thirst).toBe(10);
    Jimmy.eat();
    expect(Jimmy.hunger).toBe(0);
    expect(Jimmy.weight).toBe(7);
    Jimmy.drink();
    expect(Jimmy.thirst).toBe(0);
});

test("Squirrel can climb", () => {
    const Tim = new Squirrel(50, 20, "Grey");
    Tim.climb(20);
    expect(Tim.weight).toBe(18);
    expect(Tim.hunger).toBe(4);
    expect(Tim.thirst).toBe(4);
});