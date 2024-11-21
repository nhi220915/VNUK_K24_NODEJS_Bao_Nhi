const apiUrl = 'https://671947f87fc4c5ff8f4d1684.mockapi.io/Restaurant';

// Function to fetch (READ) and display data using callback
function fetchDataFromAPI(callback) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            callback(null, data);
        })
        .catch(error => {
            callback(error, null);
        });
}

// Function to display the restaurant data
function displayRestaurants(data) {
    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = ''; // Clear existing list

    data.forEach(restaurant => {
        const restaurantDiv = document.createElement('div');
        restaurantDiv.className = 'restaurant';

        restaurantDiv.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p>Location: ${restaurant.location}</p>
            <p>Phone: ${restaurant.phone}</p>
            <p>Rating: ${restaurant.rating}</p>
            <button onclick="deleteRestaurant(${restaurant.id}, handleCallback)">Delete</button>
            <button onclick="showUpdateForm(${restaurant.id}, '${restaurant.name}', '${restaurant.location}', '${restaurant.phone}', '${restaurant.rating}')">Update</button>
        `;

        restaurantList.appendChild(restaurantDiv);
    });
}

// Initial fetch to load restaurants
fetchDataFromAPI((error, data) => {
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        displayRestaurants(data);
    }
});

// Function to handle generic callback for success/error responses
function handleCallback(error, data) {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Success:', data);
        // Refresh the displayed restaurants after any operation
        fetchDataFromAPI((error, data) => {
            if (error) {
                console.error('Error fetching data:', error);
            } else {
                displayRestaurants(data);
            }
        });
    }
}

// Function to add a new restaurant (CREATE) using callback
document.getElementById('restaurant-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const phone = document.getElementById('phone').value;
    const rating = document.getElementById('rating').value;

    const newRestaurant = {
        name,
        location,
        phone,
        rating,
    };

    createRestaurant(newRestaurant, handleCallback);
});

// Function to create a restaurant (POST) using callback
function createRestaurant(restaurantData, callback) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(restaurantData),
    })
        .then(response => response.json())
        .then(data => {
            callback(null, data);
        })
        .catch(error => {
            callback(error, null);
        });
}

// Function to delete a restaurant (DELETE) using callback
function deleteRestaurant(id, callback) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            callback(null, data);
        })
        .catch(error => {
            callback(error, null);
        });
}

// Function to show the update form as a pop-up modal
function showUpdateForm(id, name, location, phone, rating) {
    const updateForm = document.getElementById('update-form-container');
    updateForm.style.display = 'block'; // Show the modal

    // Set the current values into the form fields
    document.getElementById('update-name').value = name;
    document.getElementById('update-location').value = location;
    document.getElementById('update-phone').value = phone;
    document.getElementById('update-rating').value = rating;

    // Set the restaurant ID on the form's dataset for later reference
    document.getElementById('update-form').dataset.id = id;
}

// Close modal when clicking outside the form
window.onclick = function (event) {
    const modal = document.getElementById('update-form-container');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Function to update a restaurant (PUT) using callback
document.getElementById('update-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const id = this.dataset.id; // Retrieve the restaurant ID
    const updatedRestaurant = {
        name: document.getElementById('update-name').value,
        location: document.getElementById('update-location').value,
        phone: document.getElementById('update-phone').value,
        rating: document.getElementById('update-rating').value,
    };

    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRestaurant),
    })
        .then(response => response.json())
        .then(data => {
            handleCallback(null, data);
            document.getElementById('update-form').reset();
            document.getElementById('update-form-container').style.display = 'none'; // Hide the modal after update
        })
        .catch(error => {
            handleCallback(error, null);
        });
});