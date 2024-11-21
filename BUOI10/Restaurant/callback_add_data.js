// Function to fetch restaurant data from the API
function getRestaurants(callback) {
    fetch('https://671947f87fc4c5ff8f4d1684.mockapi.io/Restaurant')
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

// Callback function to handle the fetched restaurant data
function handleRestaurants(error, data) {
    if (error) {
        console.error('Error fetching restaurant data:', error);
    } else {
        const restaurantList = document.getElementById('restaurant-list');
        data.forEach(restaurant => {
            // Create a card for each restaurant
            const card = document.createElement('div');
            card.classList.add('restaurant-card');
            card.innerHTML = `
                <h3>${restaurant.name}</h3>
                <p><strong>Address:</strong> ${restaurant.address}</p>
                <p><strong>Phone:</strong> ${restaurant.phone}</p>
                <p><strong>Rating:</strong> ${restaurant.rating}/5</p>
            `;
            restaurantList.appendChild(card);
        });
    }
}

// Call the getRestaurants function with the handleRestaurants callback
getRestaurants(handleRestaurants);
