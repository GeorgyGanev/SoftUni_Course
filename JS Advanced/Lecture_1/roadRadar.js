function roadRadar(speed, area){

    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }

    let difference = 0;

    if (speed <= limits[area]){
        console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
    } else if (speed > limits[area]){
        difference = speed - limits[area];
        
        let status = '';

        if (difference <= 20){
            status = 'speeding';
        } else if (difference <= 40){
            status = 'excessive speeding';
        } else if (difference > 40){
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limits[area]} - ${status}`);   
    }
}

roadRadar(200, 'motorway');

console.log('----');

roadRadar(120, 'interstate')