const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Hello world!");
    }, 2000);
});
promise1
    .then(rec => console.log(rec))
    .then(res => {
        printHelo();
    });

async function printHelo(){
    console.log("Hello!");
}

const rejectPromise = new Promise((resolve, reject) =>{
    reject("Error");
});
rejectPromise
    .then(rec => console.log(rec))
    .catch(rec => console.log(rec));

async function tryCatch(){
    try{
        console.log(helo)
    }
    catch(err){
        console.log("Error: " + err);
    }
}
tryCatch();

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Goodbye world!");
    }, 2000);
});
promise1
    .then(rec => {
        console.log(rec);
        return promise2;
    })
    .then(rec => console.log(rec))
    .catch(err => {
        console.log(err);
    });

async function promiseall(){
    Promise.all([promise1, promise2])
        .then(rec => console.log(rec));
}
promiseall();

promise1    
    .then(val => val + " My name is Alex.")
    .then(res => console.log(res));

async function await(){
    try{
        const res = await fetch('https://api.example.com/data');
        const ans = await res.json();
        console.log(ans);
    }
    catch(err){
        console.log(err);
    }
}
await();

Promise.race([promise1, promise2])
    .then(res => console.log(res));

async function repeat(num){
    try {
        await fetch('https://api.example.com/data');
    }
    catch(err){
        if(num > 0){
            console.log("Error: " + num);
            num -= 1;
            repeat(num);
        }
    }
}
repeat(5);