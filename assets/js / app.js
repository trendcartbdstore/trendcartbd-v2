/*====================================
TREND CART BD
APP.JS
====================================*/

const categories = [

{
id:1,
name:"Electronics",
icon:"fa-solid fa-mobile-screen"
},

{
id:2,
name:"Home",
icon:"fa-solid fa-house"
},

{
id:3,
name:"Kitchen",
icon:"fa-solid fa-kitchen-set"
},

{
id:4,
name:"Fashion",
icon:"fa-solid fa-shirt"
},

{
id:5,
name:"Beauty",
icon:"fa-solid fa-heart"
},

{
id:6,
name:"Sports",
icon:"fa-solid fa-football"
}

];

const products=[

{
id:1,
title:"Portable Blender",
price:1290,
oldPrice:1690,
discount:24,
image:"assets/products/blender.png",
rating:5
},

{
id:2,
title:"Mini Fan",
price:990,
oldPrice:1290,
discount:20,
image:"assets/products/fan.png",
rating:4
},

{
id:3,
title:"LED Light",
price:790,
oldPrice:1090,
discount:28,
image:"assets/products/light.png",
rating:5
},

{
id:4,
title:"Phone Holder",
price:490,
oldPrice:690,
discount:29,
image:"assets/products/holder.png",
rating:4
}

];

/*==========================
CATEGORY
==========================*/

const categoryGrid=document.getElementById("categoryGrid");

if(categoryGrid){

categories.forEach(category=>{

categoryGrid.innerHTML+=`

<div class="category-card">

<i class="${category.icon}" style="font-size:45px;color:var(--primary);margin-bottom:15px;"></i>

<h3>${category.name}</h3>

</div>

`;

});

}

/*==========================
PRODUCT
==========================*/

const productGrid=document.getElementById("productGrid");

if(productGrid){

products.forEach(product=>{

productGrid.innerHTML+=`

<div class="product-card">

<span class="discount">

-${product.discount}%

</span>

<div class="wishlist">

<i class="fa-regular fa-heart"></i>

</div>

<div class="product-image">

<img src="${product.image}">

</div>

<div class="product-info">

<h3 class="product-title">

${product.title}

</h3>

<div class="rating">

★★★★★

</div>

<div>

<span class="price">

৳${product.price}

</span>

<span class="old-price">

৳${product.oldPrice}

</span>

</div>

<div class="product-footer">

<a href="product.html"

class="btn">

View

</a>

<button class="btn-orange btn">

Cart

</button>

</div>

</div>

</div>

`;

});

}/*====================================
FLASH SALE COUNTDOWN
====================================*/

let flashTime = (12 * 60 * 60);

function flashCountdown(){

const box = document.querySelectorAll(".time-box");

if(!box.length) return;

const h = Math.floor(flashTime/3600);

const m = Math.floor((flashTime%3600)/60);

const s = flashTime%60;

box[0].innerHTML = String(h).padStart(2,"0");
box[1].innerHTML = String(m).padStart(2,"0");
box[2].innerHTML = String(s).padStart(2,"0");

if(flashTime>0){
flashTime--;
}else{
flashTime=12*60*60;
}

}

flashCountdown();

setInterval(flashCountdown,1000);


/*====================================
MOBILE MENU
====================================*/

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav");

if(menuBtn){

menuBtn.onclick=()=>{

nav.classList.toggle("show-menu");

};

}


/*====================================
DARK MODE
====================================*/

const themeBtn=document.createElement("div");

themeBtn.className="icon-btn";

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

const action=document.querySelector(".header-action");

if(action){

action.prepend(themeBtn);

}

if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark");

}

themeBtn.onclick=()=>{

document.body.classList.toggle("dark");

localStorage.setItem(

"theme",

document.body.classList.contains("dark")

?"dark"

:"light"

);

};


/*====================================
TOAST
====================================*/

const toast=document.createElement("div");

toast.className="toast";

document.body.appendChild(toast);

function showToast(text){

toast.innerHTML=text;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2500);

}


/*====================================
CART
====================================*/

let cart=

JSON.parse(

localStorage.getItem("trendcart_cart")

)||[];

function updateCart(){

document.querySelectorAll(".badge")[1].innerHTML=

cart.length;

localStorage.setItem(

"trendcart_cart",

JSON.stringify(cart)

);

}

function addCart(id){

const product=

products.find(item=>item.id==id);

cart.push(product);

updateCart();

showToast("Product Added To Cart");

}

updateCart();


/*====================================
WISHLIST
====================================*/

let wishlist=

JSON.parse(

localStorage.getItem("trendcart_wishlist")

)||[];

function updateWishlist(){

document.querySelectorAll(".badge")[0].innerHTML=

wishlist.length;

localStorage.setItem(

"trendcart_wishlist",

JSON.stringify(wishlist)

);

}

document.querySelectorAll(".wishlist")

.forEach((btn,index)=>{

btn.onclick=()=>{

wishlist.push(products[index]);

updateWishlist();

showToast("Added To Wishlist");

};

});

updateWishlist();


/*====================================
SEARCH
====================================*/

const search=document.querySelector(".search-box input");

if(search){

search.onkeyup=(e)=>{

const value=e.target.value.toLowerCase();

document.querySelectorAll(".product-card")

.forEach(card=>{

const title=

card.querySelector(".product-title")

.innerHTML

.toLowerCase();

card.style.display=

title.includes(value)

?"block"

:"none";

});

};

}