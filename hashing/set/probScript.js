// Solution of js commanly asked program

// 1. Program to find longest word in a given sentence ?
function findLongWord(str) {
    let words = str.split(' ');
    let longestWord = 0; let longestString = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord) {
            longestWord = words[i].length;
            longestString = words[i];
        }
    }
    console.log("longestWord", longestWord);
    console.log("longestString", longestString);
}

const string1 = "Most sentences should contain no more than 30 or 40 words. Your readers just don't have a very long attention span, and their feet tire easily."
findLongWord(string1);

// 2. Write a program to remove duplicates from an array ?

function removeDuplicates(arr) {
    console.log(new Set(arr));
}

const array1 = [1, 2, 3, 2, 4, 5, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10];
removeDuplicates(array1);

// Another way to remove duplicates

function removeDuplicates1(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }

    console.log("uniqueArray: " + uniqueArray)
}

removeDuplicates1(array1);

// 3. Program to find Reverse of a string without using built-in method ?

function reverseString(str) {
    const char = str.split('');
    let i = 0; j = char.length - 1;
    while (i < j) {
        let temp = str[i];
        char[i] = char[j];
        char[j] = temp;
        i++, j--
    }
    console.log("char", char);
    console.log("charToSting", char.join(''));
}

const string2 = "abcdefghijklmnopqrstuvwxyz";
reverseString(string2);

// 4. Find the max count of consecutive 1’s in an array ?

function findMaxConsecutives(arr) {
    let maxCount = 0; let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count++;
            maxCount = Math.max(count, maxCount);
        }
        if (arr[i] == 0) {
            count = 0;
        }
    }
    console.log("maxCount", maxCount);
}

let array2 = [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1];
findMaxConsecutives(array2);

// 5. Find the factorial of given number(eg. n! = n(n-1)(n-2) ..)

let product = 1;
function findFactorial(num) {
    if (num == 0 || num == 1) {
        console.log("1");
    } else {
        product = product * num;
        findFactorial(num - 1);
    }
    console.log(`product, ${product}`);
}

const number = 5;

console.log(findFactorial(number));

// 6. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]

function mergeArray(arr1, arr2) {
    let mergeArray = arr1.concat(arr2);
    console.log(mergeArray.sort((a, b) => a - b));
}

const arrayOne = [2, 3, 6, 5, 8, 1, 0]; const arrayTwo = [22, 12, 14, 56, 24, 52];
mergeArray(arrayOne, arrayTwo);

// sort array

// 17. Write a javascript function that sorts an array of numbers in ascending order.
// 18. Write a javascript function that sorts an array of numbers in descending order.

function sortArray(arr) {
    console.log("array is : ", arr);
    for (let i = 0; i < arr.length; i + 2) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    console.log("sort array is here :", arr);
}

console.log("Hello")
const arrayThree = [2, 3, 6, 5, 8, 1, 0];
sortArray(arrayThree);

// 7. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

function findSquare(val) {
    return val * val;
};

function checkValidArray(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let res = findSquare(arr1[i]);
        // let checkValue = checkValueInArr2(res, arr2);
        let checkValue = (arr2.includes(res));
    }
    if (checkValue == false) {
        return false;
    }
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 4, 8, 16, 25];
checkValidArray(arr1, arr2);

// 8. Given two strings. Find if one string can be formed by rearranging the letters of other string.

function checkAnagram(str1, str2) {
    const str1Map = new Map(str1);
    const str2Map = new Map(str2);

    if (str1Map == str2Map) {
        console.log("yes, Anagram")
    } else {
        console.log("no, Anagram")
    }
}

const str1 = "room";
const str2 = "omro";
checkAnagram(str1, str2);

// 10. Write logic to get unique objects from below array ?

// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}]

function getUniqueObject(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("array is ", arr[i]);
    }
}

const array = [{ name: "sai" }, { name: "Nang" }, { name: "sai" }, { name: "Nang" }, { name: "111111" }];
getUniqueObject(array);

//  11. Write a JavaScript program to find the maximum number in an array

function findMaxNumber(arr) {
    let maxNo = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNo) {
            maxNo = (arr[i]);
        }
    }
    console.log("maxNo is ", maxNo);
}

const numArr = [1, 2, 3, 4, 22, 5, 6, 7, 8];
findMaxNumber(numArr);

// 12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function getOnlyEvenNumbers(arr) {
    let newResArray = [];
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] / 2) == 0) {
            newResArray.push(arr[i]);
        }
    }
    console.log("newResultedArrayIs ", newResArray);
}

const numArray1 = [1, 2, 3, 4, 5, 6, 7, 8];
getOnlyEvenNumbers(numArray1);

// 13. Write a JavaScript function to check if a given number is prime.

function isPrime(num) {
    if (num === undefined || num == null || num == 0 || num == 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if ((num / i) == 0) return false;
    }

    return true;
}

const num = 12;
console.log(isPrime(num));

// 14. Write a JavaScript program to find the largest element in a nested array.
// [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]

function findLargestElementInNestedArray(arr) {
    let LargestElem = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[j] > LargestElem) {
                    LargestElem = (arr[j]);
                }
            }
        }
        else if (arr[i] > LargestElem) {
            LargestElem = arr[i];
        }
    }
    console.log("largest element", LargestElem);
}

const nestedArray = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];
findLargestElementInNestedArray(nestedArray);

// 15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
// ex: 0 1 1 2 3 5 8 13 21....

function findFibonacciSeries(num) {
    let fiboSeries = [];

    fiboSeries[0] = 0;
    fiboSeries[1] = 1;

    for (let i = 2; i < num; i++) {
        fiboSeries[i] = fiboSeries[i - 1] + fiboSeries[i - 2];
        fiboSeries.push(num[i]);
    }
    console.log("fiboSeries", fiboSeries);
}

const fiboNum = 7;
findFibonacciSeries(fiboNum);


// 16. Given a string, write a javascript function to count the occurrences of each character in the string.

function ToFindOccOfCharInString(str) {
    let wordsInString = str.split('');
    let charMap = new Map();

    for (let i = 0; i < wordsInString.length; i++) {
        if (charMap.has(wordsInString[i])) {
            charMap.set(wordsInString[i], charMap.get(wordsInString[i]) + 1);
        } else {
            charMap.set(wordsInString[i], 1);
        }
    }

    console.log("char map", charMap);
}

const myStr = "Here is my dummy string for the above program.";
ToFindOccOfCharInString(myStr);

// 19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.

function reverseWordsInSentence(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        console.log("reverse word", words[i].reverse());
    }
}

const str = "Here is my dummy string for the above program.";
reverseWordsInSentence(str);

// 20. Implement a javascript function that flattens a nested array into a single-dimensional array.

function flattenArray(arr) {
    let newFlatArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newFlatArray = newFlatArray.concat(flattenArray(arr[i]))
        } else {
            console.log(`Hey i am here, ${arr[i]}`);
            newFlatArray.push(arr[i]);
        }
    }
    
    console.log("newFlatArray: " + newFlatArray);
    return newFlatArray;
}
const flatArr = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];
const result = flattenArray(flatArr);
console.log("result", result);

// 21. Write a function which converts string input into an object
// ("a.b.c", "someValue");
// {a: {b: {c: "someValue"}}}

function stringToObjectConversion(str, value) {
 const keys = str.split('.');
 let result = {};
 let current = result;

 for(let i=0; i<keys.length; i++) {
    const key = keys[i];

    if( i === keys.length - 1 ) {
      current[key] = value;
    }
    else {
        current[key] = {};
        current = current[key];
    }
 }
 return result;
}

const string = 'a.b.c';
const value = 'someValue';
const result21 = stringToObjectConversion(string, value);

console.log("result of my 21Question", result21);