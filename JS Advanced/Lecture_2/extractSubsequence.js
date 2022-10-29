function extract(arr){

let result = [];
let biggest = arr[0];

result = arr.reduce((acc, current) => {
    if (biggest <= current){
        acc.push(current);
        biggest = current;
    }
    return acc;
}, [])

return result;
   
}
extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )