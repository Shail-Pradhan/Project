// function
const menuButton = document.getElementById('menu-button');
const dropdown = document.getElementById('dropdown');
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Toggle dropdown visibility on menu button click
menuButton.addEventListener('click', function() {
    dropdown.classList.toggle('hidden'); // Toggle 'hidden' class to show/hide dropdown
});

// Close dropdown if clicked outside
document.addEventListener('click', function(event) {
    if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden'); // Hide dropdown if clicked outside
    }
});

// Function to show food items based on the selected category
function showFoodItems(category) {
    const foodList = document.getElementById('food-list');
    foodList.innerHTML = ''; // Clear previous items

    let foodItems = [];

    if (category === 'Momo') {
        foodItems = [
            { name: 'Chicken Momo', description: 'Delicious steamed dumplings filled with chicken.', img: 'images/chicken_momo.jpeg', price: 5.00 },
            { name: 'Veg Momo', description: 'Steamed dumplings filled with mixed vegetables.', img: 'veg-momo.jpg', price: 4.00 },
            { name: 'Pork Momo', description: 'Steamed pork dumplings.', img: 'pork-momo.jpg', price: 5.50 }
        ];
    } else if (category === 'Beverages') {
        foodItems = [
            { name: 'Lemonade', description: 'Freshly squeezed lemonade.', img: 'lemonade.jpg', price: 2.50 },
            { name: 'Iced Tea', description: 'Chilled iced tea with lemon.', img: 'iced-tea.jpg', price: 3.00 },
            { name: 'Soda', description: 'Chilled fizzy drink.', img: 'soda.jpg', price: 1.50 }
        ];
    } else if (category === 'Snacks') {
        foodItems = [
            { name: 'French Fries', description: 'Fried crispy potatoes', img: 'samosa.jpg', price: 2.00 },
            { name: 'Spring Roll', description: 'Crispy rolls stuffed with vegetables.', img: 'spring-roll.jpg', price: 3.00 }
        ];
    } else if (category === 'Noodles') {
        foodItems = [
            { name: 'Chicken ChowMein', description: 'Stir-fried noodles with chicken and vegetables.', img: 'chicken-chowmein.jpg', price: 6.00 },
            { name: 'Veg Hakka Noodles', description: 'Fried noodles with vegetables.', img: 'veg-hakka-noodles.jpg', price: 5.00 }
        ];
    } else if (category === 'Fried Rice') {
        foodItems = [
            { name: 'Chicken Fried Rice', description: 'Fried rice with chicken and vegetables.', img: 'chicken-fried-rice.jpg', price: 5.50 },
            { name: 'Veg Fried Rice', description: 'Fried rice with mixed vegetables.', img: 'veg-fried-rice.jpg', price: 4.50 }
        ];
    }

    // Dynamically display the food items for the selected category
    foodItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'bg-white food-item rounded shadow-md p-4';
        itemDiv.innerHTML = `
            <h3 class="font-semibold">${item.name}</h3>
            <p>${item.description}</p>
            <img src="${item.img}" alt="${item.name}" class="w-full rounded mt-2">
            <p class="font-bold">$${item.price.toFixed(2)}</p>
            <div class="quantity-control mt-2">
                <button class="decrease-quantity bg-red-500 text-white px-2 py-1 rounded">-</button>
                <span class="quantity px-2">1</span>
                <button class="increase-quantity bg-green-500 text-white px-2 py-1 rounded">+</button>
            </div>
            <button class="add-to-cart bg-blue-500 text-white px-4 py-2 rounded mt-2">Add to Cart</button>
        `;
        foodList.appendChild(itemDiv);

        // Quantity control
        const decreaseBtn = itemDiv.querySelector('.decrease-quantity');
        const increaseBtn = itemDiv.querySelector('.increase-quantity');
        const quantityElem = itemDiv.querySelector('.quantity');
        let quantity = 1;

        increaseBtn.addEventListener('click', () => {
            quantity++;
            quantityElem.textContent = quantity;
        });

        decreaseBtn.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityElem.textContent = quantity;
            }
        });

        // Add to Cart
        const addToCartBtn = itemDiv.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', () => {
            addToCart(item, quantity);
        });
    });
}

// Add item to cart
function addToCart(item, quantity) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...item, quantity });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${quantity} ${item.name}(s) added to cart.`);
}

// Show Momo items by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showFoodItems('Momo');
});

// Function to view cart (redirect to cart page)
document.getElementById('cart-button').addEventListener('click', () => {
    window.location.href = 'cart.html'; // Navigate to cart page
});

function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    renderCart(); // Re-render the cart
}

