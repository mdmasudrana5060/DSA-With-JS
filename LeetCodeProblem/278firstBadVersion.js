function isBadVersion(num) {
    let start = 0;
    let end = num.length - 1;
    let mid = Math.floor((start + end) / 2);
    console.log(mid);
    while (start < end) {
        if (mid % 2 != 0) {
            end = mid
        }
        else {
            start = mid + 1
        }
        return start
    }


}
console.log(isBadVersion([2, 4, 5, 7, 9, 11, 13, 15, 17]));