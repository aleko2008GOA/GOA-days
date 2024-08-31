const sign_up_form = document.getElementById('sign_up');
const sign_in_form = document.getElementById('sign_in');
const reset = document.querySelectorAll('.reset_form');

const sign_up_but = document.querySelectorAll('.sign_up_but');
const sign_in_but = document.querySelectorAll('.sign_in_but');
const sign_out_but = document.querySelectorAll('.sign_out_but');

const your_country = document.getElementById('your_country');

const check_in = document.getElementById('check_in');
const check_out = document.getElementById('check_out');
const people_will_live = document.getElementById('people_will_live');
const submit_book = document.getElementById('submit_book');

const sure_submit_book = document.getElementById('sure_to_make_a_book');
const not_sure_submit_book = document.getElementById('not_sure_to_make_a_book');

const users = localStorage.users ? JSON.parse(localStorage.users) : [];
const all_rooms = localStorage.all_rooms ? JSON.parse(localStorage.all_rooms) : [{id: 12345, price: 100}, {id: 23456, price: 120}, {id: 67786, price: 60}];

let active_user = 'guest';
const username = document.getElementById('user_name');

sign_up_but.forEach(elem =>{
    elem.addEventListener("click", () =>{
        sign_in_form.style.display = "none";
        sign_up_form.style.display = "flex";
    });
});
sign_in_but.forEach(elem =>{
    elem.addEventListener("click", () =>{
        sign_up_form.style.display = "none";
        sign_in_form.style.display = "flex";
    });
});
sign_out_but.forEach(elem =>{
    elem.addEventListener("click", () =>{
        active_user = 'guest';
        username.textContent = active_user;
        sign_in_but.forEach(elem =>{
            elem.style.display = 'inline';
        });
        sign_out_but.forEach(elem =>{
            elem.style.display = 'none';
        });
        sign_up_form.style.display = "none";
        sign_in_form.style.display = "flex";

        document.querySelectorAll('.in_profile').forEach(elem =>{
            elem.style.display = "none";
        });
    });
});
reset.forEach(val =>{
    val.addEventListener('click', () =>{
        val.closest('form').style.display = "none";
    });
});

sign_up_form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(sign_up_form);
    const f_name = formData.get("f_name");
    const l_name = formData.get("l_name");
    const email = formData.get("email");
    const password = formData.get("password");
    const birthday = formData.get("birthday");
    const phone = formData.get("phone");
    const country = your_country.options[your_country.selectedIndex].value;

    const user = {
        f_name,
        l_name,
        email,
        password,
        birthday,
        phone,
        country,
        books: []
    };
    if(users.find(user => user.email == email)){
        errorMessage(document.getElementById('account_already_exist'));
    }else{
        users.push(user);
        localStorage.users = JSON.stringify(users);

        sign_up_form.reset();
        sign_up_form.style.display = "none";
        sign_in_form.style.display = "flex";
    }
});

sign_in_form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formData = new FormData(sign_in_form);
    const email = formData.get("email");
    const password = formData.get("password");
    
    if(users.find(user => user.email == email && user.password == password)){
        active_user = users.find(user => user.email == email && user.password == password);
        
        sign_in_form.reset();
        sign_in_form.style.display = "none";

        sign_in_but.forEach(elem =>{
            elem.style.display = "none";
            sign_out_but.forEach(elem =>{
                elem.style.display = "inline";
                username.textContent = active_user.f_name;
            });
        });

        document.getElementById('name_profile').innerHTML = `Hello ${active_user.f_name}, ${active_user.l_name}`;
        document.getElementById('profile_mail').innerHTML = active_user.email;
        if(active_user.book){
            document.getElementById('profile_books').innerHTML = ``;
            active_user.book.forEach(val =>{
                document.getElementById('profile_books').innerHTML += `<div style = "margin:5px 0">Room: ${val.id}, ${(new Date(val.start)).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })} -- ${(new Date(val.end)).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })}, ${val.total_price}$</div>`;
            });
        }

        document.querySelectorAll('.in_profile').forEach(elem =>{
            elem.style.display = "inline";
        });
    }else{
        errorMessage(document.getElementById('error_message'));
    }
});

document.getElementById('profile_but').addEventListener('click', (e) =>{
    document.getElementById('profile').style.display = window.getComputedStyle(document.getElementById('profile')).display == "none" ? 'flex' : 'none';
    e.stopPropagation();
});

document.addEventListener('click', (e) =>{
    if(!document.getElementById('profile').contains(e.target) && window.getComputedStyle(document.getElementById('profile')).display == "flex"){
        document.getElementById('profile').style.display = "none";
    }
});

submit_book.addEventListener("click", () =>{
    if(active_user != 'guest'){
        const room = all_rooms.find(room => room.id == document.getElementById('room_id').value);
        if(room){
            let total_price = 0;
            const price = room.price;
            const num_of_people = people_will_live.selectedIndex + 1;

            const start = new Date(check_in.value);
            const end = new Date(check_out.value);
            const time = (end - start) / (1000 * 60 * 60 * 24);

            const currect_date = new Date();
            currect_date.setHours(0, 0, 0, 0);

            if(start >= currect_date && end > start){
                if(start.getFullYear() <= currect_date.getFullYear() + 1 && end.getFullYear() <= currect_date.getFullYear() + 3){
                    if(time < 7) total_price = num_of_people * price * (1 - (num_of_people - 1) * 1/20) * time;
                    else if(time < 30) total_price = num_of_people * price * (1 - (num_of_people - 1) * 1/20) * time * 0.9;
                    else if(time < 365) total_price = num_of_people * price * (1 - (num_of_people - 1) * 1/20) * time * 0.8;
                    else total_price = num_of_people * price * (1 - (num_of_people - 1) * 1/20) * time * 0.7;

                    document.getElementById('booking-container-part5').style.display = "none";
                    document.getElementById('total_price').innerHTML = `Total price will be ${total_price}$ are you sure?`
                    document.getElementById('booking-container-part6').style.display = "block";

                    sure_submit_book.addEventListener('click', () =>{
                        document.getElementById('booking-container-part6').style.display = "none";
                        document.getElementById('booking-container-part5').style.display = "block";

                        const isAvailable = room.book ? room.book.every(val => new Date(val.start) > end || new Date(val.end) < start) : true;
                        if(isAvailable){
                            if(!room.book) room.book = [];
                            room.book.push({user: active_user.email, start, end});

                            if(!users.find(user => user.email == active_user.email).book) users.find(user => user.email == active_user.email).book = [];
                            users.find(user => user.email == active_user.email).book.push({total_price, start, end, id: room.id});
                            active_user = users.find(user => user.email == active_user.email);

                            document.getElementById('profile_books').innerHTML = ``;
                            active_user.book.forEach(val =>{
                                document.getElementById('profile_books').innerHTML += `<div style = "margin:5px 0">Room: ${val.id}, ${(new Date(val.start)).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })} -- ${(new Date(val.end)).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })}, ${val.total_price}$</div>`;
                            });
                            
                            localStorage.users = JSON.stringify(users);
                            localStorage.all_rooms = JSON.stringify(all_rooms);

                            document.getElementById('booking_error_message').innerHTML = 'Booked sucessfuly';
                            errorMessage(document.getElementById('booking_error_message'));
                        }else{
                            document.getElementById('booking_error_message').innerHTML = '<i style = "color:orange" class="fas fa-exclamation-circle"></i> This room will be used at this period of time!';
                            errorMessage(document.getElementById('booking_error_message'));
                        }
                    });
                    not_sure_submit_book.addEventListener('click', () =>{
                        document.getElementById('booking-container-part6').style.display = "none";
                        document.getElementById('booking-container-part5').style.display = "block";
                    });
                }else{
                    document.getElementById('booking_error_message').innerHTML = '<i style = "color:orange" class="fas fa-exclamation-circle"></i> Too far away';
                    errorMessage(document.getElementById('booking_error_message'));
                }
            }else{
                document.getElementById('booking_error_message').innerHTML = '<i style = "color:orange" class="fas fa-exclamation-circle"></i> Invalid date';
                errorMessage(document.getElementById('booking_error_message'));
            }
        }else{
            document.getElementById('booking_error_message').innerHTML = '<i style = "color:orange" class="fas fa-exclamation-circle"></i> Wrong room id';
            errorMessage(document.getElementById('booking_error_message'));
        }
    }else{
        document.getElementById('booking_error_message').innerHTML = '<i style = "color:orange" class="fas fa-exclamation-circle"></i> You need to sign in first';
        errorMessage(document.getElementById('booking_error_message'));
    }
});

function errorMessage(elem){
    elem.style.display = "block";
    setTimeout(() =>{
        elem.style.display = "none";
    }, 2000);
}

document.querySelector('#rooms-part1 .book_now').addEventListener('click', (e) => {
    document.getElementById('room_id').value = 12345;
});

document.querySelector('#rooms-part2 .book_now').addEventListener('click', (e) => {
    document.getElementById('room_id').value = 23456;
});

document.querySelector('#rooms-part3 .book_now').addEventListener('click', (e) => {
    document.getElementById('room_id').value = 67786;
});