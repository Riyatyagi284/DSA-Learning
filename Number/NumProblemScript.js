console.log("Hello from Numbers Problem script file");

// 1. Program to find roots of a Quadratic Equation

function findRootsOfQuadEqn(a, b, c) {
    if (a === 0) return "invalid";

    let d = b * b - 4 * a * c;
    let sqrtOfD = Math.sqrt(d);

    if (d > 0) {
        let x1 = ((-b + sqrtOfD) / (2 * a));
        let x2 = ((-b - sqrtOfD) / (2 * a));
        return ["Roots will be real and different", x1, x2];
    } else if (d === 0) {
        let x1 = (-b / (2 * a));
        return ["Roots will be real and same", x1, x1];
    } else if (d < 0) {
        let x1 = (-b / (2 * a));
        let x2 = ((sqrtOfD) / (2 * a));
        return ["Roots will be complex", x1 + "+" + x2 + '+ i' + x1 + x2];
    }

}

let a = 1, b = -7, c = 12;
const result1 = findRootsOfQuadEqn(a, b, c);

console.log("result1: " + result1);

// 2. Calculate the area of circle 

function calculateAreaOfCircle(r) {
    if (r < 0) return 'Invalid radius';

    return (3.14 * r * r);
}

let radius = 5;
const AreaOfCircle = calculateAreaOfCircle(radius);

console.log("Area of circle: " + AreaOfCircle);

////////////////////////////////////////////////////////
// 3a. Check if a number is prime or not 

function checkIsPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i < num; i++) {
        if (num / i === 0) return false;
    }

    return true;
}

const numToCheck = 4;
const resultOfNumCheck = checkIsPrime(numToCheck);
console.log('result of num is :', resultOfNumCheck);

// 3c.  Find Prime Numbers Before a Given Number

function findPrimeNumBeforeProvidedNum(num) {
    const primes = [];
    for (let i = 2; i < num; i++) {
        if (checkIsPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

let Number = 11;
const NoOfPrime = findPrimeNumBeforeProvidedNum(Number);
console.log('NoOfPrime', NoOfPrime);


// 3b. Can a prime number be expressed as a sum of two prime numbers

// function expressPrimeToAnotherTwoPrime(num) {
//     // which prime Numbers exist before that provided number ?
//     // ([2,5], [3,4])

//     const primeNumbers = findPrimeNumBeforeProvidedNum(num);
//     for (let i = 0; i < primeNumbers.length; i++) {
//         for (let j = 0; j < primeNumbers.length; j++) {
//             if (primeNumbers[i] + primeNumbers[j]) {
//                 return (primeNumbers[i], primeNumbers[j]);
//             }
//         }
//     }
// }

const number = 7;
const result = expressPrimeToAnotherTwoPrime(number);

console.log("result", result);

//////////////////////////////////////////////////////////////////

// 4. Replace all 0s with 1s in a given integer

// 5. Program to add two fractions

function gcd(x, y) {
    while (y != 0) {
        let temp = y;
        y = x / y;
        x = temp;
    }
}
function AddTwoFraction(n1, d1, n2, d2) {
    const numerator = n1 * d2 + n2 * d1;
    const denomenator = d1 * d2;

    const greatestCommonDivisor = gcd(numerator, denomenator);

    const simplifiedNumerator = numerator / greatestCommonDivisor;
    const simplifiedDenominator = denomenator / greatestCommonDivisor;

    return `${simplifiedNumerator}/${simplifiedDenominator}`;
}

let n1 = 2, d1 = 5, n2 = 3, d2 = 5
const result5 = AddTwoFraction(n1, d1, n2, d2);

console.log('result5', result5);