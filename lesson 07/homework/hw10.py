my_number = 50
user_number = int(input("Guess the number: "))

while True:
    if user_number > my_number:
        print("The number is too high, try again!")
        user_number = int(input("Enter a number: "))
    elif user_number < my_number:
        print("The number is too low, try again!")
        user_number = int(input("Enter a number: "))
    else:
        print("You have guessed the number")
        break