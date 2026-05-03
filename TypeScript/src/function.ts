function fun1 (num1: number, num2: number): number{
    return num1 + num2;
}

console.log(fun1(8, 10));

/*Arrow Function */
let fun2 = (num1: number, num2: number): number => {
    return num1 + num2;
};

console.log(fun2(10, 20));

/* Function inside an object */
let user = {
    name: "zihan",
    balance: 80,
    addBalance(num: number):number {
        return this.balance + num;
    }
}
user.balance = user.addBalance(20);
console.log(user.balance);


/* Function in LOOP */
let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getSqr = (item: number[]): number[] => {
    let newArr: number[] = [];
    item.map((element: number): number => newArr.push(element * element));
    return newArr;
}

console.log(getSqr(arr));