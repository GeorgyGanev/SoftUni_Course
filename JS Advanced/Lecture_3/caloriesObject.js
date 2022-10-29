function calorie(input){

    let obj = {};
    let key = '';
    let value = '';

    for (let i = 0; i < input.length; i++){
        if (i % 2 === 0){
            key = input[i]
        } else {
            value = Number(input[i]);
        }
        obj[key] = value;
    }
    console.log(obj)
}

calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])