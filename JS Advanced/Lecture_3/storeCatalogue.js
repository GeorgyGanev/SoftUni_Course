function storeCataloque(input){

    let obj = {};

    for (let el of input){
        let [product,price] = el.split(' : ');
        obj[product] = price;
    }

    let sorted = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]));

    let previousChar = '';

    for (let el of sorted){
        
        let currentChar = el[0][0];

        if (currentChar!== previousChar){
            console.log(currentChar);
            console.log(`  ${el[0]}: ${el[1]}`)
            previousChar = currentChar;
        } else {
            console.log(`  ${el[0]}: ${el[1]}`)
        }
    }
}

storeCataloque(
    ['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']
)