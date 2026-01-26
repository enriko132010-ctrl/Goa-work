#3) შექმენით ერთი ცვლადი სახელად total_count რომელიც საწყისად უდრის 0 - ს თქვენი დავალებაა რომ 1 დან 100 - ის ჩათვლით 
# შეამოწმოთ რიცხვი იყოფა თუ არა უნაშთოდ 3 - ზე, თუ იყოფა მაშინ total_count - ის მნიშვნელობა გაზარდეთ ერთით საბოლოოდ კი დაბეჭდეთ


total_count = 0

for i in range(1, 101):
    if i % 3 == 0:
     total_count += 1
    
    
print('the number of values divisible by 3 is: ', total_count)