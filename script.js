// prototypem nazywamy obiekt ktory posiada kazda funkcja w JS i ten obiekt
// wykorzytywany jest po to aby dodawac wlasciwosci ktore beda dostepne w kazdej instancji tej funkcji.

function Vehicle(name, color) {
    const car = Object.create(Vehicle.prototype);
    car.name = name;
    car.color = color;
    car.engineStatus = 'off';

    return car;
}
Vehicle.prototype.startEngine = function () {
    this.engineStatus = 'on';
    console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
};
Vehicle.prototype.stopEngine = function () {
    this.engineStatus = 'off';
    console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
};


console.log(Vehicle.prototype);

const car1 = Vehicle('Mustang', 'red');
console.log(car1); // bez returna mamy undefined
const car2 = Vehicle('Camaro', 'yellow');
console.log(car2);