//array, object
let names: string[] = ["zihan", "niloy", "rabbi"];

names.push("rupok"); //is ok
names.push(20); //Gives error

let bazarList: (string | number | boolean)[] = ["Alu", 20, true];

bazarList.push(85); //ok

/**
 * Tuple
**/
let destination1: [string, string, number] = ["Dhaka", "Bhola", 180,]; //ok
destination1.push("Europe"); //ok

let destination2: readonly [string, string, number] = ["Dhaka", "Bhola", 180,]; //ok
destination2.push("Europe"); // readonly so no modification allowed

let destination3: [string, string, number] = ["Bhola", 180, "Dhaka"]; //Error: must be string string number

/**********************
 *Object 
 **********************/

let userData: {
    name: string;
    id: number;
} = {
    name: "Zihan",
    id: 173,
    status: true //error: if type is declared, no other attribute is useable.
}
 
let user2: {
    name: string;
    id: number;
    depth: ("CSE" | "EEE")
} = {
    id: 173,
    depth: "BBA" //error: Only CSE & EEE is allowed
}

let user3: { //error: if type is declared, we must declare that variable or make it optional
    name: string;
    id: number;
    depth: ("CSE" | "EEE")
} = {
    id: 173,
    depth: "CSE" 
}
 
let user4: {
    name?: string; //Optional type
    id: number;
    depth: ("CSE" | "EEE")
} = {
    id: 173,
    depth: "CSE" 
}

let user5: {
    name?: string; //Optional type
    id: number;
    depth: ("CSE" | "EEE")
    readonly FatherName: string;
} = {
    id: 173,
    depth: "CSE",
    FatherName: "Xyz"
}

user5.FatherName = "Abc" //error: Can't modify a readOnly variable;
     