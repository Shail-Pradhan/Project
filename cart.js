let cart = JSON.parse(localStorage.getItem('cart')) || [];

        function renderCart() {
            const cartContainer = document.getElementById('cart-container');
            cartContainer.innerHTML = ''; // Clear existing items

            let totalAmount = 0;

            cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                totalAmount += itemTotal;

                cartContainer.innerHTML += `
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex items-center">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded mr-4">
                            <div>
                                <h3 class="text-lg font-bold">${item.name}</h3>
                                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <p class="font-bold mr-4">$${itemTotal.toFixed(2)}</p>
                            <button class="bg-red-500 text-white px-3 py-1 rounded" onclick="removeItem(${index})">Remove</button>
                        </div>
                    </div>
                `;
            });

            document.getElementById('total-amount').textContent = `Total: $${totalAmount.toFixed(2)}`;
        }

        function removeItem(index) {
            cart.splice(index, 1); // Remove the item at the given index
            localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
            renderCart(); // Re-render the cart
        }

        // Render cart on page load
        renderCart();

        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }

            // Proceed to checkout (For now, we just clear the cart)
            alert('Thank you for your order!');
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart(); // Re-render the cart
        }