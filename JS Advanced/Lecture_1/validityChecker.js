function validity(x1, y1, x2, y2){

    (Math.pow((x1 - 0), 2) + Math.pow((y1 - 0),2))

    let x1toZ = Math.sqrt((Math.pow((x1 - 0), 2) + Math.pow((y1 - 0),2)));
    let x2toZ = Math.sqrt((Math.pow((x2 - 0), 2) + Math.pow((y2 - 0),2)));

    let xToy = Math.sqrt((Math.pow((x1 - x2), 2) + Math.pow((y1 - y2),2)));

    
    if (x1toZ % (Math.floor(x1toZ)) !== 0){
        
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);    
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }

    if (x2toZ % (Math.floor(x2toZ)) !== 0){
       
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);  
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }


    if (xToy % (Math.floor(xToy)) !== 0){
        
        console.log(`{${x1}, ${y1}} to {${x2},${y2}} is invalid`); 
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
}

validity(3, 0, 0, 4)