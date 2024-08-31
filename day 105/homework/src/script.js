if(localStorage.accaunt){
    localStorage.main ? document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', JSON.parse(localStorage.main)) : localStorage.main = JSON.stringify(document.getElementById('main'));
    const noacc = document.getElementById("when_no_acc");
    noacc.style.display = 'none';
    const user = JSON.parse(localStorage.accaunt);
    const users = JSON.parse(localStorage.users);

    let remove_mode = false;
    const remove_card = document.getElementById('remove_card');

    const mainpart = `
        <h2 style = "margin:20px">Hello ${user.name}!</h2>
    `
    document.getElementsByTagName('main')[0].insertAdjacentHTML("afterbegin", mainpart);

    const my_balance = document.getElementById("my_balance");
    const can_be_used = document.getElementById("can_be_used");
    let instorage = 0;

    my_balance.innerHTML = user.balance + "$";
    can_be_used.innerHTML = (user.balance - instorage) + "$";

    const add_card_btn = document.getElementById("add_card");
    const my_cards = document.getElementById("my_cards");
    add_card_btn.addEventListener("click", () =>{
        if(!document.getElementById('card_form')){
            my_cards.insertAdjacentHTML("beforeend", `
                <form id = "card_form">
                    <span>
                        <label for = "num">Card Number:</label>
                        <input type = "number" name = "num" id = "num" required><br>
                    </span>
                    <span style = "display:flex">
                        <label for = "pin">PIN:</label>
                        <input style = "flex:1" id = "pin" name = "pin" type = "password" required><br>
                    </span>
                    <span style = "display:flex; gap:3px">
                        <input style = "flex:1" type = "submit">
                        <input style = "flex:1" id = "remove_card_form" type = "button" value = "Remove">
                    </span>
                </form>`);
        }
        document.getElementById("remove_card_form").addEventListener("click", () =>document.getElementById("card_form").remove());
        document.getElementById("card_form").addEventListener("submit", e =>{
            e.preventDefault();
            const formData = new FormData(e.target);

            const num = formData.get('num');
            const pin = formData.get('pin');
            
            if(!user.cards.find(val => val.num == num)){
                document.getElementById("card_form").remove();

                user.cards.push({num, pin, money: 1000});
                user.balance += 1000;
                document.getElementById("cards").insertAdjacentHTML("beforeend", `<div class = "card_type"><img style = "height:50px" src = "https://w7.pngwing.com/pngs/49/82/png-transparent-credit-card-visa-logo-mastercard-bank-mastercard-blue-text-rectangle.png"><br><label class = "card_balance" id = "a${num}">1000</label>$<br><label class = "card_number_in_form">${num}</label></div>`);
                
                my_balance.innerHTML = user.balance + "$";
                can_be_used.innerHTML = (user.balance - instorage) + "$";
            }else{
                alert("This card is already added!");
            }
            localStorage.main = JSON.stringify(document.getElementById('main'));
        });
        localStorage.main = JSON.stringify(document.getElementById('main'));
    });

    remove_card.addEventListener("click", (e) => {
        e.stopPropagation();
        remove_mode = true;
    });
    document.addEventListener("click", e =>{
        if(e.target.closest('.card_type') && remove_mode == true){
            const balance_on_card = e.target.closest('.card_type').querySelector('.card_balance');
            user.balance -= balance_on_card.textContent;
            my_balance.innerHTML = user.balance + "$";
            can_be_used.innerHTML = (user.balance - instorage) + "$";

            const card_number_in_form = e.target.closest('.card_type').querySelector('.card_number_in_form');
            user.cards.splice(user.cards.indexOf(card_number_in_form.textContent), 1);

            e.target.closest('.card_type').remove();
        }
        remove_mode = false;
        localStorage.main = JSON.stringify(document.getElementById('main'));
    });

    const add_to_storage = document.getElementById('add_to_storage');
    add_to_storage.addEventListener("click", e =>{
        if(document.getElementById('my_storage')){
            my_storage = document.getElementById('my_storage');
            my_storage.insertAdjacentHTML('beforeend', 
            `<form id = "storage_form">
                <span style = "display:flex">
                    <label for = "will_be_in_storage">How much? </label>
                    <input style = "flex:1" id = "will_be_in_storage" name = "will_be_in_storage" type = "number" required>
                </span>
                <span style = "display:flex">
                    <label>Card_number: </label>
                    <input style = "flex:1" type = "number" id = "card_number" name = "card_number" required>
                </span>
                <span style = "display:flex; gap:3px">
                    <input style = "flex:1" type = "submit">
                    <input style = "flex:1" id = "remove_storage_form" type = "button" value = "Remove">
                </span>
            </form>`
            );
            document.getElementById("remove_storage_form").addEventListener("click", () =>document.getElementById("storage_form").remove());

            document.getElementById('storage_form').addEventListener("submit", e =>{
                e.preventDefault();
                const formData = new FormData(e.target);
                const will_be_in_storage = Number(formData.get('will_be_in_storage'));
                const card_number = Number(formData.get('card_number'));

                if(user.cards.find(val => val.num == card_number) && user.cards.find(val => val.money >= will_be_in_storage)){
                    instorage = Number(instorage) + will_be_in_storage;
                    my_balance.innerHTML = user.balance + "$";
                    can_be_used.innerHTML = (user.balance - instorage) + "$";
                    document.getElementById('stror').innerHTML = `My storage ${instorage}`;

                    user.cards.find(val => val.num == card_number).money = Number(user.cards.find(val => val.num == card_number).money) - will_be_in_storage;
                    
                    document.getElementById('a' + card_number).innerHTML = Number(document.getElementById('a' + card_number).textContent) - will_be_in_storage;
                }else{
                    alert("Too much money or wrong card number");
                }
                document.getElementById('storage_form').remove();
                localStorage.main = JSON.stringify(document.getElementById('main'));
            });
        }

        document.getElementById('send_form').addEventListener('submit', e =>{
            e.preventDefault();
            const formData = new FormData(e.target);
            const your_card = Number(formData.get('number'));
            const card_number = Number(formData.get('card_number'));
            const pin = Number(formData.get('pin'));
            const money = Number(formData.get('money'));

            if(user.cards.find(val => val.num == your_card) && user.cards.find(val => val.money >= money) && pin == user.cards.find(val => val.num == num).pin && users.find(val => val.num.find(val1 => val1 == card_number))){
                user.balance -= money;
                my_balance.innerHTML = user.balance + "$";
                can_be_used.innerHTML = (user.balance - instorage) + "$";
                users.find(val => val.num.find(val1 => val1 == card_number)).money += money;
                users.find(val => val.num.find(val1 => val1 == card_number)).balance += money;

                user.cards.find(val => val.num == card_number).money = Number(user.cards.find(val => val.num == card_number).money) - money;
                
                document.getElementById('a' + card_number).innerHTML = Number(document.getElementById('a' + card_number).textContent) - money;
            }else{
                alert("Too much money or wrong card number");
            }
            localStorage.main = JSON.stringify(document.getElementById('main'));
        });
        localStorage.main = JSON.stringify(document.getElementById('main'));
    });
}else{
    noacc.style.display = 'block';
}