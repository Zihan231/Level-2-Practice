//Only works for object type e.g. object, array, function

//1. For Object
interface IUser {
    name: string;
    id: number;
}
interface IStudent extends IUser{
    cgpa: number;
    credit: number;
}

interface ITeacher extends IUser{
    dept: string;
    salary: number;
}

const student1: IStudent = {
    name: "zihan",
    id: 5,
    cgpa: 3.96,
    credit: 148
}

const teacher1: ITeacher = {
    name: "Sagor",
    id: 6,
    dept: "CSE",
    salary: 50000
}

//2. For Array
interface IarrType {
    [index: number]: string
}

const names: IarrType = ["Zihan", "Niloy", "Raid"]

//3. For Functions
interface IFun {
    (num1: number, num2: number): number
}

const sum: IFun = (num1, num2) => {
    return num1 * num2;
}