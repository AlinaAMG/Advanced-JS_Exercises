
// 1)Exercise 1
function filterRange(arr, a, b) {
    let filtered = arr.filter(n => n >= a && n<=b);
    return filtered;
}
console.log(filterRange([5, 3, 8, 1], 1, 4));

// Exercise 2

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 29 }

let users = [john, pete, mary]
let names = users.map(x => x.name);
console.log(names);

// Exercise 3

function getAverageAge(users) {
    let age = users.map(x => x.age);
    let sumAge = age.reduce((acc, value) => acc + value, 0);
    let averageAge = sumAge / age.length;
    return averageAge;
    
}
console.log(getAverageAge(users));
