fives_count = 0
for i in range(512, 4097):
    if ( i % 5 == 0):
        print(i)
        fives_count += 1
print("Fives Count: ", fives_count)