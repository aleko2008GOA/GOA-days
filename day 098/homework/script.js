let user = document.getElementById("user_info");

fetch("https://api.github.com/users/octocat")
    .then(res =>{
        console.log(res);
        return res.json();
    })
    .then(ans =>{
        console.log(ans);
        user.innerHTML = `<p>${[ans.id, ans.name, ans.login]}</p>`;
        if(ans.id == 583231){
            setTimeout(() =>{
                user.innerHTML += "<p>User id is private we can not share it with you</p>";
            }, 1000);
        }
    })
    .then(() =>{
        console.log("This will heppened first");
    })
    .then(() =>{
        console.log("This will heppened next");
    })
    .catch(err =>{
        console.log(`Error: ${err}`);
    })
    .finally(() =>{
        setTimeout(() =>{
            console.log("Process ended");
        }, 2000);
    });

setTimeout(() =>{
    fetch("https://fakestoreapi.com/products")
        .then(res =>{
            setTimeout(() =>{
                alert(res);
            }, 3000);
            console.log(res);
            return res.json();
        })
        .then(ans =>{
            user.innerHTML += `<img width = "100px" src = "${ans[0].image}">`
        })
        .then(() =>{
            return fetch("https://api.github.com/users/octocat");
        })
        .then(res =>{
            console.log(res);
            return res.json();
        })
        .then(ans =>{
            user.innerHTML += `<p>${ans.name}</p>`
        });
}, 2000);

fetch("https://api.github.comsf/users/octocat")
    .then(res =>{
        return res.json();
    })
    .then(ans =>{
        console.log(ans);
    })
    .catch(err =>{
        setTimeout(() =>{
            console.log("Error: " + err);
        }, 2000);
    });

function formData(){
    event.preventDefault();
    fetch("https://api.github.com/users/octocat")
        .then(res =>{
            return res.json();
        })
        .then(ans =>{
            if(document.getElementById("password").value == ans.id){
                setTimeout(() =>{
                    alert("Singed in successfuly!")
                }, 1000);
            }else{
                setTimeout(() =>{
                    alert("Sing in failed!")
                }, 1000);
            }
        })
        .catch(err =>{
            console.log("Error: " + err);
        })
        .finally(() =>{
            alert("Process ended");
        });
}