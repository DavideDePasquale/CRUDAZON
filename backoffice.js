const URL = "https://striveschool-api.herokuapp.com/api/product/";
const form = document.getElementById("formCompilato");
const btn = document.getElementById("btnPrimary");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const newProd = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("brand").value,
        ImageUrl: document.getElementById("imageUrl").value,
        price: document.getElementById("price").value,
    };
    console.log("Dati inviati,", newProd);
});

const fetchEs = () => {
    fetch(URL, {
        method: "POST",
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGZjMzhhZDEyOTAwMTU4NzZiY2UiLCJpYXQiOjE3MzE2NjE3NjMsImV4cCI6MTczMjg3MTM2M30.d6V664i0HPeFbzsdQkuUW7xHvW0RsptFpDgvJU1cGAk"
        },
        body: JSON.stringify(newProd)

    })
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
        })
        .then(dati => {
            console.log("Nuovo Prodotto:", dati);
        })
        .catch(err => {
            console.error("ERRORE!!!", err)
        })

};
btn.addEventListener("click", function () {
    const datiCreati = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("brand").value,
        ImageUrl: document.getElementById("imageUrl").value,
        price: document.getElementById("price").value
    }
    const prod = JSON.parse(localStorage.getItem("prod")) || [];
    prod.push(datiCreati);
    localStorage.setItem("prod", JSON.stringify(prod));
    console.log("Prodotto salvato nello Storage:", datiCreati)
    console.log("Tutti i prodotti salvati:", prod);
    form.reset();
});
