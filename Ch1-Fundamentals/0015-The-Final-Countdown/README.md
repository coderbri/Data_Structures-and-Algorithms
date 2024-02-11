# 0015: The Final Countdown

- **Category:** Fundamentals, Set I
- **Description:** Based on [0015 Flexible Countdown](../0014-Flexible-Counter/). Given four parameters (`param1`, `param2`, `param3`, `param4`). Prints the multiples of `param1`, starting at `param2` and extending to `param3`. The only exception is that if the multiple is equal to `param4`, then skip it and do not print it to the console. This will use a **WHILE** loop.


## Steps Taken

### JavaScript

```javascript
function printMultiples(param1, param2, param3, param4) {
    let i = param2;
    while (i <= param3) {
        if (i % param1 === 0 && i !== param4) {
            console.log(i);
        }
        i += 1; // Increment by 1, not by param1
    }
}

// Test the function with given parameters
printMultiples(3, 5, 17, 9);
```
1. **Function Definition**: The JavaScript function `printMultiples` takes four parameters: `param1`, `param2`, `param3`, and `param4`.
2. **Loop Structure**: It uses a `while` loop to iterate over a range of numbers starting from `param2` and ending at `param3`.
3. **Condition Checking**: Within the loop, it checks if the current number is a multiple of `param1` and not equal to `param4`.
4. **Output**: If the conditions are met, it prints the current number to the console.
5. **Incrementation**: The loop increments the `i` variable by 1 in each iteration.


### Python:

```python
def print_multiples(param1, param2, param3, param4):
    i = param2
    while i <= param3:
        if i % param1 == 0 and i != param4:
            print(i)
        i += 1  # Increment by 1, not by param1

# Test the function with given parameters
print_multiples(3, 5, 17, 9)
```

1. **Function Definition**: The Python function `print_multiples` has the same functionality as the JavaScript counterpart.
2. **Loop Structure**: It also utilizes a `while` loop to iterate over a range of numbers starting from `param2` and ending at `param3`.
3. **Condition Checking**: Within the loop, it checks if the current number is a multiple of `param1` and not equal to `param4`.
4. **Output**: If the conditions are satisfied, it prints the current number to the console.
5. **Incrementation**: Similar to the JavaScript version, the loop increments the `i` variable by 1 in each iteration.
