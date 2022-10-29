function sameNums(input){

    let number = input.toString();

    let numL = number.length;
    let sum = 0;
    let isDifferent = false;

    for (let i = 0; i < numL - 1; i++){
        sum += Number(number[i]);
        
        if (number[i] !== number[i+1]){
            isDifferent = true;
        }

        if (i === numL - 2){
            sum += Number(number[i+1]);
        }
    }

    if (isDifferent){
        console.log('false')
    } else {
        console.log('true')
    }

    console.log(sum)

}

sameNums(2222222)