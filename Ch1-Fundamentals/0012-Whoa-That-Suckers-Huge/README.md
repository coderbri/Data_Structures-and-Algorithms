# 0012: Whoa, That Sucker's Huge

- **Category:** Fundamentals, Set I
- **Description:** Calculates and prints the sum of odd integers from -300,000 to 300,000 using a mathematical approach.


```js
let sum = 0;
for (let i = -300000; i <= 300000; i++) {
    if (i % 2 !== 0) { // check if the number is odd
        sum += i; // add the odd number to the sum
    }
}
console.log("Sum of odd integers:", sum);


// * Shortcut
function sumOddIntegers() {
    const n = Math.ceil(300000 / 2); // Calculate the number of positive odd integers within the range
    const sum = n * n - n * n; // Since the sum of positive and negative odd integers cancels out, the total sum is zero
    console.log("Sum of odd integers:", sum);
}

sumOddIntegers();
```

```py
sum = 0
for i in range(-300000, 300000):
    if (i % 2 != 0):
        sum += i
print("Sum of odd integers:", sum)


# * Shortcut
def sum_odd_integers():
    n = (300000 // 2) + 1  # Calculate the number of positive odd integers within the range
    total_sum = n * n - n * n  # Since the sum of positive and negative odd integers cancels out, the total sum is zero
    print("Sum of odd integers:", total_sum)

sum_odd_integers()
```


## Steps Taken

1. **Range Iteration and Odd Summation**:
   - Both JavaScript and Python solutions iterate through the range from -300,000 to 300,000, inclusive, using a loop.
   - Within each iteration, they check if the current number is odd using the condition `i % 2 !== 0`.
   - If the number is odd, it's added to the `sum` variable.

2. **Shortcut Solution**:
   - The shortcut solution attempts to optimize the process by directly calculating the sum of odd integers without iterating through each number.
   - It calculates the number of positive odd integers within the range (`n`) using a formula.
   - Then, it subtracts the sum of positive and negative odd integers to get zero, as they cancel each other out due to symmetry.

3. **Output**:
   - Finally, the code logs the total sum of odd integers to the console in both JavaScript and Python.

Overall, while the initial solutions correctly calculate the sum of odd integers, the shortcut solutions mistakenly calculate the sum as zero due to the incorrect handling of the range's symmetry. This error should be corrected by adjusting the shortcut solutions to account for the symmetric nature of the range.