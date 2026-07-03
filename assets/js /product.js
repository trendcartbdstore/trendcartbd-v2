/*==========================================
TREND CART BD
PRODUCT DETAILS
==========================================*/

const products=[

{
id:1,
name:"Portable Blender",
price:1290,
oldPrice:1690,
discount:24,
category:"Kitchen",
stock:true,
rating:5,
image:"assets/products/blender.png",
description:"Rechargeable Portable Blender. Perfect for Juice, Smoothie, Protein Shake and Travel."
},

{
id:2,
name:"Mini Fan",
price:990,
oldPrice:1290,
discount:20,
category:"Electronics",
stock:true,
rating:4,
image:"assets/products/fan.png",
description:"USB Rechargeable Mini Fan with 3 Speed Modes."
},

{
id:3,
name:"LED Light",
price:790,
oldPrice:1090,
discount:28,
category:"Electronics",
stock:true,
rating:5,
image:"assets/products/light.png",
description:"High Brightness LED Light with Low Power Consumption."
},

{
id:4,
name:"Phone Holder",
price:490,
oldPrice:690,
discount:29,
category:"Accessories",
stock:true,
rating:4,
image:"assets/products/holder.png",
description:"Universal Mobile Holder for Car & Desk."
}

];


/*==========================================
GET PRODUCT ID
==========================================*/

const params=new URLSearchParams(window.location.search);

const productId=parseInt(params.get("id"))||1;

const product=products.find(p=>p.id===productId);


/*==========================================
LOAD PRODUCT
==========================================*/

if(product){

document.getElementById("productTitle").innerHTML=product.name;

document.getElementById("productImage").src=product.image;

document.getElementById("productDescription").innerHTML=product.description;

document.querySelector(".price").innerHTML=

`৳${product.price}
<span class="old-price">৳${product.oldPrice}</span>`;

}


/*==========================================
ADD TO CART
==========================================*/

const addCart=document.getElementById("addCart");

if(addCart){

addCart.onclick=()=>{

let cart=

JSON.parse(localStorage.getItem("trendcart_cart"))||[];

cart.push(product);

localStorage.setItem(

"trendcart_cart",

JSON.stringify(cart)

);

alert("Product Added To Cart");

};

}


/*==========================================
RELATED PRODUCTS
==========================================*/

const related=document.getElementById("relatedProducts");

if(related){

const items=products.filter(

p=>p.id!==product.id

);

items.forEach(item=>{

related.innerHTML+=`

<div class="product-card">

<span class="discount">

-${item.discount}%

</span>

<div class="product-image">

<img src="${item.image}">

</div>

<div class="product-info">

<h3 class="product-title">

${item.name}

</h3>

<div class="rating">

${"★".repeat(item.rating)}

</div>

<div>

<span class="price">

৳${item.price}

</span>

<span class="old-price">

৳${item.oldPrice}

</span>

</div>

<div class="product-footer">

<a href="product.html?id=${item.id}"

class="btn">

View

</a>

</div>

</div>

</div>

`;

});

}


/*==========================================
BUY NOW
==========================================*/

document.querySelector(".btn-orange").onclick=()=>{

window.location.href="checkout.html?id="+product.id;

};