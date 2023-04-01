let array = [5, 10, 2, 3, 7, 9, 15];


function reverseArray(array) {
    for (let i = 0, j = array.length - 1; i < Math.floor((array.length - 1) / 2); i++, j--) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp


    }
    return array;
}


console.log(reverseArray(array));
// with while loop
let array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
function reverseArray2(array) {
    let a = 0;
    let b = array.length - 1;
    let temp;
    while (a < b) {
        temp = array[a];
        console.log(temp);

        array[a] = array[b];
        console.log(array[a]);
        array[b] = temp;
        console.log(array[b]);
        a++;
        b--;
    }
    return array;
}
console.log(reverseArray2(array2));