let words = ['abc', 'car', 'cool'];
function palindromeInArray(arr) {
    for (i = 0; i <= arr.length - 1; i++) {
        let str = arr[i];
        console.log(str);
        let newStr = ''
        for (let j = str.length - 1; j >= 0; j--) {
            newStr = newStr + str[j];


        }
        if (str === newStr) {
            return str
        }


    }
    return " "
}
console.log(palindromeInArray(words));

let code = "A man, a plan, a canal: Panama";
console.log(code.length);