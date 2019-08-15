// const sayHello = (person: string): string => `Hello ${person}`;
// const user = "Super Student";
// const employeeOne: Employee = new Employee("John", "Smith", "8605346655", "45 Willow Rd.", "Canton", "CT", "06019", "Web Developer", 28, 33.65);
// console.log(employeeOne.getFullAddress());
// console.log(`$${employeeOne.getWeeklyWage().toFixed(2)}`);
var employees = [
    new Employee("Angela", "Meadows", "8605346655", "7 Brush Grown St.", "Simsbury", "CT", "06092", "Project Manager", 41, "female", 45.87, new Date("2015-08-03")),
    new Employee("Ned", "Stark", "8602881632", "92 Shelton Brook Rd.", "Glastonbury", "CT", "06033", "Jr. UX Designer", 22, "male", 22.87, new Date("2013-12-06")),
    new Employee("Sally", "Robbins", "8603682827", "124 Hallow Circle", "Hartford", "CT", "06154", "Web Developer", 34, "female", 30.22, new Date("2019-01-20")),
    new Employee("Harry", "Potter", "8601109938", "111 Tulson Dr.", "Farmington", "CT", "06030", "Full Stack Developer", 55, "male", 32.50, new Date("2018-11-11")),
    new Employee("Corinne", "Henderson", "8607227777", "88 Bellow Rd.", "Windsor", "CT", "06002", "Java Developer", 29, "female", 35.50, new Date("2016-02-27")),
    new Employee("John", "Kettle", "8605346655", "45 Willow Rd.", "Canton", "CT", "06019", "Java Developer", 28, "male", 33.65, new Date("2017-03-25")),
];
var populateEmployeeCards = function (employees) {
    var html = "";
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var employee = employees_1[_i];
        html += "\n    <div class=\"card\">\n      <img class=\"employee-icon\" src=\"images/employee-" + (employee.gender == "female" ? "female" : "male") + ".png\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">" + employee.getFullName() + "</h5>\n        <p class=\"card-text\">" + employee.getFullAddress() + "</p>\n        <p class=\"card-text\">Phone: " + employee.getPhone() + "</p>\n        <p class=\"card-text\">Age: " + employee.getAge() + "</p>\n        <p class=\"card-text\">Position: " + employee.getOccupation() + "</p>\n        <p class=\"card-text\">Weekly Salary: $" + employee.getWeeklyWage().toFixed(2) + "</p>\n      </div>\n      <div class=\"card-footer\">\n        <small class=\"text-muted\">Date employed: " + employee.getDateEmployed() + "</small>\n      </div>\n    </div>\n    ";
    }
    document.getElementById("cardDeck").innerHTML = html;
};
populateEmployeeCards(employees);
