// Load existing products from localStorage or default
let products = JSON.parse(localStorage.getItem('products')) || [
    {name: "Product 1", price: "₹500", img: "images/product1.jpg", details: "Awesome product 1"},
    {name: "Product 2", price: "₹800", img: "images/product2.jpg", details: "Awesome product 2"},
    {name: "Product 3", price: "₹1200", img: "images/product3.jpg", details: "Awesome product 3"}
];

// Function to render products on index.html
function renderProducts() {
    const productList = document.querySelector('main');
    if (!productList) return; // Skip if not on index.html
    productList.innerHTML = ''; // Clear

    products.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.img}" alt="${prod.name}">
            <div class="product-info">
                <h3>${prod.name}</h3>
                <p class="price">${prod.price}</p>
                <p>${prod.details}</p>
            </div>
        `;
        productList.appendChild(card);
    });
}

// Initial render
renderProducts();

// Admin Page: handle Add Product form
const form = document.getElementById('product-form');
if(form){
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const details = document.getElementById('details').value;
        const img = document.getElementById('img').value;

        const newProduct = {name, price, details, img};
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        alert('Product Added Successfully!');
        form.reset();
    });
}

