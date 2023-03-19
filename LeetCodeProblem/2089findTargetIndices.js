var targetIndices = function (array, target) {
    let temp;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp
            }
        }

    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            newArray.push(i);
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] === array[j]) {
                    newArray.push(j);


                }


            }
            return newArray
        }




    }
    return newArray;





};


console.log(targetIndices([1, 2, 5, 2, 3, 2], 2));
