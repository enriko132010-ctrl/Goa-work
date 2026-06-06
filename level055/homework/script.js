const titleInput = document.getElementById("titleInput");
const noteText = document.getElementById("noteText");
const searchTitle = document.getElementById("searchTitle");
const addBtn = document.getElementById("addBtn");
const noteList = document.getElementById("noteList");

const notes = [];

addBtn.addEventListener("click", () => {
    // titleInput-დან ვიღებთ ტექსტს და ვშლით ზედმეტ სფეისებს
    const title = titleInput.value.trim();

    // noteText-დან ვიღებთ ტექსტს და ვშლით ზედმეტ სფეისებს
    const text = noteText.value.trim();

    // თუ title ან text ცარიელია, ვაჩვენებთ alert-ს და ვწყვეტთ ფუნქციას
    if(!title || !text){
        alert("Title and Note must not be empty!");
        return; // ფუნქცია აქვე მთავრდება
    }

    // ვამოწმებთ, რომ title უნიკალურია (არ არსებობს უკვე ნოტებში)
    const exists = notes.some(note => note.title.toLowerCase() === title.toLowerCase());
    if(exists){
        alert("ამ title-ით note is added!"); // თუ არსებობს, შეგვატყობინებს
        return; // ფუნქცია მთავრდება
    }

    // თუ ყველაფერი სწორია, ვამატებთ ნოტს notes მასივში ობიექტის სახით
    notes.push({ title, text });

    // გამოვაჩინოთ ნოტები გვერდზე
    renderNotes();

    // ვასუფთავებთ input-ებს, რომ ახალი ნოტი ადვილად დაემატოს
    titleInput.value = "";
    noteText.value = "";
});
