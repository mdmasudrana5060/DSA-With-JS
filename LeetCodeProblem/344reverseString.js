let s = ["H", "a", "n", "n", "a", "h"]
function reverseString(s) {
    let a = 0;
    let b = s.length - 1;
    let temp
    while (a < b) {
        temp = s[a];
        s[a] = s[b];
        s[b] = temp;
        a++;
        b--;

    }
    return s;
}
console.log(reverseString(s));