def print_first_return_second( arr ):
    if (len(arr) < 2):
        print("\n!!! ERROR: Array must have at least 2 values.")
        return None
    print("First Value:", arr[0])
    return arr[1]

arr = [4, 8, 12]
second_val = print_first_return_second(arr)
print("Second Value:", second_val)

arr2 = [2]
none_test = print_first_return_second(arr2)