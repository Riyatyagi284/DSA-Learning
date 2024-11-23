console.log('Hello from Array practice problems');

// 1. Check if Array is a subset of another array or not

// way1 -- By nestedLoops
function isSubset1(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        console.log("arr2[i]", arr2[i]);
        let found = false;
        for (let j = 0; i < arr1.length; j++) {
            console.log("arr1[j]", arr1[j]);
            if (arr2[i] == arr1[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            return false;
        }

    }
    return true;
}

// way2 -- By Sorting
function isSubset2(arr1, arr2) {
    let sortArr1 = arr1.sort((a, b) => a - b);
    let sortArr2 = arr2.sort((a, b) => a - b);

    let i = 0; j = 0;
    while (i < sortArr1.length && j < sortArr2.length) {
        if (sortArr1[i] < sortArr2[j]) {
            i++
        } else if (sortArr1[i] == sortArr2[j]) {
            i++; j++;
        } else {
            return false;
        }
    }
    return true;
}


// way3 -- By Hashing
function isSubset3(arr1, arr2) {
    let myMap = new Map(arr1);

    for (let i = 0; i < arr2.length; i++) {
        if (!myMap.has(arr2[i])) {
            return false;
        }
    }
    return true;
}

const array1a = [11, 1, 13, 21, 3, 7]; const array1b = [11, 3, 7, 1];
const res = isSubset2(array1a, array1b);

console.log('Is array1b a subset of array1a?', res);

// 2. Search an element in an array( i) In Unsorted Array + LinearSearch ii) In Sorted Array + LinearSearch iii) In SortedArray + BinarySearch iv) In SortedArray + FibonacciSearch 

function searchElement1(elem, arr) { // In (Unsorted/Sorted)Array + LinearSearch
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== elem) {
            continue;
        } else {
            return i;
        }
    }
}

function searchElement2(elem, arr) { // In sortedArray + BinarySearch
    let start = 0; let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] < elem) {
            start = mid + 1;
        } else if (arr[mid] > elem) {
            end = mid - 1;
        } else if (arr[mid] == elem) {
            return mid;
        }
    }
    return "Not found"
}

const element = 98;
// const array2 = [12, 34, 10, 6, 40]
const array2 = [12, 44, 88, 98];
const res2 = searchElement2(element, array2);
console.log("result2 :", res2);

// 3. Sort an array according to the order defined by another array

function sortArr1AccToArr2(arr1, arr2) {
    let result = [];
    let myMap = new Map();

    // set array1 in map.
    for (let elem of arr1) {
        myMap.set(elem, (myMap.get(elem) || 0) + 1);
    }

    for (let elem of arr2) {
        if (myMap.has(elem)) {
            let noOfItem = myMap.get(elem);
            while (noOfItem) {
                result.push(elem);
                noOfItem--;
            }
            myMap.delete(elem);
        }
    }

    let remainingElements = [];
    for (let [elem, count] of myMap) {
        while (count > 0) {
            remainingElements.push(elem);
            count--;
        }
    }

    remainingElements.sort((a, b) => a - b);
    result.push(...remainingElements);

    console.log("Sorted Array:", result);
}

const array3a = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8];
const array3b = [2, 1, 8, 3];

sortArr1AccToArr2(array3a, array3b);

// 4. Circular Rotation of an array by "K" position
// ex: if (k==4), count elements till 4 and then shift all the other remaining elements in the start of the array and then place all the counted elements after that.

function circularRotateAnArray(arr, k) {
    // push all the elements till K count to temp Array
    // place all the remaining items to the start of Array.
    // Lastly place all the temp elements to the end of Array One-By-One.

    let tempChild = arr.slice(0, k + 1);

    for (let i = k; i < arr.length; i++) {
        arr[i - k] = arr[i];
    }

    for (let i = arr.length - k; i < arr.length; i++) {
        arr[i] = tempChild[i - (arr.length - k)];
    }

    console.log("array is", arr);
    // need to handle a little issue
}

const array4 = [1, 2, 3, 4, 5, 6];
circularRotateAnArray(array4, k = 3);

// 5. Finding equilibrium index of an array
// Equilibrium Indexes => sum of elements at lower indexes equals the sum of elements at higher indexes.
function findEquilibriumIndex(arr) {

}

let array5 = [-7, 1, 5, 2, -4, 3, 0];
findEquilibriumIndex(array5,)

// 6. Sorting elements of an array by frequency

// function sortArrayByFrequency(arr) {
//     // set elements into map
//     // then according to map(value) arrange elements in ascending order

//     let myMap = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         myMap.set(arr[i], (myMap.get(arr[i]) || 0) + 1);
//     }

//     let mapValueInArray = Array.from(myMap.values());
//     mapValueInArray.sort((a, b) => a - b);

//     // Let's Rebuild the array 
//     let sortedArray = [];

//     for (let [key, value] of mapValueInArray) {
//         sortedArray.push(...Array(value).fill(key));
//     }

//     return sortedArray;
// }

// let array6 = [1, 2, 3, 2, 8, 5, 3, 2, 2, 5, 8, 5, 5, 5, 8];
// const sortedArray = sortArrayByFrequency(array6);

// console.log("sortedArray: " + sortedArray);

// 7. Replace each element of the array by its rank in the array (PENDING)

// 8. Maximum product subarray in an array
function maxProductSubarray(arr) {
    let maxProduct = 1;
    for (let i = 0; i < arr.length; i++) {
        let currentProduct = 1;
        for (let j = i; j < arr.length; j++) {
            currentProduct *= arr[j];
            maxProduct = Math.max(maxProduct, currentProduct);
        }
    }
    return maxProduct;
}

function maxProductSubarray1(arr) {
    if (arr.length === 0) return 0;

    let maxProduct = arr[0];
    let minProduct = arr[0];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];

        if (current < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        maxProduct = Math.max(current, maxProduct * current);
        minProduct = Math.min(current, minProduct * current);
        result = Math.max(result, maxProduct);
    }
    return result;
}

let array7 = [-2, -3, 4, -1, -2, 1, 5, -3];
const productResult = maxProductSubarray1(array7);
console.log("productResult: " + productResult);

// 9.  Find the only non-repeating element in a given array

function findNonRepeatingElements(array) {
    let myMap = new Map();
    let nonRepeatingElem = [];

    for (let i = 0; i < array.length; i++) {
        myMap.set(array[i], (myMap.get(array[i]) || 0) + 1);
    }

    for (let [key, value] of myMap) {
        if (value === 1) {
            nonRepeatingElem.push(key);
        }
    }
    return nonRepeatingElem;
}

const array8 = [1, 1, 2, 2, 3];
const nRepeatResult = findNonRepeatingElements(array8);

console.log("nRepeatResult: " + nRepeatResult);

// 10. Given an array of pairs, find all symmetric pairs in it

function findSymmetricPairs(arr) {
    let myMap = new Map(); const symmetricPairs = [];

    for (let i = 0; i < arr.length; i++) {
        let [a, b] = arr[i];
        if ((myMap.has(b) && myMap.get(b) === a)) {
            symmetricPairs.push([b, a]);
        }
        myMap.set(a, b);
    }

    return symmetricPairs;
}

const array9 = [[1, 2], [3, 4], [2, 1], [4, 3], [5, 6]];
const result9 = findSymmetricPairs(array9);
console.log("result9", result9);

// 11. Remove duplicates from unsorted arrayx

function removeDuplicates(array) {
 let mySet = new Set(array);
 console.log("mySet", mySet);
}

function removeDuplicates1(array) {

}

const array10 = [1, 2, 3, 4, 2, 5, 6, 7, 8, 9, 1, 2, 3, 4];
removeDuplicates1(array10);