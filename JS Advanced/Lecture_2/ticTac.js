function ticTac(input) {

    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]];

    let isfirstPlayer = true;

    for (let line of input) {
        let [row, col] = line.split(' ');

        if (dashboard[row][col]) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        let marker = isfirstPlayer ? 'X' : 'O';
        
        dashboard[row][col] = marker;

        if (checkWin(dashboard, marker)) {
            console.log(`Player ${marker} wins!`);
            print(dashboard);
            return;
        }

        if (!checkFreeSpace(dashboard)) {
            console.log('The game ended! Nobody wins :(');
            print(dashboard);
            return;
        }

        isfirstPlayer = !isfirstPlayer;
    }

    function print(dashboard){
        dashboard.forEach(row => console.log(row.join('\t')));
    }


    function checkWin(dashboard, marker) {
        for (let i = 0; i < dashboard.length; i++) {
            if (dashboard[i][0] === marker &&
                dashboard[i][1] === marker &&
                dashboard[i][2] === marker) {
                return true;
            } else if (dashboard[0][i] === marker &&
                dashboard[1][i] === marker &&
                dashboard[2][i] === marker) {
                return true;
            } else if (dashboard[0][0] === marker &&
                dashboard[1][1] === marker &&
                dashboard[2][2] === marker) {
                return true;
            } else if (dashboard[0][2] === marker &&
                dashboard[1][1] === marker &&
                dashboard[2][0] === marker) {
                return true;
            }
        }
        return false;
    }

    function checkFreeSpace(dashboard) {
        for (let i = 0; i < dashboard.length; i++) {
            for (let j = 0; j < dashboard[i].length; j++) {
                if (!dashboard[i][j]) {
                    return true;
                }
            }    
        }
        return false;
    }
}

ticTac(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 1",
        "1 2",
        "2 2",
        "2 1",
        "0 0"]
)

