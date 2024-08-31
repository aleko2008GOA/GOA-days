const main = document.getElementById("main");
const main2 = document.getElementById("main2");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const product = document.getElementsByClassName("product");
const name = document.getElementsByClassName("name");

fetch("https://fakestoreapi.com/products")
    .then(res => {
        return res.json();
    })
    .then(ans =>{
        main.style.backgroundImage = `url("${ans[4].image}")`;
        main2.style.backgroundImage = `url("${ans[17].image}")`;
        for(let i = 0; i < product.length; i++){
            product[i].style.backgroundImage = `url("${ans[i].image}")`
            name[i].innerHTML = ans[i].category;
        }
    })
    .catch(err =>{
        console.log("Error: " + err);
        main.style.backgroundImage = `url("https://media.licdn.com/dms/image/D5612AQEO-Ut1jHFLPQ/article-cover_image-shrink_720_1280/0/1702452414629?e=2147483647&v=beta&t=Rf-pPdiVjqnlAdkODEBwDVb6Ll9zD29HiikmFy_LZUE")`;
        main2.style.backgroundImage = `url("https://media.licdn.com/dms/image/D5612AQEO-Ut1jHFLPQ/article-cover_image-shrink_720_1280/0/1702452414629?e=2147483647&v=beta&t=Rf-pPdiVjqnlAdkODEBwDVb6Ll9zD29HiikmFy_LZUE")`;
        for(let i = 0; i < product.length; i++){
            product[i].style.backgroundImage = `url("https://media.licdn.com/dms/image/D5612AQEO-Ut1jHFLPQ/article-cover_image-shrink_720_1280/0/1702452414629?e=2147483647&v=beta&t=Rf-pPdiVjqnlAdkODEBwDVb6Ll9zD29HiikmFy_LZUE")`;
        }
    })
    .finally(() => console.log("ended uploading main"));

document.getElementById('year').innerHTML = (currentYear-1) + "/" + currentYear;  