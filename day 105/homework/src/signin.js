const sign_in_form = document.getElementById('signin');

sign_in_form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(ans =>{
            const users = localStorage.users ? JSON.parse(localStorage.users) : [];
            if(ans.find(val => val.email == email) || users.find(val => val.email == email)){
                if(ans.find(val => val.password == password) || users.find((val) => val.password == password)){
                    localStorage.accaunt = JSON.stringify(users.find(val => val.email == email));
                    window.location.href = "bankmainpage.html";
                }else{
                    document.getElementById('passwordSignedin').insertAdjacentHTML("afterend", "<label style = 'color:red; font-size:10px'>OOPS! Incorrect password</label>");
                }
            }else{
                document.getElementById('emailSignedin').insertAdjacentHTML("afterend", "<label style = 'color:red; font-size:10px'>OOPS! Accaunt not found</label>");
            }
        })
        .catch(err => console.log("Error" + err));
});