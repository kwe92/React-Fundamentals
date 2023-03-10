const x = 5;

// Identity Function

const f = (x) => x;

const f2 = (
  x,
  func = (x) => {
    x = "its over 9000!";
    console.log(x);
  }
) => {
  x = 43;
  func(x);
  return x;
};

console.log("Identity function f:", f(x));

console.log("Value of x in f:", f2(x));
