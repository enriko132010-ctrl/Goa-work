numbers = []  # ცარიელი list
for i in range(5):
    num = int(input("Enter a number: "))
    numbers.append(num)  # დამატება list-ში
sum_numbers = 0
for n in numbers:
    sum_numbers += n
print("Sum of numbers is", sum_numbers)