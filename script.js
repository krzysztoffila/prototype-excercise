const vehicleActions = {
    startEngine() {
        this.engineStatus = 'on';
        console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
    },
    stopEngine() {
        this.engineStatus = 'off';
        console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
    }
}

function Vehicle(name, color) {
    const car = {};
    car.name = name;
    car.color = color;
    car.engineStatus = 'off';

    return car;
}
const car1 = Vehicle('Mustang', 'red');
console.log(car1); // bez returna mamy undefined
const car2 = Vehicle('Camaro', 'yellow');
console.log(car2);