let array = [50, 30, 70, 20, 40, 100, 80, 10, 90, 60];
console.log(array.length - 1);

function mergeSort(arr, left, right) {
    if (left >= right) {
        return;
    }
    let mid = Math.floor((left + right) / 2)
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    mergeArray(arr, left, mid, right)
}

function mergeArray(arr, left, mid, right) {

    let array = arr;

    let sortedArray = [];
    for (let i = 0, j = array.length - 1; i < mid; i++, j--) {
        if (arr[i] < arr[j]) {
            sortedArray.push(arr[i])
        }
        else {
            sortedArray.push(arr[j])
        }
        return sortedArray;
    }
}
mergeSort(array, 0, 9)
let result = mergeArray();
console.log(result);