function townsToJson(input){

    let output = [];

    let titles = input.shift();

    for (let el of input){
        let tokens = el.split(' | ');
        let name = tokens[0].replace('| ','');
        let lat = Number(tokens[1]);
        let long = Number(tokens[2].replace(' |',''));  

        lat = lat.toFixed(2);
        long = long.toFixed(2);

        let obj = {
            'Town': name,
            'Latitude': Number(lat),
            'Longitude': Number(long)
        }
        output.push(obj);
    }   

    console.log(JSON.stringify(output))
}

townsToJson(
['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])