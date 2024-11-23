console.log('Hello from BinarySearch problem solving');

// 1. Search an element using Binary Search

function searchElement(arr, n, i, j) {

    while (i <= j) {
        let mid = Math.floor((i + j) / 2);

        if (arr[mid] === n) return mid;

        else if (arr[mid] > n) {
            j = mid - 1;
        }

        else {
            i = mid + 1;
        }
    }
    return -1;
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; const target = 9;
let i = 0; let j = array1.length - 1;

const res1 = searchElement(array1, target, i, j);

console.log('res1', res1);

// 2. Search Element in DescendingOrder Array using Binary Search 

function searchElementInDescendingOrderArray(arr, target) {
    let i = 0; j = arr.length - 1;

    while (i <= j) {
        let mid = Math.floor((i + j) / 2);

        if (arr[mid] == target) return mid;

        else if (arr[mid] < target) {
            j = mid - 1;
        }

        else {
            i = mid + 1;
        }
    }

    return -1;
}

const array2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]; const target2 = 9;
const res2 = searchElementInDescendingOrderArray(array2, target2);

console.log('res2', res2);

// 3. find first occurence of an element

function findFirstOccurrence(arr, target) {
    let i = 0; i < arr.length - 1; let result;

    while (i <= j) {
        let mid = Math.floor((i + j) / 2);

        if (arr[mid] === target) {
            result = mid;
            j = mid - 1;
        }

        else if (arr[mid] < target) {
            i = mid + 1;
        }

        else {
            j = mid - 1;
        }
    }
    return result;
}

let array3 = [2, 4, 10, 10, 10, 10, 18, 20]; const target3 = 10;
const res3 = findFirstOccurrence(array3, target3);

console.log('res3', res3);

// 4. find last occurence of an element

function findLastOccurrence(arr, target) {
    let i = 0; let j = arr.length - 1; let result = -1;

    while (i <= j) {
        let mid = Math.floor((i + j) / 2);

        if (arr[mid] === target) {
            result = mid;
            i = mid + 1;
        }

        else if (arr[mid] > target) {
            j = mid - 1;
        }

        else {
            i = mid + 1;
        }
    }
    return result;
}

let array4 = [2, 4, 10, 10, 10, 10, 18, 20]; const target4 = 10;
const res4 = findLastOccurrence(array4, target4);

console.log('res4', res4);

// 5. No. of times a sortedArray is rotated
function countRotation(arr) {
    let i = 0; let j = arr.length - 1;

    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        let prev = (mid - 1 + arr.length) / arr.length;
        let next = (mid + 1) / arr.length;

        if ((arr[mid] <= prev) && (arr[mid] <= next)) {
            return mid;
        }

        // if first half is sorted then ans should be in righthalf (unsorted Array)
        else if (arr[mid] >= arr[i]) {
            i = mid + 1; // move to unsortedArray now,
        }
        else {
            j = mid - 1;
        }
    }
    return -1;
}

const array5 = [5, 6, 7, 8, 9, 10, 1, 2, 3];
const res5 = countRotation(array5);

console.log('res5', res5);

// 6. Find an element in the rotated sorted array

function searchElementInRotatedArray(arr, target) {
    const index = countRotation(arr);

    const ans1 = searchElement(arr, target, i = 0, j = index - 1);
    const ans2 = searchElement(arr, target, i = index, j = arr.length - 1);

    if (ans1 !== -1) return ans1;
    else if (ans2 !== -1) return ans2;

    return -1;
}

const array6 = [11, 12, 15, 18, 2, 5, 6, 8]; const target6 = 15;
const res6 = searchElementInRotatedArray(array6, target6);

console.log('res6', res6);

// 7. Search Element in a nearly sortedArray(i'th index can be found at [i, i-1, i+1]) 

function searchInNearlySortedArray(arr, target) {
    let i = 0; let j = arr.length - 1;

    while (i <= j) {
        let mid = Math.floor((i + j) / 2);

        if (arr[mid] === target) return mid;
        if (((mid - 1) >= i) && arr[mid - 1] === target) return mid - 1;
        if (((mid + 1) <= j) && arr[mid + 1] === target) return mid + 1;

        if (arr[mid - 1] > target) {
            j = mid - 2;
        }

        else {
            i = mid + 2;
        }
    }
}

const array7 = [5, 10, 30, 20, 40]; const target7 = 40;
const res7 = searchInNearlySortedArray(array7, target7);

console.log('res7', res7);

// 8. Find Floor of an element in the sorted array

function findFloor(arr, target) {
    let i = 0; let j = arr.length - 1; let max_res = -1;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);

        if (arr[mid] === target) return mid;

        else if (arr[mid] > target) {
            j = mid - 1;
        }

        else {
            max_res = Math.max(mid, max_res);
            i = mid + 1;
        }
    }
    return max_res;
}

const array8 = [1, 2, 3, 4, 8, 10, 10, 12, 19]; const target8 = 5;
const res8 = findFloor(array8, target8);

// floor of 5 is => Greatest element (out of all the smaller elements than 5)

console.log('res8', res8);

// 9. Find Ceil of an element in the sorted array

function findCeil(arr, target) {
    let i = 0; j = arr.length - 1; let min_elem = -1;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);

        if (arr[mid] === target) return mid;

        else if (arr[mid] < target) {
            i = mid + 1;
        }

        else {
            min_elem = mid;
            j = mid - 1;
        }
    }
    return min_elem;
}

const array9 = [1, 2, 3, 4, 8, 10, 10, 12, 19]; const target9 = 5;
const res9 = findCeil(array9, target9);

// ceil of 5 is => Smallest element (out of all the greater elements than 5)

console.log('res9', res9);

// 10 Find the next alphabetical element 

function findNextAlphabeticalElement(arr, key) {
    let i = 0; let j = arr.length - 1; let res = null;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);

        if (arr[mid] > key) {
            res = arr[mid];
            j = mid - 1;
        }

        else {
            i = mid + 1;
        }
    }

    return res || 'No next element found'
}

const array10 = ['a', 'b', 'c', 'd', 'e']; const key10 = 'c';
const res10 = findNextAlphabeticalElement(array10, key10);

console.log('res10', res10)

// 11 Find the position of an element in an infinitely sorted array

function findElemInAnInfinitelySortedArray(arr, target) {

}

const array11 = [1, 3, 5, 7, 9, 10, 15, 20, 25, 30]; const key11 = 9;
findElemInAnInfinitelySortedArray(array11, key11);

// http://127.0.0.1:5500/index.html