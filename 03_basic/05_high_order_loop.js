//for of loop

const arr=[1,2,3,4,5];

// for (const val of arr) {
//     console.log(val);
// }

// //for in loop

// for (const key in arr) {
//   //here it give us key of array or objectset
//    console.log(arr[key]);
// }


//maps

const map=new Map();

map.set("In","India")
map.set("fr","France")
map.set("USA","united state of america")

// for (const [key,val] of map) {
//     console.log(key+ "==" +val);
// }

const myobj={
    js : "javascript",
    cpp : "c++",
    swift: "swift for apple"
};

// for (const key in myobj){
//     console.log(key +"    "+ myobj[key]);
// }


const programming =[ 'ruby','js','java','cpp','phython'];

programming.forEach((item,index,array)=>{
console.log(item + index + array);
})