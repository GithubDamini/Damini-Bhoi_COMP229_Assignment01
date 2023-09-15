class Vehicle {
    constructor(wheels) {
    this.wheels = wheels;
    }
    toString() {
    return '(' + this.wheels + ')';
    }
    }
    class Car extends Vehicle {
    constructor(color) {
    super(4);
    this.color = color;
    }
    toString() {
    return super.toString() + ' colored: ' + this.color;
    }
    }
    let car = new Car('blue');
    car.toString();
    let car1=new Car('yellow');
    car1.toString();
console.log(car instanceof Car);
console.log(car1 instanceof Car);
console.log(car instanceof Vehicle);
