//immediately invoked function expression (IIFE)
(function chai(){
    console.log('db CONNECTED')
})();


((name)=>{
console.log(`db CONNECTED two ${name}`);
})('divy');


((name)=>{
console.log(`hi iam ${name}`);
})('divy');