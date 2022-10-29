function cookingNumbers(num, op1, op2, op3, op4, op5) {

    let number = Number(num);

    let parser = {

        chop: (number) => {
            return number / 2
        },

        dice: (number) => {
            return Math.sqrt(number);
        },

        spice: (number) => {
            return number + 1;
        },

        bake: (number) => {
            return number * 3;
        },

        fillet: (number) => {
            return number = number * 0.8;
        }

    }

    number = parser[op1](number);
    console.log(number);

    number = parser[op2](number);
    console.log(number);

    number = parser[op3](number);
    console.log(number);

    number = parser[op4](number);
    console.log(number);

    number = parser[op5](number);
    console.log(number)

}

cookingNumbers('9', 'dice', 'spice', 'chop', 'bake',

    'fillet')