const promise1 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Hello, world!");
        }, 2000);
    }
});

promise1
    .then((yes) => {
        console.log(yes);
    });

const promise2 = new Promise((resolve, reject) =>{
    if(5 < 5){
        resolve("Hello, world!");
    }else{
        setTimeout(() =>{
            reject("Something went wrong!");
        }, 3000);
    }
});

promise2    
    .then((yes) =>{
        console.log(yes);
    })
    .catch((no) =>{
        console.log(no);
    });

const promise5 = new Promise((resolve, reject) =>{
    if(true){
        resolve(5);
    }
});

promise5
    .then((yes) =>{
        const newPromise = new Promise((resolve, reject) =>{
            if(true){
                resolve(yes + 10);
            }
        });
        newPromise
            .then((yes) =>{
                console.log(yes);
            });
    });

const arrPromise = new Promise((resolve, reject) =>{
    if(true){
        resolve([1, 2, 3, 4,, 5, 6]);
    }
});

arrPromise
    .then((yes) =>{
        yes.forEach(val =>{
            console.log(val);
        });
    });

const strPromise = new Promise((resolve, reject) =>{
    if(true){
        resolve("Alex");
    }
});

strPromise
    .then((yes) =>{
        console.log(yes.toUpperCase());
        console.log(yes.split('').reverse().join(''));
    });

fetch("https://fakestoreapi.com/products")
    .then(request => request.json())
    .then(yes =>{
        console.log(yes[0].title);
    });

const chainPromise1 = new Promise((resolve, reject) =>{
    resolve("My name is");
});

const chainPromise2 = new Promise((resolve, reject) =>{
    resolve("Alex");
});

chainPromise1
    .then(yes =>{
        console.log(yes);
        return chainPromise2;
    })
    .then(yes =>{
        console.log(yes);
    });

const dateTime = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            let date = new Date();
            resolve(date);
        }, 1000);
    }
});

dateTime
    .then(yes =>{
        console.log(yes);
    });

const number = new Promise((resolve, reject) =>{
    let x = Math.random();
    if(x > 0.5){
        resolve(x + " > 0.5");
    }else{
        reject(x + " <= 0.5");
    }
});

number  
    .then(yes =>{
        console.log(yes);
    })
    .catch(no =>{
        console.log(no);
    });

const value = new Promise((reserve, reject) =>{
    reserve(10);
});

const value1 = new Promise((reserve, reject) =>{
    reserve(11);
});

value
    .then(yes =>{
        console.log(yes);
        return value1;
    })
    .then(yes =>{
        console.log(yes);
    });

const newPromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        if(Math.random() < 0.5){
            resolve("Hello World");
        }else{
            reject("Error occured");
        }
    }, 2000);
});

newPromise
    .then(answer =>{
        console.log(answer);
    })
    .catch(answer =>{
        console.log(answer);
    });

let num = 5;
function oparation(num){
    const oparationPromise = new Promise((resolve, reject) =>{
        resolve(num);
    });
    return oparationPromise;
}

oparation(num)
    .then(answer =>{
        return oparation(answer * 2);
    })
    .then(answer =>{
        return oparation(answer + 10);
    })
    .then(answer =>{
        return oparation(answer * 3);
    })
    .then(answer =>{
        console.log(answer);
    });

const delays = [800, 1200, 1000];

const fetchSimulator = (url, delay) => {
    return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), delay));
};

Promise.all([fetchSimulator("https://example.com/products", delays[0]), fetchSimulator("https://example1.com/products", delays[1]), fetchSimulator("https://example2.com/products", delays[2])])
    .then(ans => console.log(ans));

Promise.all([fetchSimulator("https://example.com", delays[0]), fetchSimulator("https://example1.com", delays[1]), fetchSimulator("https://example2.com", delays[2])])
    .then(ans => console.log(ans));

let cancel = true;
const cancelPromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        if(cancel == true){
            resolve("Yes");
        }else{
            reject("Canceled")
        }
    }, 2000);
});

cancelPromise
    .then(ans => console.log(ans))
    .catch(ans => console.log(ans));

cancel = false;