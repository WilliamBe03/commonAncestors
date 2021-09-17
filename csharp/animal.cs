using System;

namespace csharp
{
    class Animal 
    {
        public double Height;
        public double Weight;
        public double Hunger = 0;
        public double Thirst = 0;

        public Animal(double height, double weight) 
        {
            this.Height = height;
            this.Weight = weight;
        }
        public void grow(double amount)
        {
            this.Height += amount;
        }
        public void fatten(double amount)
        {
            this.Weight += amount;
        }
        public void drink()
        {
            this.Thirst -= 10;
        }
        public void eat()
        {
            this.Hunger -= 10;
            this.fatten(3);
        }
        public void run(double distance)
        {
            double weightLost = (distance * 0.2);
            this.fatten(-weightLost);
            this.Hunger += distance * 0.5;
            this.Thirst += distance * 0.5;
        }
    }
}