const task1 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Task 1 complete");
        }, 2000);
    }
});

task1
    .then((ans) => console.log(ans));

const task2 = new Promise((resolve, reject) =>{
    if(false){
        resolve("Task 2 complete");
    }else{
        reject("Task 2 failed");
    }
});

task2
    .then((ans) => console.log(ans))
    .catch((ans) => console.log(ans))

function task3(num){
    const promise = new Promise((resolve, reject) =>{
        if(true){
            resolve(num);
        }
    });
    return promise;
}

task3(5)
    .then((ans) =>{
        console.log(ans);
        return task3(ans * 2);
    })
    .then((ans) =>{
        console.log(ans);
    });

function task41(){
    const task41 = new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() =>{
                resolve("First");
            }, 2000);
        }
    });

    return task41;
}

function task42(){
    const task42 = new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() =>{
                resolve("Second");
            }, 1000);
        }
    });

    return task42;
}

task41()  
    .then((ans) =>{
        console.log(ans);
        return task42();
    })
    .then((ans) =>{
        console.log(ans)
    });

function task5(){
    const task5 = new Promise((resolve, reject) =>{
        if(false){
            resolve("true");
        }else{
            setTimeout(() =>{
                reject("Task 3 failed");
            }, 2000);
        }
    });

    return task5;
}

task5()
    .then((ans) => console.log(ans))
    .catch((ans) => console.log(ans));

function task6(){
    const task6 = new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() =>{
                resolve("Task 1 complete");
            }, Math.floor(Math.random() * 5 + 1) * 1000);
        }
    });

    return task6;
}

task6()
    .then((ans) => console.log(ans));

function task71(){
    const task71 = new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() =>{
                resolve("First");
            }, Math.floor(Math.random() * 3 + 1) * 1000);
        }
    });

    return task71;
}

function task72(){
    const task72 = new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() =>{
                resolve("Second");
            }, Math.floor(Math.random() * 3 + 1) * 1000);
        }
    });

    return task72;
}

task71()
    .then((ans) =>{
        console.log(ans);
        return task72();
    })
    .then((ans) => console.log(ans));

function task8(){
    const task8 = new Promise((resolve, reject) =>{
        if(false){
            resolve("Second");
        }else{
            setTimeout(() =>{
                reject("Task 3 failed")
            }, Math.floor(Math.random() * 4 + 1) * 1000)
        }
    });

    return task8;
}

task8()
    .then((ans) => console.log(ans))
    .catch((ans) => console.log(ans));

function task9(){
    const task9 = new Promise((resolve, reject) =>{
        let time = Math.random();
        setTimeout(() =>{
            if(time < 0.5){
                resolve("Task 1 was quick");
            }else{
                resolve("Task 1 complete");
            }
        }, (time * 5 + 1) * 1000);
    });

    return task9;
}

task9()
    .then((ans) => console.log(ans));

function task10(){
    const task10 = new Promise((resolve, reject) =>{
        let time = Math.random();
        setTimeout(() =>{
            if(time >= 0.3){
                resolve("Task 3 complete");
            }else{
                reject("Task 3 failed");
            }
        }, (time * 4 + 1) * 1000);
    });

    return task10;
}

task10()
    .then((ans) => console.log(ans))
    .catch((ans) => console.log(ans));

const task111 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 1");
        }, 1000);
    }
});

const task112 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 2");
        }, 2000);
    }
});

const task113 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 3");
        }, 3000);
    }
});

Promise.all([task111, task112, task113])
    .then((ans) => console.log(ans));

const task121 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 1");
        }, (Math.random() * 5 + 1) * 1000);
    }
});

const task122 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 2");
        }, (Math.random() * 5 + 1) * 1000);
    }
});

const task123 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 3");
        }, (Math.random() * 5 + 1) * 1000);
    }
});

Promise.all([task121, task122, task123])
    .then((ans) => console.log(ans));

const task131 = new Promise((resolve, reject) =>{
    if(false){
        resolve("Promise 1");
    }else{
        setTimeout(() =>{
            reject("Promise 1 failed");
        }, 2000);
    }
});

const task132 = new Promise((resolve, reject) =>{
    if(true){
        resolve("Promise 2");
    }
});

const task133 = new Promise((resolve, reject) =>{
    if(true){
        resolve("Promise 3");
    }
});

Promise.all([task131, task132, task133])
    .then((ans) => console.log(ans))
    .catch((ans) => console.log(ans));

const task141 = new Promise((resolve, reject) =>{
    let num = Math.random();
    if(num < 0.5){
        resolve("Promise 1");
    }else{
        reject("Promise 1 failed");
    }
});

const task142 = new Promise((resolve, reject) =>{
    let num = Math.random();
    if(num < 0.5){
        resolve("Promise 2");
    }else{
        reject("Promise 2 failed");
    }
});

const task143 = new Promise((resolve, reject) =>{
    let num = Math.random();
    if(num < 0.5){
        resolve("Promise 3");
    }else{
        reject("Promise 3 failed");
    }
});

Promise.all([task141, task142, task143])
    .then((ans) => console.log(ans))
    .catch((ans) => console.log(ans));

const task151 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(6);
    }, (Math.random() * 2 + 1) * 1000);
});

const task152 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(2);
    }, (Math.random() * 2 + 1) * 1000);
});

const task153 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(7);
    }, (Math.random() * 2 + 1) * 1000);
});

Promise.all([task151, task152, task153])
    .then((ans) =>{
        console.log(ans);
        return Promise.all([task151, task152, task153])
    })
    .then((ans) =>{
        const sum = ans.reduce((prev, cur) =>{
            return prev + cur;
        }, 0);
        console.log(sum);
    });

const task161 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 1");
        }, 1000);
    }
});

const task162 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 2");
        }, 2000);
    }
});

const task163 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 3");
        }, 3000);
    }
});

Promise.race([task161, task162, task163])
    .then((ans) => console.log(ans));

const task171 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 1");
        }, (Math.random() * 5 + 1) * 1000);
    }
});

const task172 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 2");
        }, (Math.random() * 5 + 1) * 1000);
    }
});

const task173 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 3");
        }, (Math.random() * 5 + 1) * 1000);
    }
});

Promise.race([task171, task172, task173])
    .then((ans) => console.log(ans));

const task181 = new Promise((resolve, reject) =>{
    if(true){
        resolve("Instant promise");
    }
});

const task182 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 2");
        }, 1000);
    }
});

const task183 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 3");
        }, 2000);
    }
});

Promise.race([task181, task182, task183])
    .then((ans) => console.log(ans));

const task191 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 1");
        }, 1000);
    }
});

const task192 = new Promise((resolve, reject) =>{
    if(false){
        setTimeout(() =>{
            resolve("Promise 2");
        }, 2000);
    }else{
        setTimeout(() =>{
            reject("Promise failed");
        }, 2000);
    }
});

const task193 = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() =>{
            resolve("Promise 3");
        }, 3000);
    }
});

Promise.race([task191, task192, task193])
    .then((ans) => console.log(ans))
    .catch((ans) => console.log(ans));

const task201 = new Promise((resolve, reject) =>{
    const time = Math.random();
    if(time >= 0.5){
        resolve("Message 1");
    }else{
        setTimeout(() =>{
            reject("Message 1 failed")
        }, 2000);
    }
});

const task202 = new Promise((resolve, reject) =>{
    const time = Math.random();
    if(time >= 0.5){
        resolve("Message 2");
    }else{
        setTimeout(() =>{
            reject("Message 2 failed")
        }, 2000);
    }
});

const task203 = new Promise((resolve, reject) =>{
    const time = Math.random();
    if(time >= 0.5){
        resolve("Message 3");
    }else{
        setTimeout(() =>{
            reject("Message 3 failed")
        }, 2000);
    }
});

Promise.race([task201, task202, task203])
    .then((ans) => console.log(ans))
    .catch((ans) => console.log(ans));

fetch("https://chatgpt.com/")
    .then(rec => {
        return rec.text();
    })
    .then(ans =>{
        console.log(ans);
    });

fetch("https://fakestoreapi.com/products")
    .then(rec => {
        return rec.json();
    })
    .then(ans =>{
        console.log(ans);
    });

fetch("https://fakestoreapi.com/products")
    .then(rec => {
        return rec.json();
    })
    .then(ans =>{
        ans.forEach(val =>{
            console.log(val.id, val.title, val.image);
        });
    });

const div = document.getElementById("div");
fetch("https://fakestoreapi.com/products")
    .then(rec => {
        return rec.json();
    })
    .then(ans =>{
        ans.forEach(val =>{
            const html = `<option>${val.id}. ${val.title} - "${val.image}"</option>`
            div.insertAdjacentHTML('beforeend', html);
        });
    });

const cont = document.getElementById("cont");
fetch("https://fakestoreapi.com/products")
    .then(rec => {
        return rec.json();
    })
    .then(ans =>{
        ans.forEach(val =>{
            const html = `<img src = "${val.image}" width = "200px">`
            cont.insertAdjacentHTML('beforeend', html);
        });
    });