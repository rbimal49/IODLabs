// Get the DOM element that displays the product list
const productList = document.getElementById("product-list");
// Get the DOM element for selecting a product category
const categorySelect = document.getElementById("category-select");

// Add an event listener to the category selection dropdown that triggers on value change
categorySelect.addEventListener("change", () => {
  const category = categorySelect.value; // Get the current selected value of the dropdown
  fetchProducts(category); // Fetch products based on the selected category
});

// Function to fetch products from the API based on the category
function fetchProducts(category) {
  let url = "https://fakestoreapi.com/products"; // Base URL of the products API
  if (category !== "all") {
    url += `/category/${category}`; // Modify URL to filter by category if not 'all'
  }

  fetch(url) // Make the API request
    .then((response) => response.json()) // Convert the response to JSON
    .then((data) => {
      productList.innerHTML = ""; // Clear the existing product list
      data.forEach((product) => {
        // Iterate over each product in the data array
        const card = `
                            <div class="col-md-3">
                                <div class="card product-card">
                                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                                    <div class="card-body">
                                        <h5 class="card-title">${product.title}</h5>
                                        <p class="card-description">${product.description}</p>
                                        <p class="card-price">$${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        `; // Create HTML content for each product
        productList.innerHTML += card; // Append the new product card to the product list
      });
    })
    .catch((error) => console.error("Error fetching products:", error)); // Log errors to the console
}

fetchProducts("all"); // Initial fetch to load all products when the page is first loaded
