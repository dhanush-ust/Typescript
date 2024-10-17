class Employee {
    private static employees: Set<number> = new Set();
    private eid: number;
    private age:number;
    private name: string;
    private password: string;
    private email: string;

    constructor(eid: number, name: string, password: string, email: string) {
        if (Employee.employees.has(eid)) {
            throw new Error(`Employee ID  must be unique.`);
        }
        this.eid = eid;
        this.name = name;
        this.password = password;
        this.email = email;
        Employee.employees.add(eid);
    }

    getEid(): number {
        return this.eid;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

   

    
}


try {
    const emp1 = new Employee(1, "John Doe", "password123", "john@example.com");
    const emp2 = new Employee(2, "Jane Smith", "securepassword", "jane@example.com");

    console.log(`Employee ID: ${emp2.getEid()}, Name: ${emp2.getName()}, Email: ${emp2.getEmail()}`);
    
    
   
    const emp3 = new Employee(1, "Duplicate Employee", "pass123", "duplicate@example.com");
} catch (error) {
    console.error(error.message);
}
