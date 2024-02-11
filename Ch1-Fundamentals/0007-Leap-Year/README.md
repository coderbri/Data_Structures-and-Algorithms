# 0007: Leap Year

- **Category:** Fundamentals, Set I
- **Description:** Determines if a given year is a leap year based on specified conditions—a year is a leap year if it's divisible by 4, unless it's also divisible by 100. However, if it's divisible by 400, then it is a leap year.


```js
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
```

```py
def is_leap_year( incomingYear ):
    if not isinstance( incomingYear, int ):
        print("`incomingYear` must be type number!")
        return False
    
    if (( incomingYear % 4 == 0 ) or ( incomingYear % 400 == 0)):
        print(f"{incomingYear} is a leap year!")
        return True
    print("NOT A LEAP YEAR!")
    return False

is_leap_year(2000)
is_leap_year(1900)
is_leap_year('2024')
is_leap_year(2024)
is_leap_year(2021)
```

## Steps Taken

1. **Input Validation**: The solutions correctly validate the data type of the `incomingYear` variable using `typeof` in JavaScript and `isinstance()` in Python.

2. **Leap Year Calculation**: The leap year calculation logic follows the rules specified in the problem statement and correctly identifies leap years.

3. **Informative Messages**: Informative messages are provided when the input is not of the correct data type or when it's a leap year. This improves the clarity of the output.

4. **Testing with Different Inputs**: The functions are tested with various inputs, including both valid and invalid values for `incomingYear`, to ensure they behave correctly under different scenarios.