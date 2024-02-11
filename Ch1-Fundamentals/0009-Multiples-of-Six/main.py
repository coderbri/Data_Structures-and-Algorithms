num = 6
while ( num <= 60000 ):
    print(num)
    num += 6

# * Good, but not efficient for this algo's purposes
i = 1
six_count = 0
while (i <= 60000):
    if (i % 6 == 0):
        # print(i)
        six_count += 1
    i += 1
print(six_count)