
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

// const emptyPromise = new Promise();
// console.log(emptyPromise)

// const promiseWithExecutorFunction = new Promise((resolve,reject)=>{
// });

// console.log(promiseWithExecutorFunction)

// console.log('Before PromsieWithThen declaration')

// const promiseWithThen = new Promise((resolve,reject)=>{
    
//     console.log("hello world")

//     setTimeout(()=>{
//         console.log('Called After 2 seconds')
//         resolve("I am resolved")
//     }
//     ,2);
// })

// console.log("After PromiseWithThen")

// promiseWithThen.then((anyhting)=>{
//     console.log(anyhting);
// });


const promise = new Promise(function (resolve, reject) {
    let randNum = Math.random();
    console.log(randNum);
    if (randNum >= 0.5) {
      resolve("Promise Resolved");
    } else {
      reject("Promise Rejected");
    }
  });

promise.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.error(error)
})