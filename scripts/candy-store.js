const candyCatalog = document.getElementById('candy-catalog');
const combosList = {
  "combos": [
    {
      "name": "Personal Combo",
      "price": 8.99,
      "sale": 7.99,
      "image": "./images/candy/1.webp"
    },
    {
      "name": "Hot Combo",
      "price": 11.99,
      "sale": 9.99,
      "image": "./images/candy/2.webp"
    },
    {
      "name": "Sweet Combo",
      "price": 12.99,
      "sale": 10.99,
      "image": "./images/candy/3.webp"
    },
    {
      "name": "Double Special Combo",
      "price": 19.99,
      "sale": 15.99,
      "image": "./images/candy/4.webp"
    }
  ]
}
function displayCombos(combosArray) {
  combosArray.forEach(combo => {
    const comboContainer = document.createElement("div");
    comboContainer.classList.add("combo-container");
    const name = document.createElement("h2");
    name.textContent = combo.name;
    const image = document.createElement("img");
    image.src = combo.image;
    const pricesContainer = document.createElement("div");
    pricesContainer.classList.add("prices-container");
    const sale = document.createElement("p");
    sale.textContent = `$${combo.sale}`;
    sale.classList.add("sale")
    const price = document.createElement("p");
    price.textContent = `$${combo.price}`;
    price.classList.add("normal-price")
    pricesContainer.appendChild(sale);
    pricesContainer.appendChild(price)
    const buyButton = document.createElement("button");
    buyButton.textContent = "Buy";
    comboContainer.appendChild(name);
    comboContainer.appendChild(image);
    comboContainer.appendChild(pricesContainer)
    comboContainer.appendChild(buyButton);
    candyCatalog.appendChild(comboContainer);
  });
}

displayCombos(combosList.combos);