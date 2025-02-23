
// Exercise 1
let user = {
    name: "John",
    years:30
}

// destructuring the object
const { name, years : age, isAdmin } = user;
console.log(name, age, isAdmin);
// isAdmin doesn t exist so its undefined;

// Exercise 2
// 1) i would name it ourPlanet and i define it with const because this variable can t change the name or assign a new value;
const ourPlanet = "Earth";

// 2) I would say let visitor because the visitor  can change the name and a new value can be assigned to it;
let visitor = "john";

// Exercise 3

// let phrase = "Hello"

// if (true) {
//     let user = "John";
//     function sayHi() {
//         alert(`${phrase}, ${user}`)
//     }
// }

// sayHi();

// sayHi()
// the output is undefined because the function is declared inside the block not outside the block , so exists only inside the block ,so have to be called inside the block, not outside the block; the output will be "Hello John" if the function is called inside the block;


// Exercise 4

// 1)const user = {};

//  2) const user = {
//     name:"John"
// }

// 3) const user = {
//     name: "John",
//     surname:"Smith"
// }
// 4) user.name = "Pete";

//  5) delete user.name;


//  Exercise 5

// const user = {
//     name: "John"
// }
// // It s not possible to reassign  an object declared with const but its possible to  assign new values to the properties of the object or to change the properties of the objects.In ourr case user.name = "Pete"  it will work

// user.name = "Pete"
// console.log(user);

// Exercise 6

// let salaries = {
//     Fred:100,
//     Ted:160,
//     Gaith:130
// }
// let sum = 0;
// for (let salary of Object.values(salaries)) {
//     sum += salary;
//     console.log(sum);
// }


// let salaries = {};
// let sum = 0;

// for (let salary of Object.values(salaries)) {
//     sum += salary;
    
// }
// console.log(sum);

// Exercise 7

// if (a + b < 4) {
//     result = 'Below';
//   } else {
//     result = 'Over';
// }
  
// ternary operator

const result = a + b < 4 ? "Below" : "Over";


// Exercise 8

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// ternary operator
const message =
    login === "Employee" ? "Hello" :
    login === "Director" ? "Greetings" :
    login === "" ? "No login" : "";

