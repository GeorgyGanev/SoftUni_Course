function sortingNums(arr){

    let sorted = arr.sort((a,b) => a-b);

    let result = [];

    while(sorted.length != 0){
        let first = sorted.splice(0,1).join('')
        let last = sorted.splice(sorted.length - 1).join('');
        result.push(first);
        result.push(last);
    }

    return result;
}

sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])