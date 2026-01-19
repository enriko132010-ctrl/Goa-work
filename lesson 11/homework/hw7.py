#7) შექმენით ფუნქცია რომელიც იღებს რაიმე რიცხვს 10 - 99, თქვენი დაველბაა რომ შეამოწმოთ თუ ქულა არის 90 - ზე მეტი ან ტოლი მაშინ გამოიტანეთ 'A' თუ ქულა არის 80 ზე მეტი ან ტოლი გამოიტანეთ 'B' თუ ქულა არის 70 - ზე ,ეტი ან ტოლი გამოიტანეთ 'C' და ასე შემდეგ


def grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

print(grade(95))
print(grade(83))
print(grade(72))
print(grade(61))
print(grade(40))
