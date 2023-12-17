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
        console.log( "\nThe array should have at least two elements!" );
        return null;
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
function thisLengthThatValue( num1, num2 ) {
    // Check if they're the same value
    if ( num1 === num2) {
        console.log( "\nJinx!" );
        return null;
    }
    
    let newArr = [];
    for ( let idx = 0; idx < num1; idx++ ) {
        newArr.push(num2);
    }
    return newArr;
}
const arrExample = thisLengthThatValue(4,6);
console.log(arrExample);

const arrExample2 = thisLengthThatValue(4,4);
console.log(arrExample2);


// * Fit the First Value
function fitFirstValue( arr ) {
    // if  value at arr[0] > arr.length:
    if ( arr[0] > arr.length ) {
        console.log("Too big!");
    } else if ( arr[0] < arr.length ) {
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
}
const arrExample3 = [2, 4, 6, 8, 10];
fitFirstValue(arrExample3);

const arrExample4 = [11, 9, 7, 5, 3, 1];
fitFirstValue(arrExample4);

const arrExample5 = [4, 16, 32, 64];
fitFirstValue(arrExample5);


// * Farenheit to Celsius
function farenheitToCelsius( fDegrees ) {
    let celsiusTemp = Math.round((fDegrees - 32) * 5/9);
    return celsiusTemp;
}
const fTemp1 = 98.8;
console.log(farenheitToCelsius(fTemp1) + "˚C");
const fTemp2 = 63.6;
console.log(farenheitToCelsius(fTemp2) + "˚C");


// * Celsius to Farenheit
function celsiusToFarenheit( cDegrees ) {
    let farenheitTemp = Math.round((cDegrees + 9/5) + 32);
    return farenheitTemp;
}
const cTemp1 = 27;
console.log(celsiusToFarenheit(cTemp1) + "˚F");
const cTemp2 = 8;
console.log(celsiusToFarenheit(cTemp2) + "˚F");

// * Equate Farenheit with Celsius
function equateFarenheitCelsius() {
    for ( let celsius = 200; celsius >= -100; celsius-- ) {
        const fahrenheit = ( celsius * 9/5 ) + 32;
        
        // Check if Farenheit and Celsius values are equal
        // Return the first matching Celsius value
    }
}
