const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const p = document.getElementById("p");

plus.addEventListener("click", () =>{
    const text = p.textContent;
    p.innerHTML = Number(text) + 1;
});

minus.addEventListener("click", () =>{
    const text = p.textContent;
    p.innerHTML = Number(text) - 1;
});