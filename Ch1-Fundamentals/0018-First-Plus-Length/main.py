def sum_of_first_plus_length(arr):
    if len(arr) == 0:
        return "\n!!! ERROR: There are no values in this array."
    
    if isinstance(arr[0], (int, float)) and not isinstance(arr[0], bool):
        return arr[0] + len(arr)
    else:
        return "\n!!! ERROR: The first value is not a number"


arr1 = sum_of_first_plus_length([4, 16, 32, 64])
arr2 = sum_of_first_plus_length(["what", 5, 10])
arr3 = sum_of_first_plus_length([])
arr4 = sum_of_first_plus_length([False, 1, 2])

print(arr1)
print(arr2)
print(arr3)
print(arr4)