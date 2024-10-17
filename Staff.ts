class Staff {
    constructor(
        public eid: number,
        public name: string,
        public department: string,
        public salary: number
    ) {}
}

const staffList: Staff[] = [];


function addStaff(eid: number, name: string, department: string, salary: number) {
    const staff = new Staff(eid, name, department, salary);
    staffList.push(staff);
}


function getStaffByDepartment(department: string): Staff[] {
    return staffList.filter(staff => staff.department === department);
}


function getTotalSalaryByDepartment(department: string): number {
    return getStaffByDepartment(department)
        .reduce((total, staff) => total + staff.salary, 0);
}

addStaff(1, "John Doe", "Engineering", 60000);
addStaff(2, "Jane Smith", "Engineering", 70000);
addStaff(3, "Alice Johnson", "HR", 50000);
addStaff(4, "Bob Brown", "HR", 55000);
addStaff(5, "Charlie Davis", "Marketing", 40000);


const engineeringStaff = getStaffByDepartment("Engineering");
console.log("Engineering Staff:");
engineeringStaff.forEach(staff => {
    console.log(`ID: ${staff.eid}, Name: ${staff.name}, Salary: ${staff.salary}`);
});


const hrTotalSalary = getTotalSalaryByDepartment("HR");
console.log(`Total Salary in HR: $${hrTotalSalary}`);

const engineeringTotalSalary = getTotalSalaryByDepartment("Engineering");
console.log(`Total Salary in Engineering: $${engineeringTotalSalary}`);
