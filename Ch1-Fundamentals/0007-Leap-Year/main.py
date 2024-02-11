def is_leap_year( incomingYear ):
    if not isinstance( incomingYear, int ):
        print("`incomingYear` must be type number!")
        return False
    
    if (( incomingYear % 4 == 0 ) or ( incomingYear % 400 == 0)):
        print(f"{incomingYear} is a leap year!")
        return True
    print("NOT A LEAP YEAR!")
    return False

is_leap_year(2000)
is_leap_year(1900)
is_leap_year('2024')
is_leap_year(2024)
is_leap_year(2021)