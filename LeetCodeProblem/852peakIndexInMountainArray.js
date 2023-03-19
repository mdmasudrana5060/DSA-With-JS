function peakOfTheMountian(array) {
    let start = 0;
    let end = array.length - 1;
    let mid;

    if (array.length === 1) {
        return 0;
    }
    else if (array.length === 2) {
        if (array[0] > array[1]) {
            return 0
        }
        else {
            return 1
        }
    }
    else {

        while (start <= end) {
            mid = Math.floor((start + end) / 2);

            if (array[mid] > array[mid - 1] && array[mid] > array[mid + 1]) {
                return mid;
            }
            else if (array[mid] < array[mid + 1]) {
                start = mid + 1;
            }

            else {
                end = mid - 1
            }
        }

    }

}
console.log(peakOfTheMountian([2, 3]));