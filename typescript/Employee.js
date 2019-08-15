var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, phone, street, city, state, zipCode, occupation, age, gender, hourlyWage, dateEmployed) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.age = age;
        this.gender = gender;
        this.hourlyWage = hourlyWage;
        this.dateEmployed = dateEmployed;
    }
    Employee.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Employee.prototype.getFullAddress = function () {
        return this.street + ", " + this.city + ", " + this.state + " " + this.zipCode;
    };
    Employee.prototype.getPhone = function () {
        return this.phone;
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    Employee.prototype.getWeeklyWage = function (hoursPerWeek) {
        if (hoursPerWeek === void 0) { hoursPerWeek = 40; }
        return hoursPerWeek * this.hourlyWage;
    };
    Employee.prototype.getGender = function () {
        return this.gender;
    };
    Employee.prototype.getOccupation = function () {
        return this.occupation;
    };
    Employee.prototype.getDateEmployed = function () {
        return this.dateEmployed.getMonth() + "-" + this.dateEmployed.getDate() + "-" + this.dateEmployed.getFullYear();
    };
    return Employee;
}());
