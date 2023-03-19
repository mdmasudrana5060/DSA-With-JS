let array = [5, 10, 2, 3, 7, 9, 15];
let length = array.length - 1;
console.log(length);

for (let i = 0, j = length; i < 3; i++, j--) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp


}
console.log(array);