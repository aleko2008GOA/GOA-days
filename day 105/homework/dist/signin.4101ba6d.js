const sign_in_form = document.getElementById("signin");
sign_in_form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((ans)=>{
        if (ans.find((val)=>val.email == email) || users.find((val)=>val.email == email)) {
            if (ans.find((val)=>val.password == password) || users.find((val)=>val.password == password)) alert("d");
            else alert("OOPS! Incorrect password");
        } else alert("OOPS! Accaunt not finded");
    }).catch((err)=>console.log("Error" + err));
});

//# sourceMappingURL=signin.4101ba6d.js.map
