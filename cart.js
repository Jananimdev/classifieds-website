document.addEventListener("DOMContentLoaded", function () {
    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Get the cart list element
    const cartList = document.getElementById("cart-list");

    // Display cart items
    displayCartItems(cartItems);

    // Function to display cart items
    function displayCartItems(cartItems) {
        cartList.innerHTML = ""; // Clear previous content

        cartItems.forEach((item) => {
            const listItem = document.createElement("li");
            const productImg = document.createElement("img");
            const placeOrderButton = document.createElement("button");

            productImg.src = item.img; // Set the image source
            productImg.alt = item.name; // Set the alt text

            placeOrderButton.textContent = "Place Order";
            placeOrderButton.addEventListener("click", () => {
                // Prompt the user for their address
                const userAddress = prompt("Please enter your address:");

                if (userAddress) {
                    // Handle placing the order with the user's address
                    const orderMessage = `Order placed for ${item.name} to address: ${userAddress}`;
                    alert(orderMessage);
                } else {
                    // If the user cancels or enters no address
                    alert("Order placement canceled.");
                }
            });

            listItem.appendChild(productImg); // Add image to list item
            listItem.innerHTML += `${item.name} - Price: ${item.price}`;
            listItem.appendChild(placeOrderButton); // Add "Place Order" button
            cartList.appendChild(listItem);
        });
    }
});
