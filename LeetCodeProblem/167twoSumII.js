let nums = [2, 7, 11, 15];
let target = 22;

function twoSum(nums, target) {
    let a = 0;
    let b = nums.length - 1;

    while (a < b) {
        let sum = nums[a] + nums[b];
        if (sum === target) {
            return [a + 1, b + 1]
        }
        else if (sum > target) {
            b--
        }
        else {
            a++
        }
    }
}
console.log(twoSum(nums, target));