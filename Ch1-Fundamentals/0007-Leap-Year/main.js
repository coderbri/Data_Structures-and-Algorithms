function isLeapYear( incomingYear ) {
    if ( typeof(incomingYear) !== 'number' ) {
        console.log("`incomingYear` must be type number!");
        return false;
    }
    if (( incomingYear % 4 === 0 && incomingYear % 100 !== 0 ) || ( incomingYear % 400 === 0)) {
        console.log(`${incomingYear} is a leap year!`);
        return true;
    }
    console.log("NOT A LEAP YEAR!");
    return false;
}

isLeapYear(2000);
isLeapYear(1900);
isLeapYear('1900');
isLeapYear(2024);
isLeapYear(2021);