const sumAll = function(x,y) {
    if (x > 0 && y > 0 && typeof x === 'number' && typeof y === 'number') {
        let valorx = x;
        let valory = y;
        let total = 0;
        if (x < y) {
            for (let i = valorx; i <= valory; i++) {
                total += i;
            }
            return total;
        } else if (x > y) {
            for (let i = valory; i <= valorx; i++) {
                total += i;
            }
            return total;
        }
    } else {
        return 'ERROR';
}
}
// Do not edit below this line
module.exports = sumAll;
