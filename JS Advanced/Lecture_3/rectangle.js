
function rectangle(width,height,color){

    color = color[0].toUpperCase() + color.slice(1);

    const obj = {width,height,color}; 

    obj.calcArea = function() {
        return obj.width * obj.height;
    };

    return obj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

