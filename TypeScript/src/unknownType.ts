const func = (value: unknown):string|number|undefined => {
    if (typeof value == "number") {
        return value * value;
    }
    if (typeof value == "string") {
        return value.split(" ")[0];
    }
}
console.log(func(50))
console.log(func("50 TK"))