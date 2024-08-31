const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const count = document.getElementById('count');

plus.addEventListener('click', () => count.innerHTML = Number(count.innerHTML) + 1);
minus.addEventListener('click', () => count.innerHTML = Number(count.innerHTML) - 1);