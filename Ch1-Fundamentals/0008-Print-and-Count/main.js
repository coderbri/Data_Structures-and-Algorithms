let fivesCount = 0;
for (let i = 512; i <= 4096; i++) {
    if ( i % 5 === 0 ) {
        console.log(i);
        fivesCount++;
    }
}
console.log("Fives Count:", fivesCount);