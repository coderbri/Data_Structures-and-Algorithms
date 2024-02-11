let birthMonth = 10
let birthDay = 29

function checkBirthDate( month, day ) {
    if (( month < 1 || month > 12 ) || ( day < 1 || day > 31 )) {
        console.log("Values out of range!")
        return false;
    }
    
    if (( month === birthMonth && day === birthDay ) || ( month === birthDay && day === birthMonth )) {
        console.log(`How did you know? It's ${month}/${day}!`);
        return true;
    }
    console.log("Just another day...");
    return false;
}

checkBirthDate(10, 29);
checkBirthDate(30, 1);
checkBirthDate(1, 32);
checkBirthDate(4, 17);
checkBirthDate(10, 27);