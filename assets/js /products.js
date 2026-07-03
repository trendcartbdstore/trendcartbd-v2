/*==========================================
TREND CART BD
PRODUCT SYSTEM
==========================================*/

const productList = [

{
id:1,
name:"Portable Blender",
category:"Kitchen",
price:1290,
oldPrice:1690,
discount:24,
rating:5,
stock:true,
image:"assets/products/blender.png"
},

{
id:2,
name:"Mini Fan",
category:"Electronics",
price:990,
oldPrice:1290,
discount:20,
rating:4,
stock:true,
image:"assets/products/fan.png"
},

{
id:3,
name:"LED Light",
category:"Electronics",
price:790,
oldPrice:1090,
discount:28,
rating:5,
stock:true,
image:"assets/products/light.png"
},

{
id:4,
name:"Phone Holder",
category:"Accessories",
price:490,
oldPrice:690,
discount:29,
rating:4,
stock:true,
image:"assets/products/holder.png"
}

];

const shopProducts=document.getElementById("shopProducts");

function renderProducts(data){

if(!shopProducts) return;

shopProducts.innerHTML="";

data.forEach(product=>{

shopProducts.innerHTML+=`

<div class="product-card">

<span class="discount">

-${product.discount}%

</span>

<div class="wishlist">

<i class="fa-regular fa-heart"></i>

</div>

<div class="product-image">

<img src="${product.image}" alt="${product.name}">

</div>

<div class="product-info">

<h3 class="product-title">

${product.name}

</h3>

<p>${product.category}</p>

<div class="rating">

${"★".repeat(product.rating)}

</div>

<div>

<span class="price">

৳${product.price}

</span>

<span class="old-price">

৳${product.oldPrice}

</span>

</div>

<span class="stock ${product.stock?"":"out"}">

${product.stock?"In Stock":"Out Of Stock"}

</span>

<div class="product-footer">

<a href="product.html?id=${product.id}" class="btn">

View

</a>

<button class="btn btn-orange add-cart"

data-id="${product.id}">

Cart

</button>

</div>

</div>

</div>

`;

});

}

renderProducts(productList);

/*==========================================
SEARCH
==========================================*/

const searchInput=document.getElementById("shopSearch");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

const result=productList.filter(product=>

product.name.toLowerCase().includes(value) ||

product.category.toLowerCase().includes(value)

);

renderProducts(result);

});

}

/*==========================================
PRICE SORT
==========================================*/

function sortLowToHigh(){

renderProducts(

[...productList].sort((a,b)=>a.price-b.price)

);

}

function sortHighToLow(){

renderProducts(

[...productList].sort((a,b)=>b.price-a.price)

);

}

/*==========================================
CATEGORY FILTER
==========================================*/

function filterCategory(category){

if(category=="All"){

renderProducts(productList);

return;

}

const result=productList.filter(product=>

product.category===category

);

renderProducts(result);

}

/*==========================================
ADD TO CART
==========================================*/

document.addEventListener("click",(e)=>{

if(e.target.classList.contains("add-cart")){

const id=Number(e.target.dataset.id);

const item=productList.find(product=>product.id===id);

let cart=JSON.parse(localStorage.getItem("trendcart_cart"))||[];

cart.push(item);

localStorage.setItem("trendcart_cart",JSON.stringify(cart));

alert("Added To Cart");

}

});