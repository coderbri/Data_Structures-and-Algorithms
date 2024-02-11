# 0004: Multiples of Three — But Not All

- **Category:** Fundamentals, Set I
- **Description:** Prints multiples of 3 from -300 to 0, skipping -3 and -6.

```js
for (let i = -300; i <= 0; i += 3) {
    if ( i === -3 || i === -6 ) {
        continue;
    }
    console.log(i);
}
```

```py
for i in range( -300, 1, 3):
    if i == -3 or i == -6:
        continue
    print(i)
```


## Steps Taken

### JavaScript Version:
1. **Loop Initialization**: We start with `i` equal to -300 because the loop needs to start from -300.
2. **Loop Condition**: The loop continues as long as `i` is less than or equal to 0 because we want to include 0 in the range.
3. **Loop Increment**: In each iteration, we increase `i` by 3 using `i += 3` to step through the numbers in increments of 3.
4. **Conditional Check**: Inside the loop, we check if `i` is equal to -3 or -6. If it is, we skip the current iteration using `continue`.
5. **Logging**: If the condition is not met, we log the current value of `i` to the console.

### Python Version:
1. **Loop Initialization and Condition**: Similar to the JavaScript version, we start with a range from -300 to 1 (exclusive) in steps of 3.
2. **Conditional Check**: Inside the loop, we check if `i` is equal to -3 or -6 using the `or` operator. If either condition is true, we skip the current iteration using `continue`.
3. **Printing**: If the condition is not met, we print the current value of `i`.

In both versions, the key idea is to iterate over a range of numbers, skipping certain values based on a condition, and performing an action (logging or printing) for the remaining values. The syntax and constructs differ slightly between JavaScript and Python, but the overall logic remains the same.
