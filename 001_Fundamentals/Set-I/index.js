// * Setting and Swapping
let myNumber = 42;
let myName = "Bri";

// myNumber = myName;
// console.log(myNumber); // Bri

// myName = myNumber
// console.log(myName) // 42


// * Print -52 to 1066
for ( i = -52; i < 1067; i++ ) {
    console.log(i);
}


// * Don't Worry, be Happy
function beCheerful() {
    console.log( "Good morning!" );
}
for ( i=1; i<=98; i++ ) {
    console.log(`Count: ${i}`);
    beCheerful();
}


// * Multiples of Three — But Not All
for ( let i = -300; i <= 0; i += 3 ) {
    if ( i === -6 || i === -3 ) {
        continue;
    }
    console.log(i);
}


// * Printing Integers with While
let thisInteger = 2000;
while ( thisInteger <= 5280 ) {
    console.log(thisInteger);
    thisInteger++;
}


// * You Say It's Your Birthday
let birthMonth = 10;
let birthDay = 29;
function checkBirthdate( month, day ) {
    if ( (day === birthDay && month === birthMonth) || (day === birthMonth && month === birthDay) ) {
        console.log( "How did you know?" );
    } else {
        console.log( "Just another day..." );
    }
}
checkBirthdate(10,23);
checkBirthdate(3,18);
checkBirthdate(29,10);
checkBirthdate(1,12);


// * Leap Year
function isLeapYear( incomingYear ) {
    if ( (incomingYear % 4 === 0 && incomingYear % 100 !== 0) || (incomingYear % 400 === 0) ) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2014));
console.log(isLeapYear(2000));
console.log(isLeapYear(1935));
console.log(isLeapYear(2028));


// * Print and Count
let count = 0;
for ( let i = 512; i <= 4096; i++ ) {
    if ( i % 5 === 0) {
        console.log(i);
        count++;
    }
}
console.log( `Integers divisible by 5: ${count}` );


// * Multiples of Six
let num = 6;
while ( num <= 60000 ) {
    console.log(num);
    num += 6;
}


// * Counting, the Dojo Way
for ( let i = 1; i <= 100; i++ ) {
    if ( i % 10 === 0 ) {
        console.log( "Coding Dojo" );
    } else if ( i % 5 === 0 ) {
        console.log( "Coding" )
    } else {
        console.log(i);
    }
}


// * What Do You Know?
function logIncomingValue( incoming ) {
    console.log(incoming);
}
logIncomingValue("你好");
logIncomingValue("incoming");
logIncomingValue("Hello World");


// * Whoa, That Sucker’s Huge…
let sum = 0;
for (let i = -300000; i <= 300000; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log(sum);


// * Countdown by Fours
let thisNum = 2016;
while (thisNum > 0) {
    console.log(thisNum);
    thisNum -= 4;
}

// * Flexible Countdown
function flexibleCountdown(lowNum, highNum, mult) {
    for (let i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}
flexibleCountdown(2, 9, 3);
flexibleCountdown(4, 64, 2);

// * The Final Countdown
function finalCountdown(param1, param2, param3, param4) {
    let current = param2;
    
    while (current <= param3) {
        if (current % param1 === 0 && current !== param4) {
            console.log(current);
        }
        current++;
    }
}

finalCountdown(3, 5, 17, 9);