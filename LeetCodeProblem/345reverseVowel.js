let s = 'leetcode';


function reverseString(s) {
    let split = s.split('');
    console.log(split);
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let a = 0;
    let b = split.length - 1;
    console.log(b);
    let temp = ''



    while (a < b) {

        if (!vowels.includes(split[a])) {


            a++

        }
        else if (!vowels.includes(split[b])) {
            b--;
        }
        else if (!vowels.includes(split[a]) && !vowels.includes(split[b])) {
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
console.log(reverseString(s));




//


