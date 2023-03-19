let number = [10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100];
let target = 70;

function ascendingBinary(array, target) {
    let start = 0;
    let end = array.length - 1;


    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] === target) {

            return [mid, array[mid]];
        }
        else if (array[mid] > target) {
            end = mid - 1;

        }
        else {
            start = mid + 1;
        }
    }
    return 'not found'

}
console.log(ascendingBinary(number, target));