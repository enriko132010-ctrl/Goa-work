#4) თქვენივე ხელით შექმენით calculator ის პროგრამა თქვენი დავალებაა რომ მომხმარებელს შემოატანინოთ ორი 
# რიცხვი და ერთი მათემატიკური ოპერატორი, მოიძიეთ ინფორმაცია (if elif else statement - ების შესახებ) 
# შეამოწმეთ თუ ოპერაცია არის + მაშინ დაბეჭდეთ მომხმარებლის მიერ შემოტანილი რიცხვების ჯამი, თუ - სხვაობა და 
# ასე შემდეგ

# მომხმარებლისგან ორი რიცხვი
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# მომხმარებლისგან ოპერატორის შეყვანა (+, -, *, /)
operator = input("Enter an operator (+, -, *, /): ")

# პირობითი statements ოპერაციის მიხედვით
if operator == "+":  # თუ ოპერატორი არის +
    result = num1 + num2
    print("Result:", result)
elif operator == "-":  # თუ ოპერატორი არის -
    result = num1 - num2
    print("Result:", result)
elif operator == "*":  # თუ ოპერატორი არის *
    result = num1 * num2
    print("Result:", result)
elif operator == "/":  # თუ ოპერატორი არის /
    if num2 != 0:      # ვამოწმებთ რომ მეორე რიცხვი არ იყოს 0
        result = num1 / num2
        print("Result:", result)
    else:
        print("Error: Division by zero!")
else:  # თუ ოპერატორი არასწორია
    print("Invalid operator!")
