# 0016 Countdown

This function generates a countdown array starting from a given number down to 0, inclusive, and returns the resulting array along with its length for two different input values.

## JavaScript Solution

```js
function countdownArray( num ) {
    let resultingArr = [];
    for (let i = num; i >= 0; i--) {
        resultingArr.push(i);
    }
    return resultingArr;
}

let result = countdownArray(5);
console.log(result);
console.log("Length of the array:", result.length);

let result2 = countdownArray(10);
console.log(result2);
console.log("Length of the array:", result2.length);
```

1. **Function Definition**:  The function `countdownArray` is defined, which takes a single parameter `num`.

2. **Array Initialization**: An empty array `resultingArr` is initialized to store the countdown numbers.

3. **Countdown Loop**: A `for` loop is used, starting from `num` and decrementing by 1 in each iteration until reaching 0. In each iteration, the current value of `i` is pushed into the `resultingArr` array using the `push()` method.

4. **Return**: The resulting array is returned once the loop completes.

5. **Testing**: The function is called twice with different input values (5 and 10), and the results along with their lengths are printed to the console.


## Python Solution:

```python
def countdown_array(num):
    return list(range(num, -1, -1))

# Test the function
result = countdown_array(5)
print(result)
print("Length of the array:", len(result))
```

1. **Function Definition**:  The function `countdown_array` is defined, which takes a single parameter `num`.

2. **Array Generation**: The `range()` function is used to generate a sequence of numbers from `num` down to 0 (inclusive) with a step of -1. This sequence is converted into a list using the `list()` function, resulting in the countdown array.

3. **Return**: The countdown array is returned.

4. **Testing**: The function is called once with an input value of 5, and the resulting array along with its length are printed to the console.
