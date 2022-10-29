function printElement(array,n){

    n = Number(n);
    let output = [];

    for(let i = 0; i < array.length; i+= n){

       output.push(array[i])
    }

    return output;

}

printElement(['dsa',
'asd', 
'test', 
'tset'], 
2
)