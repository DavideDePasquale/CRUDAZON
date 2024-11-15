const prod = JSON.parse(localStorage.getItem("prod"));
const listaProd = document.getElementById("container");
listaProd.className = "row col-12";
if (prod.length > 0) {
    prod.forEach((prodotto) => {
        const prodDiv = document.createElement("div");
        prodDiv.className = "row col-3";
        const col = document.createElement("div");
        col.innerHTML = `
        <div class="card" style="max-width:100%" >
           <img src="${prodotto.ImageUrl}" class="card-img-top" alt="${prodotto.description}">
              <div class="card-body">
             <h5 class="card-title">${prodotto.name}</h5>
          <p class="card-text">${prodotto.description}</p>
          <p class="card-text">${prodotto.price}€</p>
       <a href="#" class="btn btn-danger btnRemove">Elimina</a>
         </div>
         </div>
             </div>`;
        prodDiv.appendChild(col);
        listaProd.appendChild(prodDiv);
        const btnRemove = container.querySelectorAll(".btnRemove");
        btnRemove.forEach((bottone) => {

            bottone.addEventListener("click", function () {
                this.closest(".card").remove();
            })
        })

    })
}