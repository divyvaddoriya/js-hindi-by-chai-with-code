//array

const myArr=[0,1,2,3,4,5];

const myarr2=new Array(1,2,3,4);

//arr method;

// myArr.push(6)//add element at last
// console.log(myArr); 

// myArr.pop();//remove last elemnt
// console.log(myarr);


myArr.unshift(6);//add elemnt at first in array

myArr.shift();//remove the first elemtn in array


// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))


// const newArr=myArr.join();

// console.log(newArr);//convertes into string

//slice and splice

console.log("A" ,myArr);

//slice does not affects original array it make copy of array 
//which includes starting index but not last

const myn1=myArr.slice(1,3)  // include 1 but not 3

console.log(myn1);
console.log("B" ,myArr);

//splice


//it cut whole array like here we have 6 index and we dont want
// 1 to 3 so it changes original array and u can understand by seeing output
const myn2=myArr.splice(1,3)  // include 1 and 3 both

console.log(myn2);          //   [1,2,3]
console.log("C" ,myArr);    //   [0,4,5]


