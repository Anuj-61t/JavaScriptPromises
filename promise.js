
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


// const promise = new Promise(function (resolve, reject) {
//     let randNum = Math.random();
//     console.log(randNum);
//     if (randNum >= 0.5) {
//       resolve("Promise Resolved");
//     } else {
//       reject("Promise Rejected");
//     }
//   });

// promise.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.error(error)
// })


// To handle multiple promises or array of promises we have 
// 4 Promise methods Promise.all, Promise.allSettelled, Promise.race and Promise.any

// 1)Promise.all - Returns a Promise which resolved if all looped(iteratable) Promises are resolved(fullfilled) or reject if any of the promise rejects

// Example:

const promise1 = Promise.resolve(2);
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(2)
    },2);
})
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(3)
//     },3)
// })
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(
        'This promise is Rejected'
        )
    },3)
})
// const promiseAllResult = Promise.all([promise1, promise2,promise3]);

// promiseAllResult.then((value)=>{
//     console.log(value)
// }).catch(error=>{
//     console.error(error)
// })

const promiseAllSetteled = Promise.allSettled([promise1,promise2,promise3])

promiseAllSetteled.then((value,error)=>{
        console.log(value)
})