console.log('Hello from stack ds learnings');

// stack basic operations -> push, pop, top-view, isEmpty

function createStack() { // using Array in js 
    const stack = [];
    // return {
    //     push: function (item) {
    //         stack.push(item);
    //     }
    // }

    const push = (item) => {
        stack.push(item);
        return stack;
    }

    const pop = () => {
        if (stack.length === 0) {
            console.log('Stack is empty');
            return null;
        }
        return stack.pop();
    }

    const viewTop = () => {
        return stack[stack.length - 1];
    }

    const isEmpty = () => {
        if (stack.length === 0) return true;
        else return false;
    }
    return { push, pop, viewTop, isEmpty };
}
const stack1 = createStack();

console.log(stack1.push(1));
console.log(stack1.push(2));
console.log(stack1.pop());
console.log(stack1.viewTop());
console.log(stack1.pop());
console.log(stack1.isEmpty());

// 1. problem: Nearest Greater Element to the Left

function nearestGreaterElementToLeft(arr) {
    const stack = [];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        // else the current element can be large or mab be no element left at this point
        if (stack.length === 0) {
            result.push(-1);
        } else {
            result.push(stack[stack.length - 1]);
        }

        stack.push(arr[i]);
    }

    return result;
}

const array1 = [4, 5, 2, 10, 8];
const res1 = nearestGreaterElementToLeft(array1);
console.log('res1', res1);



// Three ways to define functions
// 1) Arrow functons :
// push: (item) => stack.push(item);

// 2) function declaration :
//  function push(item) {
// stack.push(item);
// }

// 3) function expression :
//   const push = (item) => {
//     stack.push(item);
//   } 