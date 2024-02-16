# 0017 Print and Return

This function will receive an array with two numbers. Print the first value, and return the second.


## JavaScript

```jsx
function printFirstReturnSecond( arr ) {
    if (arr.length < 2) {
        console.log("\\n!!! ERROR: Array must have at least 2 values.")
        return undefined
    }

    console.log("First Value:", arr[0]);
    return arr[1];
}

let arr = [ 5, 10, 15];
let secondValue = printFirstReturnSecond(arr);
console.log("Second Value:", secondValue)

let arr2 = [ 5 ];
let undefinedTest = printFirstReturnSecond(arr2);
```

1. **Function Definition**: The function `printFirstReturnSecond` is defined, which takes an array `arr` as input.

2. **Print and Return**: The function checks if the array has at least 2 values. If not, it logs an error message and returns `undefined`. Otherwise, it prints the first value of the array and returns the second value.

3. **Testing**:
    - An array `arr` with multiple values is defined.
    - The function is called with this array, and the returned second value is assigned to `secondValue`.
    - Finally, the second value is printed to the console.


## Python

```python
def print_first_return_second( arr ):
    if (len(arr) < 2):
        print("\\n!!! ERROR: Array must have at least 2 values.")
        return None
    print("First Value:", arr[0])
    return arr[1]

arr = [4, 8, 12]
second_val = print_first_return_second(arr)
print("Second Value:", second_val)

arr2 = [2]
none_test = print_first_return_second(arr2)
```

1. **Function Definition**: The function `print_first_return_second` is defined, which takes a list `arr` as input.

2. **Print and Return**: The function checks if the list has at least 2 values. If not, it prints an error message and returns `None`. Otherwise, it prints the first value of the list and returns the second value.

3. **Testing**:
    - A list `arr` with multiple values is defined.
    - The function is called with this list, and the returned second value is assigned to `second_val`.
    - Finally, the second value is printed using `print()`.