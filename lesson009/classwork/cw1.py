#1) numbers = [1,1,1,2,3,4,4,5,6,6,7] შექმენით პროგრამა რომელიც დაითვლის თუ რამდენი ერთიანი არის მოთავსებული 
# ამ სიაში (გამოიყენეთ ციკლები და პირობითი განცხადებები)

# List of numbers
numbers = [1, 1, 1, 2, 3, 4, 4, 5, 6, 6, 7]

# Create another list that only contains number 1s
ones_list = []  # აქ შევინახავთ მხოლოდ ერთიანებს

for num in numbers:      # გადავდივართ თითოეულ ელემენტზე
    if num == 1:         # თუ რიცხვი ტოლია 1-ის
        ones_list.append(num)  # ვამატებთ ახალ სიაში

# Now print how many 1s are in the list (using len)
print("There are", len(ones_list), "ones in the list.")
