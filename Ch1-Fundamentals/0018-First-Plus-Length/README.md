# 0018 First Plus Length

Given an array, the function returns the sum of the first value in the array, plus the array's length. Within, it checks if the array is empty or any type besides the number datatype.

## JavaScript

```jsx
function sumOfFirstPlusLength(arr) {
    if (arr.length === 0) {
        return "\\n!!! ERROR: There are no values in this array.";
    }

    if (typeof arr[0] === 'number') {
        return arr[0] + arr.length;
    } else {
        return "\\n!!! ERROR: The first value is not a number";
    }
}

const arr1 = sumOfFirstPlusLength([4, 16, 32, 64]);
const arr2 = sumOfFirstPlusLength(["what", 5, 10]);
const arr3 = sumOfFirstPlusLength([]);
const arr4 = sumOfFirstPlusLength([false, 1, 2]);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

```

1. **Function Definition**: The function `sumOfFirstPlusLength` is defined, which takes an array `arr` as input.

2. **Handling Empty Array**: It first checks if the array is empty. If it is, it returns an error message indicating that there are no values in the array.

3. **Checking if the First Value is a Number**:
    - It then checks if the first value of the array is a number using `typeof`. If it is, it returns the sum of the first value and the length of the array.
    - If the first value is not a number, it returns an error message indicating that the first value is not a number.


## Python

```python
def sum_of_first_plus_length(arr):
    if len(arr) == 0:
        return "\\n!!! ERROR: There are no values in this array."

    if isinstance(arr[0], (int, float)) and not isinstance(arr[0], bool):
        return arr[0] + len(arr)
    else:
        return "\\n!!! ERROR: The first value is not a number"

arr1 = sum_of_first_plus_length([4, 16, 32, 64])
arr2 = sum_of_first_plus_length(["what", 5, 10])
arr3 = sum_of_first_plus_length([])
arr4 = sum_of_first_plus_length([False, 1, 2])

print(arr1)
print(arr2)
print(arr3)
print(arr4)

```

1. **Function Definition**: The function `sum_of_first_plus_length` is defined, which takes a list `arr` as input.

2. **Handling Empty List**: It first checks if the list is empty. If it is, it returns an error message indicating that there are no values in the list.

3. **Checking if the First Value is a Number**:
    - It then checks if the first value of the list is a number using `isinstance()` with additional check to exclude boolean type. If it is, it returns the sum of the first value and the length of the list.
    - If the first value is not a number, it returns an error message indicating that the first value is not a number.