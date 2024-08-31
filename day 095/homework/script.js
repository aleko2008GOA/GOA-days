const c = document.getElementById("container");

fetch("https://fakestoreapi.com/products")
    .then(request => {
        return request.json();
    })
    .then(result =>{
        for(let i = 0; i < result.length; i+=3){
            if(result[i + 1] == undefined){
                const html = `
                    <div class="row">
                        <div class = "product">
                            <img src="${result[i].image}" />
                            <p id="title">${result[i].title}</p>
                            <button><p id="price">${result[i].price}</p></button>
                        </div>
                    </div>
                `;
                c.insertAdjacentHTML('beforeend', html);
            }
            else if(result[i + 2] == undefined){
                const html = `
                    <div class="row">
                        <div class = "product">
                            <img src="${result[i].image}" />
                            <p id="title">${result[i].title}</p>
                            <button><p id="price">${result[i].price}</p></button>
                        </div>
                        <div class = "product">
                            <img src="${result[i + 1].image}" />
                            <p id="title">${result[i + 1].title}</p>
                            <button><p id="price">${result[i + 1].price}</p></button>
                        </div>
                    </div>
                `;
                c.insertAdjacentHTML('beforeend', html);
            }else{
                const html = `
                    <div class="row">
                        <div class = "product">
                            <img src="${result[i].image}" />
                            <p id="title">${result[i].title}</p>
                            <button><p id="price">${result[i].price}</p></button>
                        </div>
                        <div class = "product">
                            <img src="${result[i + 1].image}" />
                            <p id="title">${result[i + 1].title}</p>
                            <button><p id="price">${result[i + 1].price}</p></button>
                        </div>
                        <div class = "product">
                            <img src="${result[i + 2].image}" />
                            <p id="title">${result[i + 2].title}</p>
                            <button><p id="price">${result[i + 2].price}</p></button>
                        </div>
                    </div>
                `;
                c.insertAdjacentHTML('beforeend', html);
            }
        }
    }).catch(err => console.log(err, "My error"));