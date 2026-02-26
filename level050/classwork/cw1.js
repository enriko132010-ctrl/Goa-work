const form = document.getElementById("userForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userName = e.target.fullName.value;

  result.textContent = "your name: " + userName;
  e.target.reset()
});



// e.target არის ის HTML ელემენტი,
// რომელზეც რეალურად მოხდა მოვლენა event_ი.
// e.preventDefault refresh_ს აჩერებს 