function orbit(input){

    let rows = input[0];
    let cols = input[1];
    let startRow = input[2];
    let StartCol = input[3];

    let matrix = [];

    for (let i = 0; i < rows; i++){
        matrix[i] = [];
    }

    for (let row = 0; row < rows; row++){
        for (let col = 0; col < cols; col++){

            matrix[row][col] = Math.max(Math.abs(row - startRow), Math.abs(col - StartCol)) + 1;
        }
    }
    matrix.forEach(row => console.log(row.join(' ')))
}

orbit([4, 4, 0, 0])