let string = '';
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