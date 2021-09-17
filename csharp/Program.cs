using System;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Squirrel peter = new Squirrel(50, 30, "Grey");
            Console.WriteLine(peter.Weight);
            peter.eat();
            Console.WriteLine(peter.Weight);

            Lion jeff = new Lion(100, 80);
            jeff.roar();
        }
    }
}
