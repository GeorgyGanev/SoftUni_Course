function diagonalAttack(input){

    let arr = [];

    input.forEach(el => {
       let numArr = el.split(' ').map(Number);
       arr.push(numArr);
    })

    let firstIndex = 0;
    let lastIndex = arr[0].length - 1;

    let sumL = 0;
    let sumR = 0;

    for (let row = 0; row < arr.length; row++){
            
            sumR += arr[row][firstIndex]
            sumL += arr[row][lastIndex];

            firstIndex++;
            lastIndex--; 
    }

    firstIndex = 0;
    lastIndex = arr[0].length - 1;

    if (sumL === sumR){

        for (let row = 0; row < arr.length; row++){
            let indexR = firstIndex;
            let indexL = lastIndex;

            for (let col = 0; col < arr[row].length; col++){
                if (col !== indexL && col !== indexR){
                    arr[row][col] = sumL;
                }
            }
            firstIndex++;
            lastIndex--;
        }
        printMatrix(arr);
    } else {
        printMatrix(arr);
    }

    function printMatrix(arr){
        arr.forEach(row => console.log(row.join(' ')));
    }
}

diagonalAttack(
['5 3 12 3 1',

'11 4 23 2 5',

'101 12 3 21 10',

'1 4 5 2 2',

'5 22 33 11 1'])

console.log('--------')

diagonalAttack(['1 1 1', '1 1 1', '1 1 0'])