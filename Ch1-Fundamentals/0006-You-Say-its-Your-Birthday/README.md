# 0006: You Say It's Your Birthday

- **Category:** Fundamentals, Set I
- **Description:** Checks if the input month and day match a predefined birthday.


```js
let birthMonth = 10
let birthDay = 29

function checkBirthDate( month, day ) {
    if (( month < 1 || month > 12 ) || ( day < 1 || day > 31 )) {
        console.log("Values out of range!")
        return false;
    }
    
    if (( month === birthMonth && day === birthDay ) || ( month === birthDay && day === birthMonth )) {
        console.log(`How did you know? It's ${month}/${day}!`);
        return true;
    }
    console.log("Just another day...");
    return false;
}

checkBirthDate(10, 29);
checkBirthDate(30, 1); // ! out of range
checkBirthDate(1, 32); // ! out of range
checkBirthDate(4, 17);
checkBirthDate(10, 27);
```

```py
birth_month = 10
birth_day = 29

def check_birth_date( month, day ):
    if (( month < 1 or month > 12 ) or ( day < 1 or day >31 )):
        print("Values out of range!")
        return False
    
    if (( month == birth_month and day == birth_day ) or ( month == birth_day and day == birth_month )):
        print(f"How did you know? It's {month}/{day}!")
        return True
    print("Just another day...")
    return False

check_birth_date(10, 27)
check_birth_date(17, 4) # ! out of range
check_birth_date(10, 29)
check_birth_date(13, 3) # ! out of range
check_birth_date(4, 17)
```

## Steps Taken
1. **Input Validation**: The solutions incorporate input validation checks to ensure that the `month` and `day` values fall within the valid ranges of 1 to 12 for the month and 1 to 31 for the day.

2. **Informative Messages**: Informative messages are provided when values are out of range or when it's the birthday. This approach enhances the user experience and improves the understandability of the output.

3. **Using Logical Operators**: Logical operators (`||` in JavaScript and `or` in Python) are correctly utilized to combine the input validation conditions, ensuring that either condition being true triggers the appropriate response.

4. **Testing with Different Inputs**: The functions are tested with various inputs, encompassing both valid and invalid values for the month and day. This comprehensive testing approach helps ensure that the functions handle different scenarios correctly.
