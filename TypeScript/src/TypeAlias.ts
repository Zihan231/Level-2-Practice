//for object
type User = {
    name: {
        firstName: string;
        middleName: string;   
        lastName: string;
    };
    id: string;
    email: string;
    skills: ("C++" | "C#" | "java" | "js" | "python")[];
    address: {
        District: string;
        Division: string;
    }
    isMarried: boolean;
}

const user1: User = {
    name: {
        firstName: "MD. Zihaul",
        middleName: "Islam",
        lastName: "Zihan",
    },
    id: "22-49229-3",
    email: "Zihanislam231@gmail.com",
    skills: ["C++","java","python"],
    address: {
        District: "Bhola",
        Division: "Barishal",
    },
    isMarried: false,
}

// console.log(user1);

//for function
type AddFun = (num1: number, num2: number) => number;

const sum: AddFun = (a, b) => {
    return a + b;
}

console.log(sum(5,5));

