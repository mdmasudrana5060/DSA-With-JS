let number = [5, 3, 6, 4, 2, 7, 10, 9, 7, 50, 2, 15, 5];


function sortedArray(number) {
    let temp;
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            if (number[i] > number[j]) {
                temp = number[j];
                number[j] = number[i];
                number[i] = temp;


            }

        }
    }
    return number;

}
console.log(sortedArray(number));