# 0008: Print and Count

- **Category:** Fundamentals, Set I
- **Description:** Prints integers divisible by 5 between 512 and 4096 and counts them.


```js
let fivesCount = 0;
for (let i = 512; i <= 4096; i++) {
    if ( i % 5 === 0 ) {
        console.log(i);
        fivesCount++;
    }
}
console.log("Fives Count:", fivesCount);
```

```py
fives_count = 0
for i in range(512, 4097):
    if ( i % 5 == 0):
        print(i)
        fives_count += 1
print("Fives Count: ", fives_count)
```

## Steps Taken
1. **Loop Logic**: The solutions utilize loops to iterate over the range of numbers from 512 to 4096 (inclusive) in both JavaScript and Python.

2. **Multiples of 5**: Within the loops, each solution correctly checks if each number is a multiple of 5 using the modulo operator (`%`) and prints it if it is.

3. **Counting Multiples**: The solutions increment a variable (`fivesCount` in JavaScript, `fives_count` in Python) each time a multiple of 5 is encountered, effectively counting the total number of multiples printed.

4. **Logging the Count**: After the loop execution, each solution logs the total count of multiples printed, providing a clear indication of how many multiples of 5 were found.