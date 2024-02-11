let num = 6;
while (num <= 60000) {
    console.log(num);
    num += 6;
}

// * Good, but not efficient for this algo's purposes
let i = 1
let sixCount = 0;
while (i <= 60000) {
    if ( i % 6 === 0 ) {
        // console.log(i);
        sixCount++;
    }
    i++;
}
console.log(sixCount);