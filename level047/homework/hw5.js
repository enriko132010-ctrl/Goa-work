/*
DOM ნიშნავს Document Object Model-ს.

DOM არის ბრაუზერის მიერ შექმნილი
HTML დოკუმენტის ობიექტური წარმოდგენა.

DOM-ის დახმარებით JavaScript-ს შეუძლია:

1. HTML ელემენტების მოძებნა
2. ტექსტის შეცვლა
3. სტილების შეცვლა
4. ელემენტების დამატება
5. ელემენტების წაშლა
6. Event-ების (click, input და ა.შ.) დამუშავება

მაგალითად:

<p id="text">Hello</p>

JavaScript-ით შეგვიძლია:

document.getElementById("text").textContent = "Hi";

და ტექსტი შეიცვლება.

*/