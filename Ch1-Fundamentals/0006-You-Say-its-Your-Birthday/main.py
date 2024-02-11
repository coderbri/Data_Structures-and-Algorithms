birth_month = 10
birth_day = 29

def check_birth_date( month, day ):
    if (( month < 1 or month > 12 ) or ( day < 1 or day >31 )):
        print("Values out of range!")
        return False
    
    if (( month == birth_month and day == birth_day ) or ( month == birth_day and day == birth_month )):
        print(f"How did you know? It's {month}/{day}!")
        return True
    print("Just another day...")
    return False

check_birth_date(10, 27)
check_birth_date(17, 4)
check_birth_date(10, 29)
check_birth_date(13, 3)
check_birth_date(4, 17)