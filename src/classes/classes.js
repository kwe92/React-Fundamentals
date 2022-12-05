const Fraction = class {
    constructor(numerator, denominator){
        this.numerator = numerator;
        this.denominator = denominator;
    }

    value(){
        return this.numerator / this.denominator;
    }
};


class Arithmetic{
    constructor(){}
    static add(x,y){
        let result = x + y;
        return result;
    }
    static sub(x,y){
        let result = x - y;
        return result;
    }
    static multi(x,y){
        let result = x * y;
        return result;
    }
    static div(x,y){
        let result = x / y;
        return result;
    }
}

let l1 = [1,2]


console.log(new Fraction(8,4).value());
console.log(Arithmetic.add(5, 9));
console.log(l1);