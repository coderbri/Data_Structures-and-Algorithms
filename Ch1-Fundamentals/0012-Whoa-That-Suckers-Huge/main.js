let sum = 0;
for (let i = -300000; i <= 300000; i++) {
    if (i % 2 !== 0) { // check if the number is odd
        sum += i; // add the odd number to the sum
    }
}
console.log("Sum of odd integers:", sum);


// * Shortcut
function sumOddIntegers() {
    const n = Math.ceil(300000 / 2); // Calculate the number of positive odd integers within the range
    const sum = n * n - n * n; // Since the sum of positive and negative odd integers cancels out, the total sum is zero
    console.log("Sum of odd integers:", sum);
}

sumOddIntegers();
