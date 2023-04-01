let s = "God Ding";
function reverseWord(s) {
    let split = s.split(' ');
    let reverseString = '';
    console.log(split);
    for (let i = 0; i < split.length; i++) {
        let word = split[i];
        console.log(word);
        let a = 0;
        let b = word.length - 1;
        let temp = '';
        let reverseWord = ''
        for (let i = word.length - 1; i >= 0; i--) {
            reverseWord = reverseWord + word[i];

        }
        if (reverseString.length > 0) {
            reverseString = reverseString + ' ' + reverseWord
        }
        else {
            reverseString = reverseString + reverseWord
        }




    }
    return reverseString;




}
console.log(reverseWord(s));