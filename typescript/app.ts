const employees: Employee[] = [
  new Employee(1, "Angela", "Meadows", "8605346655", "7 Brush Grown St.", "Simsbury", "CT", "06092", "Project Manager", 41, "female", 45.87, new Date("2015-08-03") ,["MCS"]),
  new Employee(2, "Ned", "Stark", "8602881632", "92 Shelton Brook Rd.", "Glastonbury", "CT", "06033", "Jr. UX Designer", 22, "male", 22.87, new Date("2013-12-06"), ["BDes"]),
  new Employee(3, "Sally", "Robbins", "8603682827", "124 Hallow Circle", "Hartford", "CT", "06154", "Web Developer", 34, "female", 30.22, new Date("2019-01-20")),
  new Employee(4, "Harry", "Potter", "8601109938", "111 Tulson Dr.", "Farmington", "CT", "06030", "Full Stack Developer", 55, "male", 32.50, new Date("2018-11-11"), ["MBA"]),
  new Employee(5, "Corinne", "Henderson", "8607227777", "88 Bellow Rd.", "Windsor", "CT", "06002", "Java Developer", 29, "female", 35.50, new Date("2016-02-27"), ["BCS"]),
  new Employee(6, "John", "Kettle", "8605346655", "45 Willow Rd.", "Canton", "CT", "06019", "Java Developer", 28, "male", 33.65, new Date("2017-03-25")),
];

/**
 * @function addCertification Add certifications and degrees for a specific employee by their id
 * 
 * @param {number} id Employee id
 * @param {...string} certs Takes any number of arguments. Add certifications or degrees.
 */
const addCertification = (id: number, ...certs: string[]) => {
  for(let employee of employees) {
    if(employee.getEmployeeId() === id) {
      employee.addCerts(...certs);
    }
  }
}

/**
 * @function populateEmployeeCards Inject employees' information into HTML page in the form of Bootstrap 4 cards
 * 
 * @param employees Add an array of employees of type Employee[]
 */
const populateEmployeeCards = (employees: Employee[]) => {
  let html = "";
  for(let employee of employees) {
    html += `
    <div class="card">
      <img class="employee-icon" src="images/employee-${employee.getGender() == "female" ? "female" : "male"}.png" class="card-img-top" alt="Employee Icon">
      <div class="card-body">
        <h5 class="card-title">${employee.getFullName()}</h5>
        <p class="card-text">${employee.getFullAddress()}</p>
        <p class="card-text">Phone: ${employee.getPhone()}</p>
        <p class="card-text">Age: ${employee.getAge()}</p>
        <p class="card-text">Position: ${employee.getOccupation()}</p>
        <p class="card-text">Weekly Salary: $${employee.getWeeklyWage().toFixed(2)}</p>
        ${
          employee.getCertifications().length 
          ?
          `<p class="card-text">Certifications/Degrees: ${employee.getCertifications()}</p>`
          : 
          ""
        }
      </div>
      <div class="card-footer">
        <small class="text-muted">Date employed: ${employee.getDateEmployed()}</small>
      </div>
    </div>
    `
  }
  // Add employees info to the DOM in the form of a Bootstrap 4 card deck
  document.getElementById("cardDeck").innerHTML = html;
}

/* --- Initialize page --- */

// Add certificates for employee with id of 5
addCertification(5, "MCSD", "OCA"); 
// Populate page with employee info
populateEmployeeCards(employees);