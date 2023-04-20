let word = "abcd";
let char = "z";
function search(word, char) {
    let j;
    for (let i = 0; i < word.length; i++) {
        if (char == word[i]) {
            j = i;
            break;
        }
    };
    let myArray = word.substring(0, j + 1);
    let remaining = word.slice(j + 1);
    let a = 0;
    let b = myArray.length - 1;
    let newStr = "";
    let temp = '';
    for (let i = myArray.length - 1; i >= 0; i--) {
        newStr = newStr + myArray[i]
    }
    return newStr.concat(remaining)

}
console.log(search(word, char));