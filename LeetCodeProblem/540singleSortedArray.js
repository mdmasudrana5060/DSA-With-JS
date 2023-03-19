function singleNonDuplicate(nums) {
    let start = 0;
    let end = nums.length - 1;
    console.log(end);
    let mid;


    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        console.log(mid);
        if (mid % 2 == 0) {

            if (nums[mid] === nums[mid + 1]) {
                start = mid + 1

            }
            else if (nums[mid] === nums[mid - 1]) {
                end = mid - 1

            }
            else {
                return nums[mid]
            }
        }
        else if (mid % 2 != 0) {
            console.log(mid);
            if (nums[mid] === nums[mid + 1]) {
                end = mid - 1
            }
            else if (nums[mid] === nums[mid - 1]) {
                start = mid + 1
            }
            else {
                return nums[mid]
            }
        }




    }
}
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));