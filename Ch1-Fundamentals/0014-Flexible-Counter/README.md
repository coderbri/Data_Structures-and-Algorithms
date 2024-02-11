# 0015: Flexible Countdown

- **Category:** Fundamentals, Set I
- **Description:** Prints multiples of a given number from a high number down to a low number (9, 6, 3 on successive lines).


```js
let lowNum = 2;
let highNum = 9;
let mult = 3;

for (let i = highNum; i >= lowNum; i -= mult) {
    console.log(i)
}
```

```py
lowNum = 2
highNum = 9
mult = 3

for i in range(highNum, lowNum, -mult):
    print(i)
```

## Steps Taken

### JavaScript
   - The solution initializes variables `lowNum`, `highNum`, and `mult`.
   - Using a `for` loop, it starts from `highNum` and decrements `i` by `mult` in each iteration until `i` becomes less than `lowNum`.
   - Within each iteration, it prints the current value of `i` to the console using `console.log(i)`.

### Python
   - Similar to the JavaScript solution, this solution initializes variables `lowNum`, `highNum`, and `mult`.
   - It uses a `for` loop and the `range()` function to iterate over a range starting from `highNum`, stopping just before `lowNum`, and decrementing by `mult` in each step.
   - Within each iteration, it prints the current value of `i` to the console using `print(i)`.
