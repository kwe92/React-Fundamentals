class Employee {
  constructor(fn, ln) {
    this.firstname = fn;
    this.lastname = ln;
  }

  fullname = () => `${this.firstname} ${this.lastname}`;
}

const empModel = (fn, ln) => ({
  firstname: fn,
  lastname: ln,
  fullname: () => `${fn} ${ln}`,
});

const someObject = { foo: "bar" };

const emp1 = new Employee("Kweayon", "Clark");
let emp2 = empModel("Kira", "Maali");

console.log("emp1 fullname function call:", emp1.fullname());

console.log("emp1 constructor property:", emp1.constructor);

console.log("emp2 fullname function call:", emp2.fullname());

console.log("emp2 constructor property:", emp2.constructor);

console.log("String object constructor property:", String.constructor);

console.log("Object constructor property:", someObject.constructor);

console.log("Object constructor property:", Object().constructor);

console.log(
  "function constructor property:",
  function() {
    return {};
  }.constructor
);

console.log("Number constructor property:", Number(3.14).constructor);

console.log("Number data type:", typeof Number(3.14));

console.log("String constructor property EXPLICIT:", String(3.14).constructor);

console.log("String constructor property IMPLICIT:", "3.14".constructor);

console.log("new Date constructor property:", new Date("2022").constructor);

console.log("emp1 toString:", emp1);

console.log("emp2 toString:", emp2);

console.log("emp1 data type:", typeof emp1);

console.log("emp2 data type:", typeof emp2);

let x = null;

console.log("null data type: ", typeof x);

console.log("emp2 before setting value to undefined:", emp2);

emp2 = undefined;

console.log("Setting the value of emp2 to undefined:", emp2);
// let x = null;
// console.log(x.constructor);

const emptyString = "";
if (emptyString.length === 0) console.log("Empty String");
else console.log("String value:", emptyString);

const emptyArray = [];
if (emptyArray.length === 0) console.log("Empty Array");
else console.log("Array elements:", emptyArray);
