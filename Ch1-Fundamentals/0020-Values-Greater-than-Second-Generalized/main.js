function isNumericArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return false;
        }
    }
    return true;
}

function valuesGreaterThanSecond(arr) {
    if (arr.length <= 1) {
        return "\n!!! ERROR: There are one or fewer values in this array.\n";
    }
    
    if (isNumericArray(arr) === true) {
        let secondVal = arr[1];
        let count = 0;
        let newArr = [];
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > secondVal) {
                console.log(`Value at idx ${i} > secondVal: ${arr[i]}`);
                count++;
                newArr.push(arr[i]);
            } else if ( arr[i] === secondVal ) {
                continue;
            }
            // else console.log(` x  Value at idx ${i} < secondVal: ${arr[i]}`);
        }
        
        if (newArr.length > 0) {
            console.log("---------------------------------\n=== New Array:", newArr);
        } else {
            console.log("There are no values greater than the second value...");
        }
        return `---------------------------------\nValues greater than second value: ${count}\n`;
    } else {
        return "\n!!! ERROR: The array must consist of numbers.\n";
    }
}

const arr1 = [1, 3, 5, 7, 9, 13];
console.log(valuesGreaterThanSecond(arr1));

const arr2 = [64, 16, 32, 4, 8, 15];
console.log(valuesGreaterThanSecond(arr2));

const arr3 = [4];
console.log(valuesGreaterThanSecond(arr3));

const arr4 = [2, 6];
console.log(valuesGreaterThanSecond(arr4));