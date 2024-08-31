const sign_up_form = document.getElementById('signup');
const users = localStorage.users ? JSON.parse(localStorage.users) : [];

sign_up_form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get('fullname');
    const email = formData.get('email');
    const password = formData.get('password');
    const personal_number = formData.get('personal_number');
    
    const user = {
        num: users.length,
        balance: 0,
        cards: [],
        name,
        email,
        password,
        personal_number
    }

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(ans =>{
            if(ans.find((val) => val.email == user.email) || users.find((val) => val.email == user.email)){
                alert("This email already exist!");
            }else{
                users.push(user);
                localStorage.users = JSON.stringify(users);
                fakefatch(user);
            }
        })
        .catch(err => console.log("Error" + err));
});

async function fakefatch(user){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await res.json();
        console.log(data.num, data.name, data.email);
        window.location.href = "signin.html";
    } catch (error) {
        console.error('Error:', error);
    }
}

