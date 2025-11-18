// let a = {a :5, b: 7, 1:9}
// let b = {g: 9, u :0}
// let obj =Object.create(a);
// console.log(obj.a)
// obj.y=10;
// obj.d=134;
// console.log(obj);

// let a = {a :5, b: 7, 1:9}
// let b = {g: 9, u :0}
// Object.defineProperty(b,{ 
// abc : {value:9
// }});
// log(b)

// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   age : 50,
//   eyeColor : "blue"
// };

// let text = Object.entries(person);

// const person = {
//   firstName: "John",
//   lastName: "D8e",
//   age: 50,
//   eyeColor: "blue"
// };
// Object.freeze(person)
// console.log(person);

// person.age = 51;

// console.log(person);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// Object.seal(person)
//  console.log(person);

// delete person.age;
//  console.log(person);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.seal(fruits);

// This will throw an error:
fruits.push("Kiwi");