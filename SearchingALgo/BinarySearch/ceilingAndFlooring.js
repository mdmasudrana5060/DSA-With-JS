let number = [10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100];
let target = 11;

function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    let mid;
    mid = Math.floor((start + end) / 2);

    while (start < end) {

        if (array[mid] === target) {
            return mid;

        }
        else if (array[mid] > target) {
            end = mid

        }
        else {
            start = mid + 1
        }
        mid = Math.floor((start + end) / 2);

    }

    return mid;
};


console.log(binarySearch(number, target));
