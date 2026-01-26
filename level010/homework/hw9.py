#10) შექმენით ცვლადი სადაც შეინახავთ თქვენს სახელს, შექმენით მეორე ცვლადი სადაც შეინხავათ ამ სახელის შემობრუნებულ ვერსიას, თქვენი დავალებაა რომ შემოწმოთ უდრის თუ არა მოცემული ცვლადები ერთმანეთს თუ უდრის მაშინ დაბეჭდეთ რომ 'The given name is palindrome' სხვა შემთხვევაში კი დაბეჭდეთ რომ 'The give name is not palindrome', (palindrome - არის ისეთი სიტყვა რომელიც უდრის თავის საპირისპირო ვერსიას) მაგალითად 'anna' --- reversed ---> anna

name = 'Enriko'

reversed_name = name[::-1]

if name == reversed_name:
    print("the given name is a palindorme")
else:
    print("the given name is not palindorm")