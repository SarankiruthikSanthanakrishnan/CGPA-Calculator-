// script.js

let semesterCount = 1; // Start with 1 semester

// Function to add new semester input
function addSemester() {
  semesterCount++;
  const semesterInputs = document.getElementById("semester-inputs");
  const newSemester = document.createElement("div");
  newSemester.classList.add("semester");
  newSemester.innerHTML = `
    <label for="gpa${semesterCount}">Semester ${semesterCount} GPA:</label>
    <input type="number" id="gpa${semesterCount}" step="0.01" min="0.0" max="10.0" required>
  `;
  semesterInputs.appendChild(newSemester);
}

// Function to calculate CGPA
function calculateCGPA() {
  let totalGPA = 0;
  let validSemesters = 0;

  for (let i = 1; i <= semesterCount; i++) {
    const gpaInput = document.getElementById(`gpa${i}`);
    const gpaValue = parseFloat(gpaInput.value);

    if (!isNaN(gpaValue) && gpaValue >= 0 && gpaValue <= 10) {
      totalGPA += gpaValue;
      validSemesters++;
    }
  }

  if (validSemesters > 0) {
    const cgpa = totalGPA / validSemesters;
    document.getElementById("cgpa").textContent = cgpa.toFixed(2);
  } else {
    alert("Please enter valid GPA values.");
  }
}