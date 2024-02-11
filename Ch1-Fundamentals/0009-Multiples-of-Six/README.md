# 0009: Multiples of Six

- **Category:** Fundamentals, Set I
- **Description:** Prints multiples of 6 up to 60,000 using a while loop.


```js
let num = 6;
while (num <= 60000) {
    console.log(num);
    num += 6;
}

// * Good, but not efficient for this algo's purposes
let i = 1
let sixCount = 0;
while (i <= 60000) {
    if ( i % 6 === 0 ) {
        // console.log(i);
        sixCount++;
    }
    i++;
}
console.log(sixCount);
```

```py
num = 6
while ( num <= 60000 ):
    print(num)
    num += 6

# * Good, but not efficient for this algo's purposes
i = 1
six_count = 0
while (i <= 60000):
    if (i % 6 == 0):
        # print(i)
        six_count += 1
    i += 1
print(six_count)
```

## Steps Taken

### JavaScript:
1. **Direct Increment**: The solution directly increments the `num` variable by 6 in each iteration of the `while` loop, efficiently printing the multiples of 6 without needing to perform a modulo operation. This approach is straightforward and efficient.
2. **Modulo Check with Counter**: In this approach, the solution performs a modulo operation (`i % 6 === 0`) in each iteration to check for divisibility. It counts the number of multiples of 6 within the specified range.

### Python:
1. **Direct Increment**: Similar to the JavaScript solution, the solution directly increments the `num` variable by 6 in each iteration of the `while` loop, efficiently printing the multiples of 6.
2. **Modulo Check with Counter**: This approach is similar to the JavaScript counterpart, where the solution checks for divisibility by 6 using the modulo operator (`i % 6 == 0`) and increments a counter variable accordingly.