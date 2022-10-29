function rotateArr(arr, num){

    for (let i = 0; i < num; i++){

        let token = arr.pop();
        arr.unshift(token);

    }
    console.log(arr.join(' '));
}

rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

)