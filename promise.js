
/* 
What is a Promise?
A promise is a promise, contract that says i will do the thing regradless of the time being

Why need Promise?
To solve the readablity and code inversion issue of callback functions

How to use Promise?
A promise can be made by instantiating Promise object with new Constructor and passing a function inside the constructor.

The function passed in Promise() constructor is called executor function

Function can be anonymous or a declaration function
 */

const emptyPromise = new Promise();
console.log(emptyPromise)

const promiseWithExecutorFunction = new Promise((resolve,reject)=>{
});

console.log(promiseWithExecutorFunction)
