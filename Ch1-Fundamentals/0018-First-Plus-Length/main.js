function sumOfFirstPlusLength(arr) {
    if (arr.length === 0) {
        return "\n!!! ERROR: There are no values in this array.";
    }
    
    if (typeof arr[0] === 'number') {
        return arr[0] + arr.length;
    } else {
        return "\n!!! ERROR: The first value is not a number";
    }
}

const arr1 = sumOfFirstPlusLength([4, 16, 32, 64]);
const arr2 = sumOfFirstPlusLength(["what", 5, 10]);
const arr3 = sumOfFirstPlusLength([]);
const arr4 = sumOfFirstPlusLength([false, 1, 2]);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);