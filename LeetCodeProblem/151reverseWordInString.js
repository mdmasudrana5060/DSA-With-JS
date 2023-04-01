let s = 'the sky is     blue';

function reverseWords(s) {
    let splitString = s.split(' ');
    let reverseString = ''
    for (let i = splitString.length - 1; i >= 0; i--) {
        if (splitString[i] == '') {
            continue;
        }
        else if (reverseString.length > 0) {
            reverseString = reverseString + ' ';

        }


        reverseString = reverseString + splitString[i]
    }





    return reverseString;

}
console.log(reverseWords(s));



// 
