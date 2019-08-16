var Employee = /** @class */ (function () {
    function Employee(employeeId, firstName, lastName, phone, street, city, state, zipCode, occupation, age, gender, hourlyWage, dateEmployed, certifications) {
        if (certifications === void 0) { certifications = []; }
        this.employeeId = employeeId;
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
        this.certifications = certifications;
    }
    Employee.prototype.getEmployeeId = function () {
        return this.employeeId;
    };
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
    Employee.prototype.getGender = function () {
        return this.gender;
    };
    Employee.prototype.getWeeklyWage = function (hoursPerWeek) {
        if (hoursPerWeek === void 0) { hoursPerWeek = 40; }
        return hoursPerWeek * this.hourlyWage;
    };
    Employee.prototype.getOccupation = function () {
        return this.occupation;
    };
    Employee.prototype.getDateEmployed = function () {
        return this.dateEmployed.getMonth() + "-" + this.dateEmployed.getDate() + "-" + this.dateEmployed.getFullYear();
    };
    Employee.prototype.getCertifications = function () {
        return this.certifications;
    };
    Employee.prototype.addCerts = function () {
        var certs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certs[_i] = arguments[_i];
        }
        for (var _a = 0, certs_1 = certs; _a < certs_1.length; _a++) {
            var cert = certs_1[_a];
            this.certifications.push(cert);
        }
    };
    return Employee;
}());
