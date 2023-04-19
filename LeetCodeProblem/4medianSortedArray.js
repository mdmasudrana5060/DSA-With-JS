let nums1 = [1, 3]
let nums2 = [2, 4];


function sortedArray(arr1, arr2) {
    let a = 0;
    let b = 0;
    let newArr = [];
    console.log(arr1[a]);
    while (a < arr1.length || b < arr2.length) {
        if (arr1[a] > arr2[b]) {
            newArr.push(arr2[b]);
            b++;
        }
        else if (a >= arr1.length) {
            newArr.push(arr2[b]);
            b++;
        }
        else if (b >= arr2.length) {
            newArr.push(arr1[a]);
            a++;
        }


        else {
            newArr.push(arr1[a])
            a++
        }
    }
    let length = newArr.length;

    let mid;
    let result;



    if (length % 2 == 0) {
        mid = length / 2;
        console.log(newArr[mid]);
        result = (newArr[mid] + newArr[mid - 1]) / 2
        return parseFloat(result)

    }
    else {
        mid = Math.floor(length / 2);

        result = newArr[mid];
        return parseFloat(result)
    }



}

let result = sortedArray(nums1, nums2);

console.log(result);