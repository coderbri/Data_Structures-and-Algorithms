def print_multiples(param1, param2, param3, param4):
    i = param2
    while i <= param3:
        if i % param1 == 0 and i != param4:
            print(i)
        i += 1  # Increment by 1, not by param1

# Test the function with given parameters
print_multiples(3, 5, 17, 9)
