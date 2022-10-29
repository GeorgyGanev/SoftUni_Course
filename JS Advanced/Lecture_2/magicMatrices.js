function magicMatrices(input) {

    let isMagic = true;
    let previous = 0;

    let initial = input[0];
    for (let k = 0; k < initial.length; k++) {
        previous += initial[k];
    }

    for (let i = 0; i < input.length; i++) {
        let sumH = 0;

        let col = input[i];

        for (let j = 0; j < col.length; j++) {
            sumH += col[j];
        }

        if (sumH !== previous) {
            return !isMagic;
        }
    }


    for (let i = 0; i < input.length; i++) {
        let sumV = 0;

        let initial = 0;

        for (let j = 0; j < input[i].length; j++) {
            sumV += input[i][initial];
            initial++;
        }

        if (sumV !== previous) {
            return !isMagic;
        }
    }
    return isMagic;
}


magicMatrices([
    [4, 5, 6],
    [6, 4, 5],
    [5, 3, 5]]
)