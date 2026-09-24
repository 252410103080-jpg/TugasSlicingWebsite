// DATA SEAFOOD

const seafoodContainer = document.querySelector("#seafood-container");

const seafood1 = {
    name: "Shrimp",
    price: "Rp25.000",
    available: true
};

const seafood2 = {
    name: "Crab",
    price: "Rp45.000",
    available: true
};

const seafood3 = {
    name: "Squid",
    price: "Rp20.000",
    available: true
};

const seafood4 = {
    name: "Mussel",
    price: "Rp30.000",
    available: false
};


// FUNGSI UNTUK MEMBUAT CARD SEAFOOD

function buatCard(seafood) {

    const card = document.createElement("div");

    card.classList.add("seafood-card");


    const nama = document.createElement("h3");

    nama.textContent = seafood.name;


    const harga = document.createElement("p");

    harga.textContent = seafood.price;

    harga.classList.add("seafood-price");


    const status = document.createElement("p");


    if (seafood.available == true) {

        status.textContent = "Available";

        status.classList.add("available");

    } else {

        status.textContent = "Sold Out";

        status.classList.add("sold-out");

        card.classList.add("unavailable");
    }


    card.appendChild(nama);

    card.appendChild(harga);

    card.appendChild(status);


    seafoodContainer.appendChild(card);
}


// MEMBUAT SEMUA CARD

buatCard(seafood1);

buatCard(seafood2);

buatCard(seafood3);

buatCard(seafood4);


// CUSTOMIZE YOUR BOIL

const pilihan = document.querySelectorAll(".food-option");

const selectedFood = document.querySelector("#selected-food");

const totalPrice = document.querySelector("#total-price");


// EVENT CHECKBOX

pilihan.forEach(function(item) {

    item.addEventListener("change", function() {

        let daftarMakanan = "";

        let total = 0;


        pilihan.forEach(function(food) {

            if (food.checked == true) {

                daftarMakanan =
                    daftarMakanan + food.value + "<br>";


                if (food.value == "Shrimp") {
                    total = total + 25000;
                }

                else if (food.value == "Crab") {
                    total = total + 45000;
                }

                else if (food.value == "Squid") {
                    total = total + 20000;
                }

                else if (food.value == "Mussel") {
                    total = total + 30000;
                }

                else if (food.value == "Extra Potato") {
                    total = total + 5000;
                }

                else if (food.value == "Extra Corn") {
                    total = total + 5000;
                }

                else if (food.value == "Extra Sauce") {
                    total = total + 8000;
                }

                else if (food.value == "Extra Condiment") {
                    total = total + 5000;
                }

            }

        });


        if (daftarMakanan == "") {

            selectedFood.textContent =
                "No item selected.";

        } else {

            selectedFood.innerHTML =
                daftarMakanan;

        }


        totalPrice.textContent = total;

    });

});


// ORDER BUTTON

const orderButton =
    document.querySelector("#order-button");


orderButton.addEventListener("click", function() {

    alert("Thank you! Please order through our social media.");

});