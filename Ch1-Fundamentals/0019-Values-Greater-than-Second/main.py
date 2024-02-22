def get_values_greater_than_2nd():
    arr = [1, 3, 5, 7, 9, 13]
    
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

print(get_values_greater_than_2nd())
