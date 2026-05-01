/**
 * JavaScript Set
 * A Set stores unique values only (no duplicates).
 * It preserves insertion order and can store any data type.
 */

// 1. Creating a Set and adding values
const set = new Set();

set.add("Apple");   // adds "Apple"
set.add("Mango");   // adds "Mango"
set.add("Banana");  // adds "Banana"
set.add("Banana");  // duplicate, ignored (no error)
set.add("banana");  // different because Set is case-sensitive
set.add(10);        // supports different data types

console.log(set);        // displays all unique values
console.log(set.size);   // number of unique elements



// 2. Removing duplicates from an array using Set
const arr = ["zihan", "niloy", "saki", "zihan"]; // duplicate "zihan"

const set2 = new Set(arr); // duplicates automatically removed

console.log(arr);   // original array (unchanged)
console.log(set2);  // unique values only



// 3. Iterating over a Set
// Sets do not support indexing like arrays

set2.forEach((value) => {
    console.log(value); // prints each value
});

// Alternative loop
for (const value of set2) {
    console.log(value);
}



// 4. Checking if a value exists
console.log(set2.has("rupok")); // false
console.log(set2.has("zihan")); // true



// 5. Deleting values
// delete() returns true if value existed, otherwise false
console.log(set2.delete("niloy"));   // true
console.log(set2.delete("unknown")); // false

console.log(set2);



// 6. Limitation: no array methods
// set2.push("Tahsin"); // error (Sets do not have push)

// correct way to add
set2.add("Tahsin");



// 7. Converting Set to Array
// needed if you want to use array methods
const newArray = Array.from(set2);

newArray.push("Extra Value"); // works because it's now an array

console.log(newArray);



// 8. Time complexity (important)
// add(), has(), delete() -> O(1) average
// iteration -> O(n)