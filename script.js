function Vehicle() {
    const car = {};
    car.name = 'Mustang';
    car.color = 'red';
    car.engineStatus = 'off';
    //bedziemy operować na metodach starEngine, stopEngine
    car.startEngine = function () {
        this.engineStatus = 'on';
        console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
    }
    car.stopEngine = function () {
        this.engineStatus = 'off';
        console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
    }
}

console.log(car.engineStatus);
car.stopEngine();