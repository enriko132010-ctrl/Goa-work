#2) შექმენით ფუნქცია სახელად strong_pass რომელიც არგუმენტად იღებს password - თქვენი დავალებაა რომ შეამოწმოთ შეიცავს თუ არა გადმოცემული პაროლი რომელიღაც რიცხვს თუ კი მაშინ დააბრუნეთ ტექტი 'Your password is strong' სხვა შემთხვევაში კი დააბრუნეთ ტექსტი 'You should create a strong password'






def strong_pass(password):
    for symbol in password:  # გადავდივართ თითოეულ სიმბოლოზე პაროლში
        if symbol in "0123456789":  # თუ ეს სიმბოლო რიცხვია
            return "Your password is strong"  # ვამბობთ, რომ ძლიერი პაროლია
    return "You should create a strong password"  # თუ არცერთი რიცხვი არ იყო, სუსტია
