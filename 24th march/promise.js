let prom = new Promise((ressolve, reject) => {
  setTimeout(() => {
    let ran = Math.random();
    if ((ran< 0.5)) {
      reject("Promise rejected as number is not sufficient");
    } else {
      console.log("Promise Exicuted");
      ressolve("Gyan");
    }
  }, 5000);
});

let prom2 = new Promise((ressolve,reject)=>{
    setTimeout(()=>{
        let ran2 = Math.random();
        if (ran2<0.5){
            reject("Number is not sufficient 2");
        }else{
            console.log("2nd Promise executed ");
            ressolve("Gyan 2");
        }
    },1000);
});

// prom.then((a) => {
//   console.log(a);
// }).catch((err)=>{
//     console.log(err)
// });
// prom2.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err)
// })

// let promResult = Promise.all([prom,prom2]);
// promResult.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err)
// });

// console.log("Hello World")
// let promSettle = Promise.allSettled([prom,prom2]);
// promSettle.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// });

// let promRace = Promise.race([prom,prom2]);
// promRace.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err)
// })

let promAny = Promise.any([prom,prom2]);
promAny.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})