// // singleton initialization of object

// const tinderUser = new Object()

// tinderUser.id="123abc";
// tinderUser.name="divy"
// tinderUser.isLoggedIn=false

// // console.log(tinderUser);

// //object in object
// const regularUser={
//     email: "abc@gmail.com",
//     fullname : {
//         firstname: "vaddoriya",
//         middlename: "divy",
//         lastname: "jaysukhbhai"
//     }
// }

// const obj1={
// 1: "a",
// 2: "b"
// }
// const obj2={
// 3: "c",
// 4: "d"
// }

// // Object.assign(source,trget)
// // const obj3=Object.assign({},obj1,obj2);
// // console.log(obj3);


// //spread Operator
// const obj3= { ...obj1 , ...obj2};
// console.log(obj3);


// //printing all the key of object

// console.log(Object.keys(obj3))//[ '1', '2', '3', '4' ]

// console.log(Object.entries(obj3))
// // [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]

// console.log(obj3.hasOwnProperty('isloggedin')); //does obj3 has islogged in property ? false;


// lec-19

const course=
{
    coursename: " js in hindi",
    price : "999",
    courseInstructor: "hitesh"
}


//course.courseInstructor

//it means it will it will take courseinstructor as instructor from course 
//so  it will look like
// course.courseinstructor
const {courseInstructor: instructor} = course

console.log(instructor);


//**********JSON************
// {
//     "name": "hitesh",
//     "price": "free",
//     "coursename": "react"
// }

// [
//     {},
//     {},
//     {}
// ]