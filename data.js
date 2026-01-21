const students = [
  "Mehrnoosh",
  "Maria",
  "Oumaima",
  "Yiting",
  "Sunitha",
  "Sukhwinder",
  "Prachi",
  "Busra",
  "Paloma",
  "Annamani",
  "Sravani",
  "Natalia",
  "Fatima",
  "Tejaswini",
  "Fulya",
  "Gloryfel",
];
const teachers = [
  "Henderson",
  "Tifana",
  "Iga",
  "Engiber",
  "Kumaran",
  "Lukáš",
  "Tim",
];

const button = document.createElement("button");
button.innerText = "Assign students to teachers";
document.body.appendChild(button);
button.addEventListener("click", () => {
  const shuffledStudentsArray = students.sort(() => Math.random() - 0.5);
  const shuffledTeachersArray = teachers.sort(() => Math.random() - 0.5);
  const assignedStudents = shuffledStudentsArray.map((student, index) => {
    return {
      student,
      teacher: shuffledTeachersArray[index % shuffledTeachersArray.length],
    };
  });

  const existingTable = document.querySelector("table");
  if (existingTable) {
    existingTable.remove();
  }
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = "<th>Student</th><th>Teacher</th>";
  table.appendChild(headerRow);
  assignedStudents.forEach(({ student, teacher }) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student}</td><td>${teacher}</td>`;
    table.appendChild(row);
  });
  document.body.appendChild(table);
  button.innerText = "Reassign students to teachers";
  button.style.backgroundColor = "lightgreen";
});
