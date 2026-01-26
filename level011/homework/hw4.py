#4) შექმენით ფუნქცია სახელად check_age რომელიც არგუმენტად მიიღებს რაიმე რიცხვს თქვენი დავალებაა რომ შეამოწმოთ თუ რიცხვი არის 18 ზე მეტი ან 18 - ის ტოლი მაშინ დააბრუნეთ ტექსტი 'You are an adult' სხვა შემთხვევაში კი 'You are a kid'


def check_age(age):
    if age >= 18:
        return ("you are an edult")
    
    else:
        return ("you are kid")
    

print(check_age(10))
print(check_age(13))
print(check_age(19))
    