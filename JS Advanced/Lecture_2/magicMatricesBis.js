function magicMatricesBis(arr){

    for (let i = 0; i < arr.length - 1; i++){
        let currentRowSum = arr[i].reduce((acc,curr) => acc + curr);
        let nextRowSum = arr[i+1].reduce((acc,curr) => acc + curr);

        let currentColSum = 0;
        let nextColSum = 0;

        for (let j = 0; j < arr.length; j++){
            currentColSum += arr[i][j];
            nextColSum += arr[i+1][j];
        }

        if (currentColSum !== nextColSum || currentRowSum !== nextRowSum){
            return false;
        }
    }

    return true;
}

console.log(magicMatricesBis([
    [4, 5, 6],
    [6, 4, 5],
    [5, 5, 5]]
))