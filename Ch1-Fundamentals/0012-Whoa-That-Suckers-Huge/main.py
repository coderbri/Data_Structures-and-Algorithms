sum = 0
for i in range(-300000, 300000):
    if (i % 2 != 0):
        sum += i
print("Sum of odd integers:", sum)


# * Shortcut
def sum_odd_integers():
    n = (300000 // 2) + 1  # Calculate the number of positive odd integers within the range
    total_sum = n * n - n * n  # Since the sum of positive and negative odd integers cancels out, the total sum is zero
    print("Sum of odd integers:", total_sum)

sum_odd_integers()
