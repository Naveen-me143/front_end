// 1. forEach() - Loop through and print each value
let nums1 = [10, 20, 30];
nums1.forEach((num, index) => {
  console.log(`forEach -> Index: ${index}, Value: ${num}`);
});

// 2. map() - Create a new array with values doubled
let nums2 = [1, 2, 3];
let doubled = nums2.map(num => num * 2);

// 3. filter() - Get values greater than 10
let nums3 = [5, 12, 8, 130];
let filtered = nums3.filter(num => num > 10);

// 4. reduce() - Sum all values
let nums4 = [1, 2, 3, 4];
let sum = nums4.reduce((total, num) => total + num, 0);

// 5. find() - Find first number greater than 10
let nums5 = [4, 9, 16, 25];
let found = nums5.find(num => num > 10);

// 6. push() - Add item to end
let fruits1 = ['apple', 'banana'];
fruits1.push('orange');

// 7. pop() - Remove last item
let fruits2 = ['apple', 'banana', 'orange'];
fruits2.pop();

// 8. unshift() - Add item to start
let fruits3 = ['banana'];
fruits3.unshift('apple');

// 9. shift() - Remove item from start
let fruits4 = ['apple', 'banana'];
fruits4.shift();

// 10. splice() - Remove 1 item at index 2, insert 'grape'
let fruits5 = ['apple', 'banana', 'cherry', 'date'];
fruits5.splice(2, 1, 'grape');

// 11. slice() - Get a piece of the array
let nums6 = [10, 20, 30, 40, 50];
let sliced = nums6.slice(1, 4);

// 12. includes() - Check if value exists
let nums7 = [1, 2, 3];

// 13. indexOf() - Find index of value
let nums8 = [10, 20, 30];

// 14. sort() - Sort the array
let nums9 = [30, 10, 20];
nums9.sort();

// 15. reverse() - Reverse the array
let nums10 = [1, 2, 3];
nums10.reverse();

// 16. join() - Turn into a string
let fruits6 = ['apple', 'banana', 'cherry'];
let joined = fruits6.join(', ');