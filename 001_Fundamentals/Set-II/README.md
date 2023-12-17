# Fundamental Algo - Set II

This repository contains the second set of algorithms based on fundamental concepts of coding.

### Table of Contents

1. [Countdown](#1-countdown)
2. [Print and Return](#2-print-and-return)
3. [First Plus Length](#3-first-plus-length)
4. [Values Greater than Second](#4-values-greater-than-second)
5. [Values Greater than Second, Generalized](#5-values-greater-than-second-generalized)
6. [This Length, That Value](#6-this-length-that-value)
7. [Fit the First Value](#7-fit-the-first-value)
8. [Fahrenheit to Celsius](#8-fahrenheit-to-celsius)
9. [Celsius to Fahrenheit](#9-celsius-to-fahrenheit)
10. [Equate Fahrenheit with Celsius](#10-equate-fahrenheit-with-celsius)

## 1. Countdown

Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

**Type:** Iteration (For Loop)

```javascript
function countdownArray(number) {
    let newArray = [];
    for (let i = number; i >= 0; i--) {
        newArray.push(i);
    }
    return newArray;
}

// Example usage:
const resultArray = countdownArray(8);
console.log(resultArray); // Output: [8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log("Array length:", resultArray.length); // Output: 9
```

## 2. Print and Return

This function will receive an array with two numbers. Print the first value, and return the second.

**Type:** Basic Array Operation

```javascript
function printAndReturn(arr) {
    console.log(arr[0]); // Print the first value
    return arr[1]; // Return the second value
}

// Example usage:
const exampleArray = [5, 8];
console.log(printAndReturn(exampleArray)); // Output: 5
```

## 3. First Plus Length

Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like `false`).

**Type:** Array Operation with Conditionals

```javascript
function firstPlusLength(arr) {
    if (typeof arr[0] !== 'number') {
        return null; // Return null if the first value is not a number
    }
    return arr[0] + arr.length; // Return the sum of the first value and the array's length
}

// Example usage:
const exampleArray = [3, 7, 1];
console.log(firstPlusLength(exampleArray)); // Output: 6
```

## 4. Values Greater than Second

For **[1,3,5,7,9,13],** print values that are greater than its 2nd value. Return how many values this is.

**Type:** Array Filtering and Counting

```javascript
function valuesGreaterThanSecond(arr) {
    if (arr.length < 2) {
        console.log("Array should have at least two elements.");
        return null;
    }

    const secondValue = arr[1];
    const resultArray = arr.filter(value => value > secondValue);

    console.log(resultArray);
    console.log("Number of values greater than the second value:", resultArray.length);
}

// Example usage:
const exampleArray = [1, 3, 5, 7, 9, 13];
valuesGreaterThanSecond(exampleArray);
```

## 5. Values Greater than Second, Generalized

Write a function that accepts *any* array and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

**Type:** Array Filtering and Counting (Generalized)

```javascript
function valuesGreaterThanSecondGeneralized(arr) {
    if (arr.length < 2) {
        console.log("Array should have at least two elements.");
        return null;
    }

    const secondValue = arr[1];
    const resultArray = arr.filter(value => value > secondValue);

    console.log(resultArray);
    console.log("Number of values greater than the second value:", resultArray.length);
}

// Example usage:
const exampleArray1 = [1, 3, 5, 7, 9, 13];
valuesGreaterThanSecondGeneralized(exampleArray1);

const exampleArray2 = [9];
valuesGreaterThanSecondGeneralized(exampleArray2);  // This will print a message about the array having only one element.
```

## 6. This Length, That Value

Given two numbers, return an array of length **num1** with each value **num2.** Print **"Jinx!"** if they are the same.

**Type:** Array Creation with Conditionals

```javascript
function thisLengthThatValue(num1, num2) {
    if (num1 === num2) {
        console.log("Jinx!");
        return null;
    }

    let newArr = [];
    for (let idx = 0; idx < num1; idx++) {
        newArr.push(num2);
    }
    return newArr;
}

// Example usage:
const arrExample = thisLengthThatValue(4, 6);
console.log(arrExample);
```

## 7. Fit the First Value

This function should accept an array. If the value at **[0]** is greater than the array’s length, print **"Too big!"**; if the value at **[0]** is less than the array’s length, print "**Too small!**"; otherwise print **"Just right!"**.

**Type:** Array Operation with Conditionals

```javascript
function fitTheFirstValue(arr) {
    const firstValue = arr[0];
    const arrayLength = arr.length;

    if (firstValue > arrayLength) {
        console.log("Too big!");
    } else if (firstValue < arrayLength) {
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
}

// Example usage:
const exampleArray = [5, 2, 8];
fitTheFirstValue(exampleArray);
```

## 8. Fahrenheit to Celsius

Kelvin wants to convert betwen temperature scales. Create **`fahrenheitToCelsius(fDregrees)`** that accepts a number of degrees in **Fahrenheit** and returns the equivalent temperature as expressed in Celsius degrees. For review, **Fahrenheit = (9/5 * Celsius) + 32.**

**Type:** Temperature Conversion

```javascript
function fahrenheitToCelsius(fDegrees) {
    let celsiusTemp = Math.round((fDegrees - 32) * 5 / 9);
    return celsiusTemp;
}

// Example usage:
const fTemp1 = 98.8;
console.log(fahrenheitToCelsius(fTemp1));

const fTemp2 = 63.6;
console.log(fahrenheitToCelsius(fTemp2));
```

## 9. Celsius to Fahrenheit

Create **`celsiusToFahrenheit(cDegrees)`** that accepts the number of degrees Celsius and returns the equivalent temperature expressed in Fahrenheit degrees.

**Type:** Temperature Conversion

```javascript
function celsiusToFahrenheit(cDegrees) {
    let fahrenheitTemp = (cDegrees * 9 / 5) + 32;
    return fahrenheitTemp;
}

// Example usage:
const cTemp1 = 25;
console.log(celsiusToFahrenheit(cTemp1));
```

## 10. Equate Fahrenheit with Celsius

Do Fahrenheit and Celsius values *equate* at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.

**Type:** Temperature Conversion with Optional Check

```javascript
function equateFahrenheitCelsius() {
    for (let celsius = 200; celsius >= -100; celsius--) {
        const fahrenheit = (celsius * 9 / 5) + 32;

        // Check if Fahrenheit and Celsius values are equal
        if (fahrenheit === celsius) {
            console.log(`At ${celsius}°C, Fahrenheit and Celsius values equate: ${fahrenheit}°F`);
            return celsius; // Return the first matching Celsius value
        }
    }

    console.log("No equating point found within the specified range.");
    return null;
}

// Example usage:
const equatingPoint = equateFahrenheitCelsius();
if (equatingPoint !== null) {
    console.log(`The first equating point is at ${equatingPoint}°C.`);
} else {
    console.log("No equating point found within the specified range.");
}
```

---
<p align="right">Completed: 2023年12月1６日（土）</p>