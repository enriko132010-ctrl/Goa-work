let students = [];
let currentUser = null;

// Register (default role = user)
document.getElementById("registerBtn").addEventListener("click", () => {
  currentUser = {
    username: username.value,
    role: "user"
  };

  // თუ admin გინდა ტესტისთვის
  if (username.value === "admin") {
    currentUser.role = "admin";
  }

  roleInfo.textContent = `Role: ${currentUser.role}`;
});

// Add student
studentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(studentForm);
  const student = Object.fromEntries(formData);

  students.push(student);
  updateSubjects();
  renderTable();
  studentForm.reset();
});

// Render table
function renderTable(data = students) {
  tableBody.innerHTML = "";

  data.forEach((student, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${student.name}</td>
      <td>${student.surname}</td>
      <td>${student.age}</td>
      <td>${student.grade}</td>
      <td>${student.subject}</td>
      <td>
        ${currentUser?.role === "admin"
          ? `<button onclick="editStudent(${index})">Edit</button>
             <button onclick="deleteStudent(${index})">Delete</button>`
          : "—"}
      </td>
    `;

    tableBody.appendChild(tr);
  });
}

// Sort by grade
sortGrade.addEventListener("click", () => {
  students.sort((a, b) => a.grade - b.grade);
  renderTable();
});

// Filter by subject
subjectFilter.addEventListener("change", () => {
  const value = subjectFilter.value;
  if (!value) return renderTable();

  const filtered = students.filter(s => s.subject === value);
  renderTable(filtered);
});

// Update subject dropdown
function updateSubjects() {
  const subjects = [...new Set(students.map(s => s.subject))];
  subjectFilter.innerHTML = `<option value="">All Subjects</option>`;
  subjects.forEach(sub => {
    const opt = document.createElement("option");
    opt.value = sub;
    opt.textContent = sub;
    subjectFilter.appendChild(opt);
  });
}

// Delete (admin only)
function deleteStudent(index) {
  students.splice(index, 1);
  renderTable();
}

// Edit (admin only)
function editStudent(index) {
  const s = students[index];
  const newGrade = prompt("New grade:", s.grade);
  if (newGrade !== null) {
    s.grade = newGrade;
    renderTable();
  }
}
