// // Step 1: JavaScript object
// let student = {
//     name: "Aarav",
//     age: 20,
//     course: "Web Development"
// };

// // Step 2: Convert JavaScript object to JSON string
// let jsonString = JSON.stringify(student);
// console.log("JSON String:", jsonString);

// // Step 3: Convert JSON string back to JavaScript object
// let parsedStudent = JSON.parse(jsonString);
// console.log("JavaScript Object (after parsing):", parsedStudent);
// const json1 = {
//     "name": "John",
//     "age": 30,
//     "city": "New York"
// };
// console.log(JSON.stringify(json1));

// const json_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(JSON.stringify(json_list));

// const json_list2 = [
//     { "name": "John", "age": 30, "city": "New York" },
//     { "name": "John", "age": 30, "city": "New York" }
// ];
// console.log(JSON.stringify(json_list2));
// const nested_object = {
//     "name": "John",
//     "age": 30,
//     "city": "New York",
//     "skills": ["JavaScript", "Python", "Java"],
//     "address": {
//         "street": "123 Main St",
//         "city": "Any town",
//         "state": "CA"
//     }
// };

// async function fetchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(data);
//       console.log("Name:", data.name);
//       console.log("Company Name:", data.company.name);
//       console.log("Street:", data.address["street"]);
//       console.log(Object.keys(data)); //keys of the object
//       console.log(Object.values(data)); //values of the object
//       console.log(Object.entries(data)); //entries(key-value) of the object
//     } catch (error) {
//       console.error("Fetching error:", error);
//     }
//   }
  
//   fetchData();
// const json1 = {
//     "name": "John",
//     "age": 30,
//     "city": "New York"
//   }
  
//   const json2 = {
//     "email": "p7NLQ@example.com",
//     "phone": "1234567890"
//   }
  
//   console.log(json1);
//   console.log(json2);
//   json1.phone=5563667;
//   json1["email"]=json2.email;
//   delete json1.phone;//deletion purpose using this delete method
//   const merged_json = Object.assign({}, json1, json2); // Use an empty object as the target to avoid modifying json1
// const merged_json = { ...json1, ...json2 };
// console.log(merged_json);
// const json1 = {
//     "name": "John",
//     "age": 30,
//     "city": "New York"
//   };
  
//   console.log(json1);
  
//   for (let key in json1)  {
//     console.log(key + ": " + json1[key]);
//   }
  
//   Object.keys(json1).forEach(key => {
//     console.log(key + ": " + json1[key]);
//   });
  
//   Object.entries(json1).forEach(entry => {
//     const [key, value] = entry;
//     console.log(key + ": " + value);
//   });
  
//   Object.values(json1).forEach(value => {
//     console.log(value);
//   });
//   const user = {
//     "name": "John",
//     "age": 30,
//     "city": "New York",
//     "skills": ["JavaScript", "Python", "Java"],
//   };
  
const user = {
    "name": "John",
    "age": 30,
    "city": "New York",
    "skills": ["JavaScript", "Python", "Java"],
  };
  
  // destructuring the object
  const { name, age } = user;
  console.log(name);
  console.log(age);
  