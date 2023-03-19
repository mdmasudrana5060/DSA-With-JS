function validSquare(num) {
    for (let i = 0; i <= num; i++) {
        let square = i * i;
        if (square === num) {
            return true;
        }
        else if (square > num) {
            return false
        }
    }

}
console.log(validSquare(16));