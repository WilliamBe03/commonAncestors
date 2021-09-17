const Lion = require('./lion');

test("Lion weight and height set", () => {
    const Jeff = new Lion(100, 80);
    expect(Jeff.height).toBe(100);
    expect(Jeff.weight).toBe(80);
});

test("Lion can run, eat and drink", () => {
    const Eddy = new Lion(35, 8);
    Eddy.run(20);
    expect(Eddy.weight).toBe(4);
    expect(Eddy.hunger).toBe(10);
    expect(Eddy.thirst).toBe(10);
    Eddy.eat();
    expect(Eddy.hunger).toBe(0);
    expect(Eddy.weight).toBe(7);
    Eddy.drink();
    expect(Eddy.thirst).toBe(0);
});

test("Lion can attack", () => {
    const Moe = new Lion(80, 80);
    Moe.attack();
    expect(Moe.weight).toBe(81);
    expect(Moe.hunger).toBe(-10);
});