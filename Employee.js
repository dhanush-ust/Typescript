var Employee = /** @class */ (function () {
    function Employee(eid, name, password, email) {
        if (Employee.employees.has(eid)) {
            throw new Error("Employee ID  must be unique.");
        }
        this.eid = eid;
        this.name = name;
        this.password = password;
        this.email = email;
        Employee.employees.add(eid);
    }
    Employee.prototype.getEid = function () {
        return this.eid;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getEmail = function () {
        return this.email;
    };
    Employee.employees = new Set();
    return Employee;
}());
try {
    var emp1 = new Employee(1, "John Doe", "password123", "john@example.com");
    var emp2 = new Employee(2, "Jane Smith", "securepassword", "jane@example.com");
    console.log("Employee ID: ".concat(emp2.getEid(), ", Name: ").concat(emp2.getName(), ", Email: ").concat(emp2.getEmail()));
    var emp3 = new Employee(1, "Duplicate Employee", "pass123", "duplicate@example.com");
}
catch (error) {
    console.error(error.message);
}
