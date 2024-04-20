// Fetching data from Fake Store API
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    // getting the card element from html dcoument with id 'product-list'
    const productList = document.getElementById("product-list");

    //Iterate each product in the array
    data.forEach((product) => {
      //Create bootstrap div element fot the product card
      const card = document.createElement("div");
      //   adding bootstrap responsive class on card
      card.classList.add("col-md-3");
      // setting the card content in card
      card.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-description">${product.description}</p>
                <p class="card-price">NZD${product.price}</p>
                </div>
            </div>
        `;
      // Appending the product list to the card
      productList.appendChild(card);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
