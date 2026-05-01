
const start = performance.now();

for (let i = 0; i <= 100; i++){
    console.log(i)
}

const end = performance.now();

console.log(end - start, "ms");