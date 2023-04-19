let nums = [1, 2, 3, 4, 5, 6, 7];

let k = 3;
function rotate(arr, k) {
    let count = 0
    while (count < k) {
        let pop = arr.pop();
        arr.unshift(pop);
        count++
    }

}
let result = rotate(nums, k);
console.log(result);