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