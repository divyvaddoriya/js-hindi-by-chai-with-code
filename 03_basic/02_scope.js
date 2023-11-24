// // var c=300;
// let a=300
// if(true){
//     // const b=20
//     let a=10
// //    c=30
//    console.log("inner :"+a)
// }
// console.log(a);
// // console.log(b);
// // console.log(c);


function one(){
    const username= 'divy';
    function two(){
        const website= 'google'
        console.log(username); //we can access this but 
    }
    // console.log(website); //we can not do tihis
    two()
}

one();