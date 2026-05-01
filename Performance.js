
const start = performance.now();
let arr1 = [];
let arr2 = [];
for (let i = 0; i < 10000; i++){
    if (i < 5000) {
        arr1.push(i)
    }
    arr2.push(i);
}

const end = performance.now();

// console.log(end - start, "ms");

console.time("find");
arr1.find(n => n == 100);
console.timeEnd("find");
