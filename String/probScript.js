console.log('Hello from problem string');

// 1. Check if a given string is a palindrome or not?
//  example, kayak, deified, deed, peep

function checkPalindrome(str) {
    let i = 0; j = str.length - 1;
    while (i < j) {
        if (str.charAt(i) === str.charAt(j)) {
            i++;
            j--;
        }
        else {
            console.log("Not Palindrome", str[i], str[j]);
            return false;
        }
    }
    console.log("Palindrome detected");
    return true;
}

const string = 'deed';
checkPalindrome(string);

// 2.Reverse a string

function reverseString(str) {
    const newStr = str.split('').reverse().join('');
    console.log(`newString is, ${newStr}`);
}

let string2 = "what is drain in your term?";
reverseString(string2);

// 3. Count number of vowels consonent and spaces in a string.

function countVowelConsonentSpaces(str) {
    let i = 0;
    let vowelsCount = 0; let spacesCount = 0; let consonentCount = 0;
    while (i < (str.length)) {
        if (str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'e' || str[i].toLowerCase() == 'i' || str[i].toLowerCase() == 'o' || str[i].toLowerCase() == 'u') {
            vowelsCount++;
        }
        else if (str[i] == ' ') {
            spacesCount++;
        }
        else {
            consonentCount++;
        }
        i++;
    }
    console.log(`Number of vowels: ${vowelsCount}`);
    console.log(`Number of spaces: ${spacesCount}`);
    console.log(`Number of consonants: ${consonentCount}`);
}

const string3 = "what is drain in your term";
countVowelConsonentSpaces(string3);

// 4. find all the ASCII value of character

function findAsciiCode(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(`${str[i]} is `, str.charCodeAt(i))
    }
}

let string4 = 'AVBJHGHJF';
findAsciiCode(string4);

// 5. Remove all vowels from string

function removeVowels(str) {
    let string = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() !== 'a' && str[i].toLowerCase() !== 'e' && str[i].toLowerCase() !== 'i' && str[i].toLowerCase() !== 'o' && str[i].toLowerCase() !== 'u') {
            string += str[i];
        }
    }
    console.log('string', string);
}

let string5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
removeVowels(string5);

// another way

function removeVowels2(str) {
    return str.replace(/[AEIOUaeiou]/g, '');
    console.log('string', string);
}

let string6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


//6. Remove characters from string except alphabets

function removeNonAlphabets(str) {
    console.log(str.replace(/[!@#$%^&*()_+=-.~-"';:.,1234567890]/g, ''));
    // console.log(str.replace(/[^a-zA-Z]/g, ''))
}

let string7 = "Hello123!World";
removeNonAlphabets(string7);

// 8. Remove brackets from an algebraic expression

function removeBrackets(str) {
  
} 

const string8 = 'a-(b-c-(d+e))-f';
removeBrackets(string8);