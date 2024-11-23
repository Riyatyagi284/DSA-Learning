console.log('Hello from "BASICS OF MAP"');

// 1. holds key-value pairs where the keys can be any datatype.
// 2. Map remembers the original insertion order of the keys.
// NOTE: typeof map is "Object"

// lets create a map
const myFirstMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
]);

// ALSO -> i can set values to map

const secondMap = new Map();
// here i used string datatype as key
secondMap.set('key1', 'value1'); // set helps to insert + update the existing one
secondMap.set('key2', 'value2');
secondMap.set('key3', 'value3');
secondMap.set('key4', 'value4');

secondMap.get('key1'); // return "value1"

const res = secondMap.size;
console.log("size", res);

// Check if a key exists in the map
const res1 = secondMap.has('key2');
console.log("res1", res1);

secondMap.forEach ((value, key) => {
    console.log(key, value)
})

// lets use an object as key 
const apples = {name: 'Apple'};
const bananas = {name: 'Banana'};

const fruits = new Map();
fruits.set(apples, 500);
fruits.set(bananas, 600);

const res2 = fruits.get(apples);
const res3 = fruits.get(bananas);

console.log(res2, res3); // 500, 600


// Now, its time to use Array as key
const fruitsArray1 = [
    {name: 'Apple', qty: 200},
    {name: 'Banana', qty: 300},
    {name: 'Grapes', qty: 400},
    {name: 'Oranges', qty: 500},
    {name: 'Kiwi', qty: 600},
];

const fruitsArray2 = [
    {name: 'Apple', qty: 200},
    {name: 'Banana', qty: 300},
    {name: 'Grapes', qty: 400},
    {name: 'Oranges', qty: 500},
    {name: 'Kiwi', qty: 600},
];
const arrayMap = new Map();
arrayMap.set(fruitsArray1, 2000);
arrayMap.set(fruitsArray2, 3000);

const res4 = arrayMap.get(fruitsArray1);
console.log(arrayMap);

// Map.groupBy() method
const functionToGroupQty = (qty) => {
    return qty > 200 ? 'ok qty' : 'low qty';
} 

const result = Map.groupBy(fruitsArray1, functionToGroupQty);
console.log("result of groupBy method: ", result);


secondMap.delete('key1'); 

secondMap.clear();
