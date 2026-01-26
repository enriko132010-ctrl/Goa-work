#5) მომხმარებელს შემოატანინეთ რაიმე რიცხვი, if - ის გამოყენებით შეამოწმეთ თუ რიცხვი უნაშთოდ იყოფა 2 - ზე მაშინ 
# გამოიტანეთ რომ your number is even სხვა შემთხვევაში კი გამოიტანეთ your number is odd


number = int(input("Enter a number: "))

if number % 2 == 0:
    print("Your number is even")
else:
    print("Your number is odd")
