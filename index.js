// code your solution here
function isWin (game) {
    return (game.result === 'W');
}

function superbowlWin (games) {
    if (games.find(isWin) === undefined) {
        return undefined;
    }
    else{
        return (games.find(isWin)).year;
    }
}

const q = [{year: '2', result: 'L'}, {year: '1', result: 'L'}];

console.log(superbowlWin(q));
console.log(q[0])