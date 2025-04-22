//==========even
let arr1 = [10, 21, 36, 45, 50];
let arr2 = arr1.filter(
    (e, index, arr1) => {
        return e % 2 == 0; // even numbers
    }
);
console.log(arr1);
console.log(arr2);
 //imp question below
let inputArr = [6, 7, 8, 9, 10];
let cubeArr = inputArr.map(e => e * e * e); // Creates a new array with cubes of elements in inputArr.
let oddArr = inputArr.filter(e => e % 2 != 0); // Filters out odd numbers from inputArr.

let outputArr = inputArr.map(e => e * e * e).filter(e => e % 2 != 0); // Combines both operations: cubes elements, then filters odd cubes.
console.log(inputArr); // [6, 7, 8, 9, 10]
console.log(outputArr); // [216, 1000]
//arry of questions
let arr3 = [1, 2, 3, 4, 5];
let arr4 = arr3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // Adds the accumulator with the current value
}, 1); // Initial value is set to 1
console.log(arr3); // Output: [1, 2, 3, 4, 5]
console.log(arr4); // Output: 16
//--------------------------
// includes(): Checks if a certain value exists in an array
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.includes('banana')); // Output: true
console.log(fruits.includes('orange')); // Output: false

// find(): Returns the first element that meets a condition
let numbers = [5, 10, 15, 20];
let found = numbers.find(num => num > 10);
console.log(found); // Output: 15

// every(): Checks if all elements meet a condition
let nums = [2, 4, 6, 8];
console.log(nums.every(num => num % 2 === 0)); // Output: true
console.log(nums.every(num => num > 5)); // Output: false

// splice(): Modifies an array by adding/removing elements
let arr = ['apple', 'banana', 'cherry'];
arr.splice(1, 1); // Removes 1 element at index 1
console.log(arr); // Output: ['apple', 'cherry']
arr.splice(1, 0, 'banana'); // Adds 'banana' at index 1
console.log(arr); // Output: ['apple', 'banana', 'cherry']

// findIndex(): Returns the index of the first element that meets a condition
let index = numbers.findIndex(num => num > 10);
console.log(index); // Output: 2

// some(): Checks if at least one element meets a condition
let mixedNums = [3, 5, 7, 8];
console.log(mixedNums.some(num => num % 2 === 0)); // Output: true
console.log(mixedNums.some(num => num > 10)); // Output: false

// reverse(): Reverses the order of elements in an array
let reversedArr = [1, 2, 3];
reversedArr.reverse();
console.log(reversedArr); // Output: [3, 2, 1]

// toString(): Converts an array into a comma-separated string
let stringArr = ['apple', 'banana', 'cherry'];
console.log(stringArr.toString()); // Output: 'apple,banana,cherry'