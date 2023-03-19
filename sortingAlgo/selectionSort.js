let number = [5, 3, 6, 4, 2, 7, 10, 9, 7, 50, 2, 15, 5];


function sortedArray(number) {
    let temp;
    for (let i = 0; i < number.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < number.length; j++) {
            if (number[j] < number[minIndex]) {
                minIndex = j



            }

        }
        temp = number[i];
        number[i] = number[minIndex];
        number[minIndex] = temp

    }
    return number;

}
console.log(sortedArray(number));
number