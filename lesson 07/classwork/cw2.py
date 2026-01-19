#2) შეცვალეთ ეს კოდი ისე რომ მომხმარებელს მხოლოდ 3 მცდელობა ჰქონდეს
# (მინიშნება გამოიყენეთ ლოგიკური ოპერატორები თუ არ გახსოვთ მოიძიეთ ინფორმაცია)




registered_password = "luka123."   # ეს არის სწორი პაროლი
attempts = 3                       # მომხმარებელს აქვს 3 მცდელობა

while attempts > 0:                # სანამ მცდელობა მეტია 0-ზე
    entered_password = input("Please enter password: ")  # ითხოვს პაროლს

    if entered_password == registered_password:          # თუ პაროლი სწორია
        print("Access granted")                          # აჩვენებს წარმატების შეტყობინებას
        break                                             # წყვეტს ციკლს
    else:
        attempts -= 1                                    # მცდელობა მცირდება 1-ით
        print("Incorrect password! Attempts left:", attempts)  # აჩვენებს რამდენი შანსი დარჩა

        if attempts == 0:                                # თუ შანსები გათავდა
            print("Access denied! You used all attempts.")  # აჩვენებს შეცდომის შეტყობინებას
