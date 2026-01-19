#4) for ციკლის გამოყენებით მომხმარებელს input ფუნქციის გამოყენებით 5 ჯერ შემოატანინეთ რაღაცა რიცხვი, 
# შეკრიბეთ ყველა შემოტანილი რიცხვი და საბოლოოდ დაბეჭდეთ რიცხვების ჯამი ციკლის შემდეგ

total = 0  

for i in range(5):  
    number = int(input("Enter the range: "))  
    total += number  

print("total numbers:", total)
