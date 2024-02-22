def is_numeric_array(arr):
    return all(isinstance(x, (int, float)) for x in arr)

def get_values_greater_than_2nd(arr):
    if len(arr) <= 1:
        return "\n!!! ERROR: There are one or fewer values in this array.\n"
    
    if is_numeric_array(arr):
        second_val = arr[1]
        count = 0
        new_arr = []
        
        for i in range(len(arr)):
            if arr[i] > second_val:
                print(f"Value at idx {i} > second_val: {arr[i]}")
                count += 1
                new_arr.append(arr[i])
            elif arr[i] == second_val:
                continue
            # else:
            #     print(f" x  Value at idx {i} < secondVal: {arr[i]}")
        
        if new_arr:
            print("---------------------------------\n=== New Array:", new_arr)
        else:
            print("There are no values greater than the second value...")
        
        return f"---------------------------------\nValues greater than second value: {count}\n"
        
    else:
        return "\n!!! ERROR: The array must consist of numbers."

arr1 = [1, 3, 5, 7, 9, 13]
print(get_values_greater_than_2nd(arr1))

arr2 = [64, 16, 32, 4, 8, 15]
print(get_values_greater_than_2nd(arr2))

arr3 = [4]
print(get_values_greater_than_2nd(arr3))

arr4 = [2, 6]
print(get_values_greater_than_2nd(arr4))