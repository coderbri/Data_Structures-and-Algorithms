// * Countdown
function countdownArray( number ) {
    let newArray = [];
    for ( let i = number; i >= 0; i-- ) {
        newArray.push(i);
    }
    return newArray;
}
const resultArray = countdownArray(8);
console.log(resultArray);
console.log( "Array Length:", resultArray.length );


// * Print and Return
function printAndReturn( num1, num2 ) {
    console.log(num1);
    return num2;
}

printAndReturn(2,4);
console.log(printAndReturn(8,24));


// * First Plus Length
function firstPlusLength( arr ) {
    // Check if the array is not empty and the first value is a number
    if (arr.length > 0 && typeof arr[0] === 'number') {
        return arr[0] + arr.length;
    } else {
        // Handle the case where the first value is not a number
        console.log( "\nThe first value is not a number" );
        return null;
    }
}

const exampleArray1 = [5, 2, 3, 7];
const exampleArray2 = ["what?", 2, 3, 7];
console.log(firstPlusLength(exampleArray1));
console.log(firstPlusLength(exampleArray2));


// * Values Greater than Second
const exampleArray3 = [1, 3, 5, 7, 9, 13];
const exampleArray4 = [4];
function valuesGreaterThanSecond( arr ) {
    if ( arr.length < 2  ) {
        console.log( "\nThe array should have at least two elements" );
        return null; // or handle it accordingly based on your needs
    }
    
    const secondValue = arr[1];
    arr.forEach(value => {
        if ( value > secondValue ) {
            console.log(value);
        }
    });
    
    let valuesCount = arr.filter( value => value > secondValue ).length;
    console.log( "Number of values gerater than second value", valuesCount );
    return `  - Array used: [${arr}]`;
}

console.log(valuesGreaterThanSecond(exampleArray3));
console.log(valuesGreaterThanSecond(exampleArray4));


// * Values Greater than Second, Generalized
function valuesGreaterThan2ndGeneralised( arr ) {
    // Check if the array has at least two elements 
    if ( arr.length < 2  ) {
        console.log( "\n!!! The array should have at least two elements." );
        return null; // or handle it accordingly based on your needs
    }
    // If True, Proceed with function
    const secondValue = arr[1];
    const filteredArray = arr.filter(value => value > secondValue);
    
    console.log( `\nValues greater than the second value: [${filteredArray}].` );
    console.log( `Number of values than the second value: ${filteredArray.length}.` );
}

valuesGreaterThan2ndGeneralised(exampleArray3);
valuesGreaterThan2ndGeneralised(exampleArray4);


// * This Length, That Value

// * Fit the First Value

// * Farenheit to Celsius

// * Celsius to Farenheit