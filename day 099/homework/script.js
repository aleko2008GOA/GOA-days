document.getElementById("submit").addEventListener('click', (e) =>{
    e.preventDefault();
    let money = document.getElementById("amount").value;
    let terms = document.getElementById("term").value;
    let rate = document.getElementById("rate").value;

    let all = money * (1 + rate / 100);
    let monthly = all / terms;

    document.getElementById("per_month").innerHTML = monthly;
    document.getElementById("total").innerHTML = all;
});
