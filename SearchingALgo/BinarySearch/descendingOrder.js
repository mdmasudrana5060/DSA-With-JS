let number = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
let target = 500;

function descendingOrder(array, target) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] === target) {
            return [mid, array[mid]];
        }
        else if (array[mid] > target) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }

    }
    return 'not found'

}
console.log(descendingOrder(number, target));