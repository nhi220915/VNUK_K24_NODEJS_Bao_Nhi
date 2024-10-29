// Fetch products from the API and display them as cards
function fetchProducts() {
  fetch("https://656d3ffbbcc5618d3c22ee91.mockapi.io/product")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const productContainer = document.getElementById("product-container");
      productContainer.innerHTML = ""; // Clear existing products
      data.forEach((product) => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-lg shadow-md p-4";
        card.innerHTML = `
                    <img src="${product.image1}" alt="${
          product.name || "Unnamed Product"
        }" class="w-full h-48 object-cover rounded-t-lg">
                    <h2 class="text-xl font-semibold mt-2">${product.name || "Unnamed Product"}</h2>
                    <p class="text-gray-700">${product.tag || "No Tag"}</p>
                    <p class="text-lg font-bold mt-2">$${product.price || "N/A"}</p>
                `;
        productContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// Function to add a new product
function addProduct(event) {
  event.preventDefault(); // Prevent form submission
  const name = document.getElementById("product-name").value;
  const image = document.getElementById("product-image").value;
  const price = document.getElementById("product-price").value;
  const tag = document.getElementById("product-tag").value;

  const newProduct = {
    name: name,
    image1: image,
    price: price,
    tag: tag,
  };

  fetch("https://656d3ffbbcc5618d3c22ee91.mockapi.io/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(() => {
      fetchProducts(); // Refresh the product list
      closeModal(); // Close the modal
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// Function to open the modal
function openModal() {
  document.getElementById("add-product-modal").classList.remove("hidden");
}

// Function to close the modal
function closeModal() {
  document.getElementById("add-product-modal").classList.add("hidden");
}

// Event listeners
document.getElementById("add-product-btn").addEventListener("click", openModal);
document.getElementById("close-modal").addEventListener("click", closeModal);
document.getElementById("add-product-form").addEventListener("submit", addProduct);

// Initial fetch of products
fetchProducts();