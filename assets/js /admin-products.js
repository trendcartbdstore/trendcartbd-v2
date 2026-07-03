/*==========================================
ADMIN PRODUCT SYSTEM
==========================================*/

let products =
JSON.parse(localStorage.getItem("trendcart_products")) || [];

const grid = document.getElementById("adminProducts");
const form = document.getElementById("productForm");

/*==========================================
TOGGLE FORM
==========================================*/

document.getElementById("openFormBtn").onclick = () => {
form.style.display =
form.style.display === "none" ? "block" : "none";
};

/*==========================================
RENDER PRODUCTS
==========================================*/

function render() {

if (!grid) return;

grid.innerHTML = "";

products.forEach((p, index) => {

grid.innerHTML += `

<div class="product-card">

<div class="product-image">
<img src="${p.image}">
</div>

<div class="product-info">

<h3 class="product-title">${p.name}</h3>

<p>${p.category}</p>

<div class="price">৳${p.price}</div>

<button class="btn btn-orange" onclick="deleteProduct(${index})">
Delete
</button>

</div>

</div>

`;

});

}

render();

/*==========================================
SAVE PRODUCT
==========================================*/

document.getElementById("saveProduct").onclick = () => {

const name = document.getElementById("pName").value;
const price = document.getElementById("pPrice").value;
const oldPrice = document.getElementById("pOldPrice").value;
const category = document.getElementById("pCategory").value;
const image = document.getElementById("pImage").value;

if (!name || !price) {
alert("Fill Required Fields");
return;
}

const newProduct = {
id: Date.now(),
name,
price: Number(price),
oldPrice: Number(oldPrice),
category,
image
};

products.push(newProduct);

localStorage.setItem("trendcart_products", JSON.stringify(products));

render();

form.reset?.();

alert("Product Added");

};

/*==========================================
DELETE PRODUCT
==========================================*/

function deleteProduct(index) {

if (confirm("Delete Product?")) {

products.splice(index, 1);

localStorage.setItem("trendcart_products", JSON.stringify(products));

render();

}

}

/*==========================================
FIREBASE READY
==========================================*/

// Firestore Product CRUD
// Image Upload Storage
// Real-time Sync
// Admin Approval System
// Bulk Import/Export