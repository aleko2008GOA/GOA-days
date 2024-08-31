const promise = new Promise((resolve, reject) =>{
    if(true){
        resolve("Hello, World!");
    }
});

promise.then((yes) =>{
    console.log(yes);
});

const promiseTwoSec = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Resolved after 2 seconds");
        }, 2000);
    }
});

promiseTwoSec.then((yes) =>{
    console.log(yes);
});

const first = new Promise((resolve, reject) =>{
    if(true){
        resolve("first");
    }
});

const second = new Promise((resolve, reject) =>{
    if(true){
        resolve("second");
    }
});

first.then((yes) =>{
    console.log(yes);
    second.then((yes) =>{
        console.log(yes);
    });
});

const fileSize = 55;
const newPromise = new Promise((resolve, reject) =>{
    if(fileSize <= 50){
        resolve("Will do");
    }else{
        reject("Will not");
    }
});

newPromise.then((yes) =>{
    console.log(yes);
}, (no) =>{
    console.log(no);
}).catch((error) =>{
    console.log(error);
});

const errorPromise = new Promise((resolve, reject) =>{
    if(fileSize <= 50){
        resolve("Yes");
    }else{
        setTimeout(() =>{
            reject("specific error message");
        }, 1000);
    }
});

errorPromise.then((yes) =>{
    console.log(yes);
}, (no) =>{
    console.log(no);
});

function print123(){
    setTimeout(() =>{
        console.log("One");
    }, 1000);
    setTimeout(() =>{
        console.log("Two");
    }, 2000);
    setTimeout(() =>{
        console.log("Three");
    }, 3000);
}

print123();

function delayed(){
    setTimeout(() =>{
        promise.then((yes) =>{
            console.log(yes);
        });
    }, 1000);
    setTimeout(() =>{
        first.then((yes) =>{
            console.log(yes);
        });
    }, 2000);
    setTimeout(() =>{
        second.then((yes) =>{
            console.log(yes);
        });
    }, 3000);
}

delayed();

const error = new Promise((resolve, reject) =>{
    if(5 > 5){
        resolve("sgsh");
    }
    else{
        reject("error");
    }
});

error.then((yes) =>{
    console.log(yes);
}).catch((error) =>{
    console.log(`Error: ${error}`);
});