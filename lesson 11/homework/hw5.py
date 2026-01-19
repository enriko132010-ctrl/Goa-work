#5) შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს ორ რიცხვს, თქვენი დავალებაა რომ შეამოწმოთ თუ პირველი რიცხვი მეტია მეორეზე დააბრუნეთ 'The first number is greater than the second number' სხვა შემთხვევაში კი 'The second number is greater than the first number'


def compare_numbers(a, b):
    if a > b:
        return ("The first number is greater than the second number")
    else:
        return ("The second number is greater then the first number") 
    
print(compare_numbers(10 ,5))
print(compare_numbers(6, 11))