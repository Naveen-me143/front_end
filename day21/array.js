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