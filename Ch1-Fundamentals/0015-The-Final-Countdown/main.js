function printMultiples(param1, param2, param3, param4) {
    let i = param2;
    while (i <= param3) {
        if (i % param1 === 0 && i !== param4) {
            console.log(i);
        }
        i += 1; // Increment by 1, not by param1
    }
}

// Test the function with given parameters
printMultiples(3, 5, 17, 9);
