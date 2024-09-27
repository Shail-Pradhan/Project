// function
const menuButton = document.getElementById('menu-button');
    const dropdown = document.getElementById('dropdown');

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
            { name: 'Chicken Momo', description: 'Delicious steamed dumplings filled with chicken.', img: 'images/chicken_momo.jpeg', price: '$5.00' },
            { name: 'Veg Momo', description: 'Steamed dumplings filled with mixed vegetables.', img: 'veg-momo.jpg', price: '$4.00' },
            { name: 'Pork Momo', description: 'Steamed pork dumplings.', img: 'pork-momo.jpg', price: '$5.50' }
        ];
    } else if (category === 'Beverages') {
        foodItems = [
            { name: 'Lemonade', description: 'Freshly squeezed lemonade.', img: 'lemonade.jpg', price: '$2.50' },
            { name: 'Iced Tea', description: 'Chilled iced tea with lemon.', img: 'iced-tea.jpg', price: '$3.00' },
            { name: 'Soda', description: 'Chilled fizzy drink.', img: 'soda.jpg', price: '$1.50' }
        ];
    } else if (category === 'Snacks') {
        foodItems = [
            { name: 'French Fries', description: 'Fried crispy potatoes', img: 'samosa.jpg', price: '$2.00' },
            { name: 'Spring Roll', description: 'Crispy rolls stuffed with vegetables.', img: 'spring-roll.jpg', price: '$3.00' }
        ];
    } else if (category === 'Noodles') {
        foodItems = [
            { name: 'Chicken ChowMein', description: 'Stir-fried noodles with chicken and vegetables.', img: 'chicken-chowmein.jpg', price: '$6.00' },
            { name: 'Veg Hakka Noodles', description: 'Fried noodles with vegetables.', img: 'veg-hakka-noodles.jpg', price: '$5.00' }
        ];
    } else if (category === 'Fried Rice') {
        foodItems = [
            { name: 'Chicken Fried Rice', description: 'Fried rice with chicken and vegetables.', img: 'chicken-fried-rice.jpg', price: '$5.50' },
            { name: 'Veg Fried Rice', description: 'Fried rice with mixed vegetables.', img: 'veg-fried-rice.jpg', price: '$4.50' }
        ];
    }

    // Dynamically display the food items for the selected category
    foodItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'bg-white food-item rounded shadow-md';
        itemDiv.innerHTML = `
            <h3 class="font-semibold">${item.name}</h3>
            <p>${item.description}</p>
            <img src="${item.img}" alt="${item.name}" class="w-full rounded mt-2">
            <p class="font-bold">${item.price}</p>
        `;
        foodList.appendChild(itemDiv);
    });
}

// Show Momo items by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showFoodItems('Momo');
});
