const get = (name: string | null):string => { //can pass null as a type in TS
    if (name) {
        return `Welcome ${name}`;
    } else {
        return "No name"
    }
}

console.log(get(null));