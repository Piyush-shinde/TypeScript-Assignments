class Circle
{
    Radius: number;
    PI: number = 3.14;
  
    constructor(Radius: number) 
    {
      this.Radius = Radius;
    }
  
    Area(): number 
    {
      return this.PI * this.Radius * this.Radius;
    }
}

class CircleX extends Circle 
{
    constructor(Radius: number) 
    {
      super(Radius);
    }
  
    Circumference(): number 
    {
      return 2 * this.PI * this.Radius;
    }
  }
  
  // Create objects and call methods
  const obj1 = new CircleX(5);
  const obj2 = new CircleX(7);
  
  console.log("Area of obj1:", obj1.Area());
  console.log("Circumference of obj1:", obj1.Circumference());
  
  console.log("Area of obj2:", obj2.Area());
  console.log("Circumference of obj2:", obj2.Circumference());
  