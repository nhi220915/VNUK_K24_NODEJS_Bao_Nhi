function addProduct(newProduct) {
    return new Promise((resolve, reject) => {
        fetch('https://656d3ffbbcc5618d3c22ee91.mockapi.io/product', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Unable to add product');
            }
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
    });
}

document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    const newProduct = {
        name: productName,
        price: productPrice
    };

    addProduct(newProduct)
        .then(data => {
            console.log('New product added:', data);
            displayProduct(data);
        })
        .catch(error => {
            console.error('An error occurred while adding the product:', error);
        });

    // Clear the form
    document.getElementById('productForm').reset();
});

function displayProduct(product) {
    const productList = document.getElementById('productList');
    const listItem = document.createElement('li');
    listItem.textContent = `Product Name: ${product.name}, Price: ${product.price}`;
    productList.appendChild(listItem);
}
