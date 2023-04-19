class Circle {
    Radius: number;
    PI: number = 3.14;
  
    constructor(Radius: number) {
      this.Radius = Radius;
    }
  
    Area(): number {
      return this.PI * this.Radius * this.Radius;
    }
  }
  
  // Create objects and call method
  const obj1 = new Circle(5);
  const obj2 = new Circle(7);
  
  console.log("Area of obj1:", obj1.Area());
  console.log("Area of obj2:", obj2.Area());
  