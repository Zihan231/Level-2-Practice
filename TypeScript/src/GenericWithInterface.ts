interface IDeveloper<T>{
    name: string;
    salary: number;
    device: {
        name: string;
        brand: string;
        price: number;
        latest: boolean;
    },
    smartWatch: T
}

const PoorDeveloper: IDeveloper<{
    name: string; price: number; brand: string
}> = {
    name: "Zihan",
    salary: 25000,
    device: {
        name: "Hp Pavilion",
        brand: "Hp",
        price: 50000,
        latest: false,
    },
    smartWatch: {
        name: "Xiaomi watch 5",
        price: 2500,
        brand: "Xiaomi"
    }
}
const RichDeveloper: IDeveloper<{
    name: string; price: number; brand: string, latest: boolean, Imported: boolean
}> = {
    name: "Zihan 2.0",
    salary: 300000,
    device: {
        name: "Mac Book Pro",
        brand: "Apple",
        price: 250000,
        latest: true,
    },
    smartWatch: {
        name: "Apple Watch",
        price: 25000,
        brand: "Apple",
        latest: true,
        Imported: true
    },

}

console.log(PoorDeveloper)
console.log(RichDeveloper)