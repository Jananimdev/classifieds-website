document.addEventListener("DOMContentLoaded", function () {
    const categoryLinks = document.querySelectorAll("#category-menu a");

    categoryLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Hide all category sections
            const categorySections = document.querySelectorAll("section");
            categorySections.forEach((section) => {
                section.classList.add("hidden");
            });

            // Show the selected category section
            const categoryName = link.getAttribute("data-category");
            const categorySection = document.getElementById(categoryName);
            categorySection.classList.remove("hidden");
        });
    });

    
    const categoryLink = document.getElementById("category-link");
    
    categoryLink.addEventListener("click", function (e) {
        e.preventDefault();
        const categoryMenu = document.getElementById("category-menu");
        categoryMenu.classList.toggle("hidden");
    });
    const signInButton = document.getElementById("sign-in-button");
    const signUpButton = document.getElementById("sign-up-button");
    const signInForm = document.getElementById("sign-in-form");
    const signUpForm = document.getElementById("sign-up-form");

    signInButton.addEventListener("click", () => {
        signInForm.classList.remove("hidden");
        signUpForm.classList.add("hidden");
    });

    signUpButton.addEventListener("click", () => {
        signUpForm.classList.remove("hidden");
        signInForm.classList.add("hidden");
    });

    const signInFormElement = document.getElementById("sign-in-form");
    signInFormElement.addEventListener("submit", (e) => {
        e.preventDefault();
        // Handle sign-in logic here
        alert("Sign In logic should be implemented here.");
    });

    const signUpFormElement = document.getElementById("sign-up-form");
    signUpFormElement.addEventListener("submit", (e) => {
        e.preventDefault();
        // Handle sign-up logic here
        alert("Sign Up logic should be implemented here.");
    });

    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-name");
            const productPrice = button.getAttribute("data-price");
            const productImg = button.getAttribute("data-img");

            // Create a new product object
            const product = {
                name: productName,
                price: productPrice,
                img: productImg,
            };

            // Retrieve cart items from local storage
            const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

            // Add the product to the cart items array
            cartItems.push(product);

            // Store the updated cart items in local storage
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        });
    });
    const imageInput = document.getElementById("product-image");
    const imagePreview = document.getElementById("image-preview");
    const previewImage = document.getElementById("preview");

    imageInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImage.src = e.target.result;
                imagePreview.style.display = "block"; // Show the preview container
            };
            reader.readAsDataURL(file);
        } else {
            // Clear the preview if no image is selected
            previewImage.src = "";
            imagePreview.style.display = "none"; // Hide the preview container
        }
    });

    const sellForm = document.getElementById("sell-form");

    sellForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const productName = document.getElementById("product-name").value;
        const productPrice = document.getElementById("product-price").value;
        const productDescription = document.getElementById("product-description").value;
        const productImage = document.getElementById("product-image").files[0];

        if (productName && productPrice && productDescription && productImage) {
            // Create a product object
            const product = {
                name: productName,
                price: productPrice,
                description: productDescription,
                image: productImage.name,
            };

            // Store the product in local storage
            let productsForSale = JSON.parse(localStorage.getItem("productsForSale")) || [];
            productsForSale.push(product);
            localStorage.setItem("productsForSale", JSON.stringify(productsForSale));

            // Clear the form fields
            sellForm.reset();

            // Optional: Display a success message or redirect the user
        } else {
            alert("Please fill in all the required fields.");
        }
    });

    // Index Page (Home)
    const productsContainer = document.getElementById("products-for-sale");

    function displayProductsForSale() {
        productsContainer.innerHTML = "";

        // Retrieve products for sale from local storage
        const productsForSale = JSON.parse(localStorage.getItem("productsForSale")) || [];

        productsForSale.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            // Create HTML elements to display product information
            const productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.name;

            const productName = document.createElement("h3");
            productName.textContent = product.name;

            const productPrice = document.createElement("p");
            productPrice.textContent = `Price: $${product.price}`;

            const productDescription = document.createElement("p");
            productDescription.textContent = product.description;

            // Append elements to the product card
            productCard.appendChild(productImage);
            productCard.appendChild(productName);
            productCard.appendChild(productPrice);
            productCard.appendChild(productDescription);

            productsContainer.appendChild(productCard);
        });
    }

    // Initialize the product display
    displayProductsForSale();
    
});
