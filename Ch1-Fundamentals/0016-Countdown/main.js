function countdownArray( num ) {
    let resultingArr = [];
    for (let i = num; i >= 0; i--) {
        resultingArr.push(i);
    }
    return resultingArr;
}

let result = countdownArray(5);
console.log(result);
console.log("Length of the array:", result.length);

let result2 = countdownArray(10);
console.log(result2);
console.log("Length of the array:", result2.length);