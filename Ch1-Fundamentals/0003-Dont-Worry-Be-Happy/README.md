# Don't Worry, Be Happy

- **Category:** Fundamentals, Set I
- **Description:** Create a **`beCheerful()`** function. Within it, `console.log` string "good morning!" Call this function 98 times.

```js
function beCheerful() {
    console.log("Good morning");
}

for (let i = 1; i <= 98; i++) {
    console.log(`\nCount: ${i}`);
    beCheerful();
}
```

```py
def beCheerful():
    print('Good morning')

for i in range(1, 99):
    print(f'\nCount {i}:')
    beCheerful()
```

## Steps Taken
1. We define a function `beCheerful()` that simply logs the string "good morning!" to the console.

2. Then, we use a for loop to call this function 98 times. The loop runs 98 times because `i` starts at 0, and as long as `i` is less than 98, the loop continues, incrementing `i` by 1 each time.

3. Each time the loop runs, it calls the `beCheerful()` function, resulting in the string "good morning!" being logged to the console 98 times.