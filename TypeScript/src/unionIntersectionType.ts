type Employee = {
    name: string;
    Id: number;
}
type Manager = {
    teamSize: number;
    depth: string;
}

type EmployeeManager = Employee & Manager;

const manager1: EmployeeManager = {
    name: "Zihan",
    Id: 22,
    teamSize: 50,
    depth: "SQA"
}

console.log(manager1);