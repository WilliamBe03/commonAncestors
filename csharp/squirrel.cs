using System;

namespace csharp
{
    class Squirrel : Animal
    {
        public string Colour;
        public Squirrel(double height, double weight, string colour) : base(height, weight)
        {
            this.Colour = colour;
        }
        public void climb(int distance) 
        {
            double weightLost = (distance * 0.1);
            this.fatten(-weightLost);
            this.Hunger += distance * 0.2;
            this.Thirst += distance *0.2;
        }    
    }
}