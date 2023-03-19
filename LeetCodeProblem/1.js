let nums = [2, 7, 11, 15];
let target = 13;

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]

            }
        }

    }
}
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] + nums[i + 1] == target) {
//             return [i, i + 1]
//         }
//     }
// }
console.log(twoSum(nums, target));


