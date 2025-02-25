// Exercise 1

const checkAge = (age) =>
  age > 18 ? true : 'Do you have your parents permission to acces this page?';

checkAge(18);

// Exercise 2

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(3, 4));

// Exercise 3

const ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  'Do you agree?',
  () => alert('you agreed'),
  () => alert('You canceled the execution.')
);

// Exercise 4

// let calculator = {
//     num1: 0,
//     num2: 0,
//     read() {
//         this.num1 = parseInt(prompt("Enter the first number:"));
//         this.num2 = parseInt(prompt("Enter the second number:"));
//     },
//     sum() {
//         return this.num1 + this.num2;
//     },
//     multiply() {
//         return this.num1 * this.num2;
//     }

// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.multiply());


// Exercise 5

const min = (a, b) => (a > b ? b : a);
console.log(min(12, 45));
