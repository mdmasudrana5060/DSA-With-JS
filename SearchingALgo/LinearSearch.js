const array = [23, 5, 4, 6, 7, 85, 9, 2, 56, 47];
let target = 6;

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 56) {
            return `index number ${i} and the value is ${array[i]}`;
        }
    }
    return 'Not found'
}

console.log(linearSearch(array, target));