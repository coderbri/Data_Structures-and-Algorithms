# 0019 Values Greater than Second

For the given array, the function prints values that are greater than its second value and returns the count of such values.

## JavaScript

```jsx
function isNumericArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return false;
        }
    }
    return true;
}

function valuesGreaterThanSecond(arr) {
    if (arr.length === 0) {
        return "\\n!!! ERROR: There are no values in this array.";
    }

    if (isNumericArray(arr) === true) {
        let secondVal = arr[1];
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > secondVal) {
                console.log("Value > secondVal: " + arr[i]);
                count++;
            } // if not, move on to the next
        }

        return `--------------\\nValues greater than second value: ${count}\\n`;
    } else {
        return "\\n!!! ERROR: The array must consist of numbers.";
    }
}
```

1. **Function Definition**: The function `valuesGreaterThanSecond` is defined, which takes an array `arr` as input.

2. **Checking if the Array Consists of Numbers**: It first checks if the array consists of only numbers using the `isNumericArray` helper function.

3. **Finding Values Greater Than the Second Value**:
    - If the array consists of numbers, it retrieves the second value and counts the values in the array that are greater than the second value.
    - It prints each value that meets this condition.


## Python

```python
def is_numeric_array(arr):
    return all(isinstance(x, (int, float)) for x in arr)

def get_values_greater_than_2nd(arr):
    if len(arr) == 0:
        return "\\n!!! ERROR: There are no values in this array."

    if not all(isinstance(x, (int, float)) for x in arr):
        return "\\n!!! ERROR: The array must consist of numbers."

    second_val = arr[1]
    count = 0
    for num in arr:
        if num > second_val:
            print(f"Value > second_val: {num}")
            count += 1

    return f"--------------\\nValues greater than second value: {count}\\n"
```

1. **Function Definition**: The function `get_values_greater_than_2nd` is defined, which takes a list `arr` as input.

2. **Checking if the List Consists of Numbers**: It first checks if the list consists of only numbers using the `is_numeric_array` helper function.

3. **Finding Values Greater Than the Second Value**:
    - If the list consists of numbers, it retrieves the second value and counts the values in the list that are greater than the second value.
    - It prints each value that meets this condition.
