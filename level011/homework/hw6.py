#6) შექმენით ფუნქცია რომელიც მიიღებს სახელს, შეამოწმეთ თუ მოცემული სახელის სიგრძე მეტია ან ტოლი 5 მაშინ გამოიტანეთ 'The given name is long' სხვა შემთხვევაში კი 'The given name is short'


def check_name_length(name):
    if len(name) >= 5:
        return ('The given name is long')
    else:
        return ('The given name is short')
    
print(check_name_length('Nika'))
print(check_name_length('Giorgi'))