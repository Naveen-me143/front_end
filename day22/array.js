let fruits = ["Apple", "Banana", "Cherry"];
fruits.splice(1, 1, "Mango", "Peach"); 
console.log(fruits); // Output: ["Apple", "Mango", "Peach", "Cherry"]
//==================================
fruits.splice(2,0,'bye','hi')//above is not a good examp
//this is good example for splice.
console.log(fruits);//which remove 2 elemts and add bye hi in place of them.
//+++++++++++++++++++++++++++++++++
let arr1=[1,2,3,4,5,6,'hello'];
let output=arr1.some(
    (e)=>e%2==0
)
console.log(output)//o/p :true
//=======================+++++++++++++++++++
let arr2 = [1, 20, 3, 4, 5, 6, 'hello'];
let output2 = arr2.findIndex(
    (e) => e % 2 == 0 // even numbers
)
console.log(output2); // 1
//The output 1 is returned because the findIndex() method finds the first even number in the array arr2, which is 20.
//+++++++++++++++++++++++++reverse() method-----------
let arr3=['a','b','c'];
console.log(arr3);//['a','b','c']
arr3.reverse();
console.log(arr3);//['c','b','a']
//example2:
let arr4 = [1, 2, 3, 4, 5, 6, 'hello'];
console.log(arr4); // Original array

let output4 = arr4.reverse(); // Reverse the array
console.log(output4); // Output of reverse() ['hello', 6, 5, 4, 3, 2, 1]

 // Modified original array: [ 'hello', 6, 5, 4, 3, 2, 1 ]
//++++++++++++++++++++++++++++++++++toString() method------------
let arr5 = [100, 200, 300];
let output5 = arr5.toString();
console.log(arr5); // [100, 200, 300]
console.log(output5); // "100,200,300"
console.log(typeof output5); // "string"
//example2:
let arr6 = ['welcome', 'to', 'coding'];
let output6 = arr6.toString();
console.log(arr6); // [ 'welcome', 'to', 'coding' ]
console.log(output6); // "welcome,to,coding"
console.log(typeof output6); // "string"
//=============================join() method-------------------
let arr7 = [10, 20, 30];
let output7 = arr7.join('-');//we can use any symbol instead of - like , or space etc.
console.log(output7); // "10-20-30"
//=========================slice() method---------------
/*
### `slice()` Method
- The `slice()` method returns a **shallow copy** of a portion of an array into a new array object.
- It is selected from the **start** index to the **end** index (end **not included**).
- The **original array remains unchanged**.

*/
let arr8 = [10, 20, 30, 40, 50, 60];
let output8 = arr8.slice(2, 4);//[30, 40]
console.log(output8); // [30, 40]
//===========forEach() method-------------
let arr9 = [10, 20, 30, 40, 50, 60];

arr9.forEach((element, index, array) => {
  console.log(`element: ${element} - index: ${index}`);
});

//================
let arr10 = [10, 20, 30, 40, 50, 60];

for (let element of arr10) {
  console.log(element);
}
//===================
if (arr10.indexOf(100) === -1) {
    console.log("The value 100 was not found in the array.");
  } else {
    console.log("The value 100 was found at index:", arr10.indexOf(100));
  }
  /*==============difference
  indexOf()       findIndex()     includes()
  -------------------------------------------------------
  matchType       exactMatch      partialMatch    exactMatch
  returns         index or -1     index or -1     boolean
  work with objects yes             no            yes */
  /**
   * padStart()
   *    -the padStart() 
   */
  let str1 = 'hello';
console.log(str1.padStart(10, '*')); // hello*****
console.log(str1.padEnd(10, '*'));//hello*****
//==============================
let str2 = '  hello  ';
console.log(str2.length); // 11
str2.trimStart();
console.log(str2.length); // 11 (trimStart() doesn't modify the original string)
console.log(str2);       // '  hello  ' (original string remains unchanged)
str2.trimEnd();
console.log(str2.length); // 11 (trimEnd() also doesn't modify the original string)
//++++++++++++++++
let arr13 = [10, 40, 20, 30, 60, 40];
arr13.sort();
console.log(arr13); // [ 10, 20, 30, 40, 40, 60 ]
//++++++++++++++++++++++which is same like reduce ()
let arr14 = ['welcome', 'to', 'session'];
let result14 = arr14.reduceRight(
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + ' ' + currentValue;
  }
);
console.log(result14); // session to welcome
console.log(arr14);    // [ 'welcome', 'to', 'session' ]
//=================
GeolocationCoordinates