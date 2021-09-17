using System;

namespace csharp
{
    class Lion : Animal
    {
        public Lion(double height, double weight) : base(height, weight){}

        public void attack() 
        {
            this.Weight -= 2;
            this.eat();
        }
        public void roar()
        {
            Console.WriteLine("Roar!");
        }
    }
}