#3) შექმენით ფუნცია რომელსაც გადასცემთ ორ პარამეტრს, პირველი მასივი მეორე რიცხვი, თქვენი დავალებაა რომ შეამოწმოთ შეიცავს თუ არა მოცემული მასივი გადმოცემულ რიცხვს თუ კი მაშინ დააბრუნეთ ტექსტი 'The array contains your number' სხვა შემთხვევაში კი დააბრუნეთ ტექსტი 'the array does not contain your number'


def contains_number(arr, num):  # იღებს სიას და რიცხვს
    if num in arr:  # თუ რიცხვი არის სიაში
        return "The array contains your number"
    else:
        return "The array does not contain your number"

print(contains_number([1, 2, 3, 4], 3))
print(contains_number([10, 20, 30], 15))
