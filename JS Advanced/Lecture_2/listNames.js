function listNames(arr){

    let sorted = arr.sort((a,b) => a.localeCompare(b));

    let counter = 1;

    for (let i = 0; i < arr.length; i++){
        console.log(`${counter}.${sorted[i]}`);
        counter++;
    }

}

listNames(["John", "Bob", "Christina", "Ema"])