console.log('Hello from sliding window practice exercise');

// 1. Maximum Sum Subarray of size K 

function maxSumSubarray(arr, n, k) {
    let i = 0; let j = 0; let maxSum = 0; let sum = 0;

    while (j < n) {
        sum = sum + arr[j];

        if ((j - i + 1) < k) {
            j++;
        }
        else if ((j - i + 1) == k) {
            maxSum = Math.max(maxSum, sum);
            sum = sum - arr[i];
            i++; j++;
        }
    }
    return maxSum;
}

const arr1 = [100, 200, 300, 400]; let k1 = 2; let n = arr1.length;
const res1 = maxSumSubarray(arr1, n, k1);

console.log('res1', res1);

// 2. First Negative Number in every Window of Size K 

function findNegNumInEveryWindow(arr, n, k) {
    let i = 0; let j = 0; let negList = []; let result = [];

    while (j < n) {
        if (arr[j] < 0) {
            negList.push(arr[j]);
        }
        if ((j - i + 1) < k) {
            j++;
        }

        // window size attain here
        if ((j - i + 1) == k) {
            //   push first negative number in resArray
            if (negList.length > 0) {
                result.push(negList[0]);
            } else {
                result.push(0);
            }
            // shift the window by 1
            // But before shifting lets empty the negList first

            if (arr[i] < 0) {
                negList.shift();
            }

            i++, j++
        }
    }
    return result;
}

const arr2 = [-8, 2, 3, -6, 10]; const k2 = 2; const n2 = arr2.length;
const res2 = findNegNumInEveryWindow(arr2, n2, k2);

console.log('res2', res2);

// 3. Count Occurrences Of Anagrams

function countAnagramOccurence(s1, s2, n1, k) {
    // steps
    // 1. set all the characters in myMap(now i know which char comes, how many times)
    // 2. first we will attain the window size , then we will check if this window contains the exact same number of characters
    // if yes (Increase the 'occurence')else (shift for the next window)
    let i = 0; let j = 0; let noOfOccurrences = 0;
    let s2Map = new Map();

    for (let char of s2) {
        s2Map.set(char, ((s2Map.get(char)) || 0) + 1);
    }

    let charCountInS2 = s2Map.size;

    while (j < n1) {
        let currentChar = s1[j];

        // If currentChar is in s2 then decrease count
        if (s2Map.has(currentChar)) {
            s2Map.set(currentChar, s2Map.get(currentChar) - 1);
            if (s2Map.get(currentChar) === 0) {
                charCountInS2--;
            }
        }

        // expand window till k
        if ((j - i + 1) < k) {
            j++;
        }

        // if k size window found
        else if ((j - i + 1) === k) {
            // If all char match then increase countOfOccurence
            if (charCountInS2 === 0) {
                noOfOccurrences++;
            }

            // Now, let's slide the window by removing left char
            let outgoingChar = s1[i];
            if (s2Map.has(outgoingChar)) {
                s2Map.set(outgoingChar, s2Map.get(outgoingChar) + 1);
                if (s2Map.get(outgoingChar) === 1) {
                    charCountInS2++;
                }
            }
            i++; j++;
        }
    }
    return noOfOccurrences;
}

let s1 = 'forxxorfxdofr'; let s2 = 'for';
let k = s2.length;
const n3 = s1.length;
const res3 = countAnagramOccurence(s1, s2, n3, k);

console.log('res3', res3);

// 4. Maximum of all subarrays of size k

function maxOfAllSubarray(arr, n, k) {
    let i = 0; let j = 0; let maxNum = 0; const result = [];

    while (j < n) {
        maxNum = Math.max(maxNum, arr[j]);

        if ((j - i + 1) < k) {
            j++;
        }

        if ((j - i + 1) === k) {
            result.push(maxNum);
            if (arr[i] === maxNum) {
                maxNum = 0;
            }
            i++; j++;
        }
    }
    return result;
}

const arr4 = [1, 3, -1, -3, 5, 3, 6, 7]; const k4 = 3; const n4 = arr4.length;
const res4 = maxOfAllSubarray(arr4, n4, k4);

console.log('res4', res4);

// 5. Longest Substring With K Unique Characters 

function longestSubstrWithUniqChar(str, k) {

    let i = 0; let j = 0; let lenOfSubString = 0;
    let myMap = new Map;
    while (j < str.length) {
        myMap.set(str[j], (myMap.get(str[j]) || 0) + 1);

        while (myMap.size > k) {
            myMap.set(str[i], myMap.get(str[i]) - 1);

            if (myMap.get(str[i]) === 0) {
                myMap.delete(str[i]);
            }
            i++;
        }

        if (myMap.size === k) {
            lenOfSubString = Math.max(lenOfSubString, (j - i + 1));
        }

        j++;
    }

    return lenOfSubString;
}

let string5 = "aabacbebebe"; let k5 = 3;
const res5 = longestSubstrWithUniqChar(string5, k5);

console.log('res5', res5);

// 6. Longest Subarray of sum k 

function longestSubArrayWithSumK(arr, k) {
    let i = 0; let j = 0; let sum = 0; let maxLength = 0;
    const n = arr.length;

    while (j < n) {

        sum += arr[j];

        if (sum === k) {
            maxLength = Math.max(maxLength, (j - i + 1));
        }

        while (sum > k) {
            sum = sum - arr[i];
            i++;
        }
        j++;
    }
    return maxLength;
}

const array6 = [1, 2, 3, 4, 5, 6]; const k6 = 6;
const res6 = longestSubArrayWithSumK(array6, k6);

console.log('res6', res6);

// 7. Longest Substring with without repeating characters

function findLongSubstrWithUniqueChars(str) {
    let i = 0; let j = 0; let maxLengthOfSub = 0;

    while (i < str.length) {
       console.log('i', i);
    }

    // return maxLengthOfSub;
}

const string2 = ['abcabcbb'];
findLongSubstrWithUniqueChars(string2);