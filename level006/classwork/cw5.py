#5) for loop - ის გამოყენებით მომხმარებელს შემოატანინეთ 3 რიცხვი, 
# გამოითვალეთ ამ რიცხვების საშუალო არითემტიკული და დაბეჭდეთ საბოლოო შედეგი





total = 0  

for i in range(3):  
    number = float(input("Enter the number: "))
    total += number  
average = total / 3  

print("enter the avarage:", average)
