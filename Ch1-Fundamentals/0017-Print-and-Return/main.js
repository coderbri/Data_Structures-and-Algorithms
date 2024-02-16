function printFirstReturnSecond( arr ) {
    if (arr.length < 2) {
        console.log("\n!!! ERROR: Array must have at least 2 values.")
        return undefined
    }
    
    console.log("First Value:", arr[0]);
    return arr[1];
}

let arr = [ 5, 10, 15];
let secondValue = printFirstReturnSecond(arr);
console.log("Second Value:", secondValue)

let arr2 = [ 5 ];
let undefinedTest = printFirstReturnSecond(arr2);