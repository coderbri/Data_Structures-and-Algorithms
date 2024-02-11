# 0010: Counting, The Dojo Way

- **Category:** Fundamentals, Set I
- **Description:** Prints numbers from 1 to 100, replacing multiples of 5 with "Coding" and multiples of 10 with "Coding Dojo".


```js
for (let i = 1; i < 101; i++ ) {
    if ( i % 10 === 0 ) {
        console.log("Coding Dojo");
    } else if ( i % 5 === 0 ) {
        console.log("Coding");
    } else {
        console.log(i);
    }
}
```

```py
for i in range(1, 101):
    if (i % 10 == 0):
        print("Coding Dojo")
    elif (i % 5 == 0):
        print("Coding")
    else:
        print(i)
```

## Steps Taken

### JavaScript:
- The solution utilizes a `for` loop to iterate over the numbers from 1 to 100 inclusively.
- Within each iteration of the loop, it checks if the current number is divisible by 10 using the modulo operator `%`. If so, it prints "Coding Dojo".
- If the number is not divisible by 10 but is divisible by 5, it prints "Coding".
- For all other cases, it prints the integer itself.

### Python:
- Similarly, the solution uses a `for` loop with the `range(1, 101)` function to iterate over the numbers from 1 to 100 inclusively.
- Inside the loop, it employs `if`, `elif`, and `else` statements to handle the conditions for divisibility by 10, divisibility by 5, and otherwise.
- If the number is divisible by 10, it prints "Coding Dojo". If it's divisible by 5 but not by 10, it prints "Coding".
- For all other cases, it prints the integer itself.