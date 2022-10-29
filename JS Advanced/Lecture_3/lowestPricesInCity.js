function lowerPrices(input){

    let obj = {};

    for(let line of input){
        let [town,product,price] = line.split(' | ');  
        price = Number(price);

        if (obj[product]){
            
            if (price < obj[product].price){
                obj[product].town = town;
                obj[product].price = price;
            } else {
                continue;
            }
        }
        obj[product] = {price,town}
    }

   for (let line of Object.entries(obj)){
    console.log(`${line[0]} -> ${line[1].price} (${line[1].town})`);
   } 
}

lowerPrices(
    ['Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999'])
