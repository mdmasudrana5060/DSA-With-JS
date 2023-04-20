let word1 = "abcd";
let word2 = "pq";

function mergeAlternately(word1, word2) {

    let newStr = '';
    let a = 0;
    let b = 0;
    for (let i = 0, j = 0; i < word1.length || j < word2.length; i++, j++) {
        if (i >= word1.length) {
            newStr = newStr + word2[j];
        }
        else if (j >= word2.length) {
            newStr = newStr + word1[i];
        }
        else {
            newStr = newStr + word1[i];
            newStr = newStr + word2[j];


        }


    }

    return newStr;
}

console.log(mergeAlternately(word1, word2));