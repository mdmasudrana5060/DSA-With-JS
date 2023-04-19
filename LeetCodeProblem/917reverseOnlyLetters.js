
let s = "Test1ng-Leet=code-Q!"
function reverseOnlyLetters(s) {
    let split = s.split('');
    console.log(split);
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let a = 0;
    let b = split.length - 1;
    console.log(b);
    let temp = ''



    while (a < b) {

        if (!letters.includes(split[a])) {


            a++

        }
        else if (!letters.includes(split[b])) {
            b--;
        }
        else if (!letters.includes(split[a]) && !letters.includes(split[b])) {
            a++;
            b--;
        }
        else {
            temp = split[a];
            split[a] = split[b];
            split[b] = temp
            a++;
            b--;
        }




    }

    let joinArray = split.join('');
    return joinArray;
}
console.log(reverseOnlyLetters(s));