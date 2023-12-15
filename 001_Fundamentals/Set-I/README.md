# Fundamental Algo - Set I

This repository contains a set of algorithms based on fundamental concepts of coding.

### 1. **Setting and Swapping**
   - Type: Basic Variable Assignment
   - Explanation: Initializes two variables (`myNumber` and `myName`) and swaps their values.
```js
let myNumber = 42;
let myName = "Bri";

myNumber = myName;
console.log(myNumber); // Bri

myName = myNumber
console.log(myName) // 42
```


### 2. **Print -52 to 1066**
   - Type: For Loop
   - Explanation: Prints numbers from -52 to 1066 using a `for` loop.
```js
for ( i = -52; i < 1067; i++ ) {
    console.log(i);
}
```

### 3. **Don't Worry, be Happy**
   - Type: For Loop with Function Call
   - Explanation: Uses a `for` loop to call the `beCheerful` function 98 times, which logs "Good morning!".
```js
function beCheerful() {
    console.log( "Good morning!" );
}
for ( i=1; i<=98; i++ ) {
    console.log(`Count: ${i}`);
    beCheerful();
}
```

### 4. **Multiples of Three — But Not All**
   - Type: For Loop with Conditional Skip
   - Explanation: Prints multiples of 3 from -300 to 0, skipping -3 and -6.
```js
for ( let i = -300; i <= 0; i += 3 ) {
    if ( i === -6 || i === -3 ) {
        continue;
    }
    console.log(i);
}
```

### 5. **Printing Integers with While**
   - Type: While Loop
   - Explanation: Prints integers from 2000 to 5280 using a `while` loop.
```js
let thisInteger = 2000;
while ( thisInteger <= 5280 ) {
    console.log(thisInteger);
    thisInteger++;
}
```

### 6. **You Say It's Your Birthday**
   - Type: Conditional Statements
   - Explanation: Checks if the input month and day match a predefined birthday.
```js
let birthMonth = 10;
let birthDay = 29;
function checkBirthdate( month, day ) {
    if ( (day === birthDay && month === birthMonth) || (day === birthMonth && month === birthDay) ) {
        console.log( "How did you know?" );
    } else {
        console.log( "Just another day..." );
    }
}
```

### 7. **Leap Year**
   - Type: Function with Conditional Statements
   - Explanation: Determines if a given year is a leap year based on specified conditions.
```js
function isLeapYear( incomingYear ) {
    if ( (incomingYear % 4 === 0 && incomingYear % 100 !== 0) || (incomingYear % 400 === 0) ) {
        return true;
    } else {
        return false;
    }
}
```

### 8. **Print and Count**
   - Type: For Loop with Counting
   - Explanation: Prints integers divisible by 5 between 512 and 4096 and counts them.
```js
let count = 0;
for ( let i = 512; i <= 4096; i++ ) {
    if ( i % 5 === 0) {
        console.log(i);
        count++;
    }
}
console.log( `Integers divisible by 5: ${count}` );
```

### 9. **Multiples of Six**
   - Type: While Loop
   - Explanation: Prints multiples of 6 up to 60,000 using a `while` loop.
```js
let num = 6;
while ( num <= 60000 ) {
    console.log(num);
    num += 6;
}
```

### 10. **Counting, the Dojo Way**
   - Type: For Loop with Conditional Statements
   - Explanation: Prints numbers from 1 to 100, replacing multiples of 5 with "Coding" and multiples of 10 with "Coding Dojo".
```js
for ( let i = 1; i <= 100; i++ ) {
    if ( i % 10 === 0 ) {
        console.log( "Coding Dojo" );
    } else if ( i % 5 === 0 ) {
        console.log( "Coding" )
    } else {
        console.log(i);
    }
}
```

### 11. **What Do You Know?**
   - Type: Function with Console Logging
   - Explanation: Logs the value of an incoming parameter to the console.
```js
function logIncomingValue( incoming ) {
    console.log(incoming);
}
```

### 12. **Whoa, That Sucker’s Huge…**
   - Type: Mathematical Calculation
   - Explanation: Calculates and prints the sum of odd integers from -300,000 to 300,000 using a mathematical approach.
```js
let sum = 0;
for (let i = -300000; i <= 300000; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log(sum);
```

### 13. **Countdown by Fours**
   - Type: While Loop
   - Explanation: Prints positive numbers starting at 2016, counting down by fours.
```js
let thisNum = 2016;
while (thisNum > 0) {
    console.log(thisNum);
    thisNum -= 4;
}
```

### 14. **Flexible Countdown**
   - Type: For Loop with Conditional Statements
   - Explanation: Prints multiples of a given number from a high number down to a low number.
```js
function flexibleCountdown(lowNum, highNum, mult) {
    for (let i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}
```

### 15. **The Final Countdown**
   - Type: While Loop with Conditional Statements
   - Explanation: Prints multiples of a given number within a range, excluding a specified value.
```js
function finalCountdown(param1, param2, param3, param4) {
    let current = param2;

    while (current <= param3) {
        if (current % param1 === 0 && current !== param4) {
            console.log(current);
        }
        current++;
    }
}
```

---
<p align="right">Completed: 2023年12月15日（金）</p>