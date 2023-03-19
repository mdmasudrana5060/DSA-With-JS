function sqrt(num) {


    for (let i = 0; i <= num; i++) {
        let square = i * i;
        if (square === num) {
            return i;
        }
        else if (square > num) {
            return i - 1;
        }
    }










}
console.log(sqrt(25));