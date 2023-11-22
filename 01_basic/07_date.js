//Dates;

let myDate=new Date();


// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());


let newDate=new Date();

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getSeconds());
console.log(newDate.getDate());


console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))