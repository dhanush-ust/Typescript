var Staff = /** @class */ (function () {
    function Staff(eid, name, department, salary) {
        this.eid = eid;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    return Staff;
}());
var staffList = [];
// Function to add a staff member
function addStaff(eid, name, department, salary) {
    var staff = new Staff(eid, name, department, salary);
    staffList.push(staff);
}
// Function to get staff members by department
function getStaffByDepartment(department) {
    return staffList.filter(function (staff) { return staff.department === department; });
}
// Function to calculate total salary by department
function getTotalSalaryByDepartment(department) {
    return getStaffByDepartment(department)
        .reduce(function (total, staff) { return total + staff.salary; }, 0);
}
// Example Usage
addStaff(1, "John Doe", "Engineering", 60000);
addStaff(2, "Jane Smith", "Engineering", 70000);
addStaff(3, "Alice Johnson", "HR", 50000);
addStaff(4, "Bob Brown", "HR", 55000);
addStaff(5, "Charlie Davis", "Marketing", 40000);
// Find staff members by department
var engineeringStaff = getStaffByDepartment("Engineering");
console.log("Engineering Staff:");
engineeringStaff.forEach(function (staff) {
    console.log("ID: ".concat(staff.eid, ", Name: ").concat(staff.name, ", Salary: ").concat(staff.salary));
});
// Calculate total salaries by department
var hrTotalSalary = getTotalSalaryByDepartment("HR");
console.log("Total Salary in HR: $".concat(hrTotalSalary));
var engineeringTotalSalary = getTotalSalaryByDepartment("Engineering");
console.log("Total Salary in Engineering: $".concat(engineeringTotalSalary));
