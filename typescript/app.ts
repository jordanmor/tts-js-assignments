const employees: Employee[] = [
  new Employee("Angela", "Meadows", "8605346655", "7 Brush Grown St.", "Simsbury", "CT", "06092", "Project Manager", 41, "female", 45.87, new Date("2015-08-03")),
  new Employee("Ned", "Stark", "8602881632", "92 Shelton Brook Rd.", "Glastonbury", "CT", "06033", "Jr. UX Designer", 22, "male", 22.87, new Date("2013-12-06")),
  new Employee("Sally", "Robbins", "8603682827", "124 Hallow Circle", "Hartford", "CT", "06154", "Web Developer", 34, "female", 30.22, new Date("2019-01-20")),
  new Employee("Harry", "Potter", "8601109938", "111 Tulson Dr.", "Farmington", "CT", "06030", "Full Stack Developer", 55, "male", 32.50, new Date("2018-11-11")),
  new Employee("Corinne", "Henderson", "8607227777", "88 Bellow Rd.", "Windsor", "CT", "06002", "Java Developer", 29, "female", 35.50, new Date("2016-02-27")),
  new Employee("John", "Kettle", "8605346655", "45 Willow Rd.", "Canton", "CT", "06019", "Java Developer", 28, "male", 33.65, new Date("2017-03-25")),
];

const populateEmployeeCards = (employees: Employee[]) => {
  let html = "";
  for(let employee of employees) {
    html += `
    <div class="card">
      <img class="employee-icon" src="images/employee-${employee.gender == "female" ? "female" : "male"}.png" class="card-img-top" alt="Employee Icon">
      <div class="card-body">
        <h5 class="card-title">${employee.getFullName()}</h5>
        <p class="card-text">${employee.getFullAddress()}</p>
        <p class="card-text">Phone: ${employee.getPhone()}</p>
        <p class="card-text">Age: ${employee.getAge()}</p>
        <p class="card-text">Position: ${employee.getOccupation()}</p>
        <p class="card-text">Weekly Salary: $${employee.getWeeklyWage().toFixed(2)}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Date employed: ${employee.getDateEmployed()}</small>
      </div>
    </div>
    `
  }
  document.getElementById("cardDeck").innerHTML = html;
}

populateEmployeeCards(employees);