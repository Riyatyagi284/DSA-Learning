console.log('Hello from MapProblem practice file');

// 1. Find frequency using Map function

function findFrequency(arr) {
    const myMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (myMap.has(arr[i])) {
            myMap.set(arr[i], myMap.get(arr[i]) + 1);
        } else {
            myMap.set(arr[i], 1);
        }
    }
    console.log("myMap1: ", myMap);
}

const array1 = [1, 1, 1, 2, 3, 4, 2, 4, 5, 5, 5, 6, 6, 7, 7];
findFrequency(array1);

// 2. find Duplicates

function findDuplicate(arr) {
    const myMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (myMap.has(arr[i])) {
            myMap.set(arr[i], myMap.get(arr[i]) + 1);
        } else {
            myMap.set(arr[i], 1);
        }
    }

    console.log("myMap2 :", myMap);

    // here i am getting my map data
    for (let i = 0; i < arr.length; i++) {
        if ((myMap.get(arr[i])) == 2) {
            console.log("my duplicates are here :", arr[i], myMap.get(arr[i]))
        }
    }
}

const array2 = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 7];
findDuplicate(array2);

// 3. Remove Duplicates

function removeDuplicates(arr) {
    const myMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (myMap.has(arr[i])) {
            myMap.set(arr[i], myMap.get(arr[i]) + 1);
        } else {
            myMap.set(arr[i], 1);
        }
    }

    myMap.forEach((values, key) => {
        if (values > 1) {
            myMap.delete(key);
        }
    })
    console.log(myMap);
}

const array3 = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 7];
removeDuplicates(array3);

// 4. count words in string 

function countWordInString(str) {
    const myStrMap = new Map();

    const words = str.toLowerCase().split(' ');
    console.log('Here are all my words', words);

    for (let i = 0; i < words.length; i++) {
        if (myStrMap.has(words[i])) {
            myStrMap.set(words[i], myStrMap.get(words[i]) + 1);
        } else {
            myStrMap.set(words[i], 1);
        }
    }

    console.log("myMap is here :", myStrMap);

}

const string1 = "Hello world hello again hello world Hi there";
countWordInString(string1);

// 5. Find Subarray with given sum

function findSubarrayWithGivenSum(arr, targetSum) {
    const myMap = new Map();
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum == targetSum) {
            console.log(`Subarray found from index ${0} to ${i}`);
            return;
        }

        if (myMap.has(targetSum - currentSum)) {
            console.log(`Subarray found from index ${myMap.get(targetSum - currentSum) + 1} to ${i}`);
            return;
        }
        myMap.set(currentSum, i)
    }

    console.log('No subarray found with given sum');
    return null;
}

const array4 = [10, 15, -5, 15, -10, 5];
const targetSum = 20;

findSubarrayWithGivenSum(array4, targetSum);