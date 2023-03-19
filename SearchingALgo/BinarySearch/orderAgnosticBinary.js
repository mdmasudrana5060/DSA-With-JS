// let number = [10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100];
// let target = 70;
let number = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
let target = 500;


function orderAgnosticBinarySearch(array, target) {

    let start = 0;
    let end = array.length - 1;
    let isAscending = array[start] < array[end];

    if (isAscending) {
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
    }
    else {
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

    }
    return 'not found'

}
console.log(orderAgnosticBinarySearch(number, target));


