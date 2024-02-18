function isNumericArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return false;
        }
    }
    return true;
}

function valuesGreaterThanSecond(arr) {
    if (arr.length === 0) {
        return "\n!!! ERROR: There are no values in this array.";
    }
    
    if (isNumericArray(arr) === true) {
        let secondVal = arr[1];
        let count = 0;
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > secondVal) {
                console.log("Value > secondVal: " + arr[i]);
                count++;
            }
            // if not, move on to the next
        }
        
        return `--------------\nValues greater than second value: ${count}\n`;
    } else {
        return "\n!!! ERROR: The array must consist of numbers.";
    }
}

const arr1 = [1, 3, 5, 7, 9, 13];
console.log(valuesGreaterThanSecond(arr1));

const arr2 = [64, 16, 32, 4, 8, 15];
console.log(valuesGreaterThanSecond(arr2));