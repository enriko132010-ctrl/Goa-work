#6) შექმენით ერთი ცვლადი შეინახეთ მასში string - თქვენი დავალებაა რომ მომხმარებელს მოსთხოვოთ რაიმე index - ი, და დაბეჭდოთ 
# string - იდან სიმბოლო რომელიც მდებარეობს გადმოცემულ index - ზე


text = 'hello world'

index = int(input('Enter the index: '))
if 0 <= index < len(text):
    print("symbol:", text[index])
else:
    print('index isnt correct')
