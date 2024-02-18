def is_numeric_array(arr):
    return all(isinstance(x, (int, float)) for x in arr)

def get_values_greater_than_2nd(arr):
    if len(arr) == 0:
        return "\n!!! ERROR: There are no values in this array."
    
    if not all(isinstance(x, (int, float)) for x in arr):
        return "\n!!! ERROR: The array must consist of numbers."
    
    second_val = arr[1]
    count = 0
    for num in arr:
        if num > second_val:
            print(f"Value > second_val: {num}")
            count += 1
    
    return f"--------------\nValues greater than second value: {count}\n"

arr1 = [1, 3, 5, 7, 9, 13]
print(get_values_greater_than_2nd(arr1))

arr2 = [64, 16, 32, 4, 8, 15]
print(get_values_greater_than_2nd(arr2))