let string = 'madam';
function reverseString(string) {
    let newString = '';
    console.log(string);
    for (let i = string.length - 1; i >= 0; i--) {

        newString = newString + string[i];


    }
    if (newString === string) {
        return 'palindrome'
    }
    else {
        return 'false'
    };
}
let result = reverseString(string);
console.log(result);

// palindrome with while loop

let string2 = 'yoo';
function palindrome(str) {
    let newStr = ' ';
    let a = 0;
    let b = str.length - 1;
    while (a < b) {
        if (str[a] === str[b]) {
            a++;
            b--;
        }
        else {
            return false
        }

    }
    return true

}
console.log(palindrome(string2));