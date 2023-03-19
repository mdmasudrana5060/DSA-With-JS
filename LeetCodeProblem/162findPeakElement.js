function findPeakElement(array) {
    let start = 0;
    let end = array.length - 1;
    let mid;


    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (array[mid] < array[mid + 1]) {
            start = mid + 1
        }
        else if (array[mid] < array[mid - 1]) {
            end = mid - 1
        }
        else if (array[mid] > array[mid + 1] && array[mid] > array[mid - 1]) {
            return mid
        }
        else if (array[mid] == array[0]) {
            return mid
        }
        else if (array[mid] === array[end]) {
            return mid
        }




    }
}
console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement([6, 5, 4, 3, 2, 3, 2]));
console.log(findPeakElement([1, 2, 3]));
console.log(findPeakElement([1, 3, 2]));
console.log(findPeakElement([1]));
console.log(findPeakElement([1, 2]));
console.log(findPeakElement([2, 1]));

