numbers = []  # ცარიელი სია რიცხვებისთვის

for i in range(5):  # 5-ჯერ ვითხოვთ რიცხვს
    num = float(input("Enter a number: "))
    numbers.append(num)  # ვამატებთ სიაში

# ჯამის გამოთვლა
total = 0
for n in numbers:
    total += n  # ჯამს ვუმატებთ თითოეულ რიცხვს

print("The total sum is:", total)
