//singelton
// Object.create


//object literals

const mysym=Symbol("key1");

const JSuser = {
name: "divy",
[mysym]: "key1",//using symbol as key
age: 18,
location: "surat",
isLoggedIn: true
};
//accessing elemnt
console.log(JSuser.name)
console.log(JSuser["name"])
//accessing symbol as key

console.log(JSuser[mysym]);