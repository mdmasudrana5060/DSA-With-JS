let s = "A man, a plan, a canal: Panama";


function validPalindrome(s) {
    let regex = /[^a-zA-Z0-9]/g;
    let cleanS = s.replace(regex, '').toLowerCase()
    let a = 0;
    let b = cleanS.length - 1
    while (a <= b) {
        if (cleanS[a] === cleanS[b]) {
            a++;
            b--;
        }
        else {
            return false;
        }

    }
    return true;

};

console.log(validPalindrome(s));
