// function sum(a,b){
//     console.log(a+b);
// }   

// sum(5,7);

//how to add multiple parameter in function 

function calculatesum(val1,val2,...num){
    return num;
}

// console.log(calculatesum(200,22,2,4,54,87,84,9894,800));


const user={
    username: 'divy',
    price: 999
}

function handleobj(anyoObj){
    console.log(`username is ${anyoObj.username} and price is ${anyoObj.price}`);
}

handleobj(user);