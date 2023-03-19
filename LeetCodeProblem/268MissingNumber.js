function missingNumber(nums) {
    let sum = 0;
    let sum2 = 0;

    for (let i = 0; i <= nums.length; i++) {
        sum = sum + i;

    }
    for (let i = 0; i < nums.length; i++) {
        sum2 = sum2 + nums[i];

    }
    return sum - sum2;
}

console.log(missingNumber([3, 5, 1, 0, 2]));