function heoricInventory(input){

    let inventory = [];

    for (let line of input){
        let [name,level,items] = line.split(' / ');
        
        items = items ? items.split(', ') : [];
        
        let obj = {
            name: name,
            level: Number(level),
            items: items
        }
        inventory.push(obj);
    }

    console.log(JSON.stringify(inventory))

}

heoricInventory(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara'])