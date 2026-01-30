def to_weird_case(words):
    # სიტყვების სია ვიღებთ split-ით
    words = words.split(" ")  
    result = []  # აქ შევინახავთ საბოლოო შეცვლილ სიტყვებს

    for word in words:
        weird = ''  # ცარიელი სტრინგი, სადაც მოვათავსებთ უკვე weird-case-ს
        for i in range(len(word)):
            if i % 2 == 0:
                # ინდექსი ლუწია
                weird += word[i].upper()
            else:
                # ინდექსი კენტია
                weird += word[i].lower()
        # დასრულებული weird სიტყვა ვამატებთ list-ში
        result.append(weird)
    
    # საბოლოოდ ვაბრუნებთ list-ის სიტყვებს space-ით გაერთიანებულ სტრინგად
    return " ".join(result)
