console.log('Hello from SET basic revision file');

// All about SET
// 1. collection of unique values.
// 2. values can be of any type, primitive values or objects.
// 3. typeof Set is 'Object' 
// 4. SET is an ES6 feature of js(2015)

// Create a new Set (Note: same as map)

const mySet1 = new Set(['a', 'b', 'c']);

// also another way

const mySet2 = new Set();
mySet2.add('a'), // here values are string type
mySet2.add('b'),
mySet2.add('c');

// now lets add values by storing them into a variable

const mySet3 = new Set();

const a = 'a'; const b = {name: 'object'};
mySet3.add(a);
mySet3.add(b);

// console all the values of set

const letters = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);

// using for-of loop
for( const x of letters) {
    console.log(x);
}

letters.forEach((value) => {
 console.log(`values are : ${value}`);
})

// why to use values() although we already have forOf and forEach for iterating over.

// const myValuesInLetters = letters.values();
// for(const x of myValuesInLetters) {
//     console.log("IteratorVlaues using valuesMethod", x);
// }
// console.log(`myValuesInLetters is : ${myValuesInLetters}`);

// check for any existing value using has() method

const checkIsPresent = letters.has('a');
console.log(`check is present or not ? : ${checkIsPresent}`);

// clear(), delete(), size(), entries(), values(), keys()

const myNewSet = new Set([1,2,3,4,5]);
myNewSet.delete(4);
console.log(myNewSet);
myNewSet.clear();
console.log(myNewSet.size());
