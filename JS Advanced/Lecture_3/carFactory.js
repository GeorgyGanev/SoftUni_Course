function carFactory(input){

    let car = {};

    let engineTypes = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 }
    }

    car.model = input.model;

    if (input.power <= 90){
        car.engine = engineTypes['Small engine'];
    } else if (input.power <= 120){
        car.engine = engineTypes['Normal engine'];
    } else {
        car.engine = engineTypes['Monster engine'];
    }
    
    car.carriage = {
        type: input.carriage,
        color: input.color
    }

    let size = input.wheelsize % 2 === 0 ? input.wheelsize - 1 : input.wheelsize;

    let wheels = new Array(4).fill(size);

    car.wheels = wheels;
    
return car;
}

carFactory(
{ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })