const user={
    username: "divy",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`)
    }
}

// user.welcomeMessage()
// user.username='sam'
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username ='divy'
//     console.log(this)
//     console.log(this.username)//unidentified
// }

// chai()

// let chai=function (){
//     let username ='divy'
//     console.log(this.username)//unidentified
// }

// chai()

// let chai= () =>{
//     let username ='divy'
//     console.log(this.username)//unidentified
// }
// chai()

//simple arrow
// const addTwo=(num1,num2) =>{
// return num1+num2;
// }

//implicit type arrow function 
//here we use prenthess and if we have one liner output we dont need return statement 
//if we use curly counce we need to use return statement so look at it carefully 

// const addTwo=(num1,num2) => (num1+num2)

//in arrow function we ccan also return object and we can put it in parenthess like below
// right part will be return part of arrow 
const addTwo=(num1,num2) => ({useername: "divy"})

console.log(addTwo(3,4))

