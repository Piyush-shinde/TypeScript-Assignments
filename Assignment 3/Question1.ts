class Arithmetic {
    Number1: number;
    Number2: number;
  
    constructor(Number1: number, Number2: number) {
      this.Number1 = Number1;
      this.Number2 = Number2;
    }
  
    Addition(): number {
      return this.Number1 + this.Number2;
    }
  
    Subtraction(): number {
      return this.Number1 - this.Number2;
    }
  
    Multiplication(): number {
      return this.Number1 * this.Number2;
    }
  
    Division(): number {
      return this.Number1 / this.Number2;
    }
  }
  
  // Create objects and call methods
  const obj1 = new Arithmetic(10, 5);
  const obj2 = new Arithmetic(20, 3);
  
  console.log("Addition obj1:", obj1.Addition());
  console.log("Subtraction obj1:", obj1.Subtraction());
  console.log("Multiplication obj1:", obj1.Multiplication());
  console.log("Division obj1:", obj1.Division());
  
  console.log("Addition obj2:", obj2.Addition());
  console.log("Subtraction obj2:", obj2.Subtraction());
  console.log("Multiplication obj2:", obj2.Multiplication());
  console.log("Division obj2:", obj2.Division());
  