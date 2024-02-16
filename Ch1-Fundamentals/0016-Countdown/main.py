def countdown_array( num ):
    return list( range(num, -1, -1 ))

result = countdown_array(5)
print(result)
print("Length of the array:", len(result))

'''
Description
This function accepts a number `num` as input, 
    creates a list using `range()` starting from `num` 
    down to 0 with a step of -1, and then returns the 
    list. The length of the array would be `num + 1`, as 
    it includes the numbers from `num` down to 0.
'''