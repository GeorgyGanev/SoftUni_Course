function addRemote(arr){

    let value = 0;
    let output = [];

    arr.forEach(element => {
        if (element === 'add'){
            value++;
            output.push(value);

        }

        if (element === 'remove'){
            value++;
            output.pop();
        }
    });

    if (output.length === 0){
        return console.log('Empty')
    }

output.forEach(el => console.log(el))

}

addRemote(['add', 
'add', 
'remove', 
'add', 
'add']

)