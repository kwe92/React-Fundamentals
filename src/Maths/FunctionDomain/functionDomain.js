// Mathematically the bellow Function definition is called a procedure
// Mathematical Procedure
//  - A percise description of a computation
//  - Accepts inputs (arguments (values provided to parameters) / parameters(values a procedure exppects))

const f = (p, q) => {
  if (p > 1 && q > 1) {
    return p * q;
  }
  return 0;
};

// Function Declaration
// Power of 2 function
function g(s, expo) {
  if (expo > 2) return s ** expo;
  return s ** 2;
}

const a = 1;

const x = 3;

const y = 4;

const A = new Set([1, 1, 2, 3]);

const B = new Set([1, 2, 3, 4, 5, 5, 5, 8, 13]);

console.log(`${x} * ${y} = ${f(x, y)}`);
console.log(`${x} * ${y} ** 2 * = ${g(f(x, y), 3)}`);

console.log("Set A: ", A);
console.log("Set B: ", B);
