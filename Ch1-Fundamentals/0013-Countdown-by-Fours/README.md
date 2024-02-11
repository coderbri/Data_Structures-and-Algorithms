# 0013: Countdown by Fours

- **Category:** Fundamentals, Set I
- **Description:** Prints positive numbers starting at 2016, counting down by fours.


```js
let num = 2016;
while (num > 0) {
    console.log(num);
    num -= 4;
}
```

```py
num = 2016
while (num > 0):
    print(num)
    num -= 4
```

## Steps Taken

### JavaScript Solution
   - You initialize the variable `num` to 2016.
   - Using a `while` loop, you ensure that the loop continues as long as `num` is greater than 0.
   - Within each iteration, you log the current value of `num` to the console using `console.log(num)`.
   - After logging the value, you decrement `num` by 4 (`num -= 4`), effectively counting down by fours in each iteration.

### Python Solution
   - Similar to the JavaScript solution, you initialize the variable `num` to 2016.
   - Using a `while` loop, you ensure that the loop continues as long as `num` is greater than 0.
   - Within each iteration, you print the current value of `num` using `print(num)`.
   - After printing the value, you decrement `num` by 4 (`num -= 4`), effectively counting down by fours in each iteration.
