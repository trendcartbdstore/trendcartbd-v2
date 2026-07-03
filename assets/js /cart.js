/*==========================================
TREND CART BD
CART SYSTEM
==========================================*/

let cart = JSON.parse(localStorage.getItem("trendcart_cart")) || [];

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const clearCart = document.getElementById("clearCart");

/*==========================================
RENDER CART
==========================================*/

function renderCart(){

if(!cartItems) return;

cartItems.innerHTML="";

let total=0;

if(cart.length===0){

cartItems.innerHTML=`

<div class="card" style="padding:40px;text-align:center;grid-column:1/-1;">

<h2>Your Cart Is Empty</h2>

<br>

<a href="shop.html" class="btn">

Continue Shopping

</a>

</div>

`;

cartTotal.innerHTML="৳0";

return;

}

cart.forEach((item,index)=>{

total+=item.price*(item.qty||1);

cartItems.innerHTML+=`

<div class="product-card">

<div class="product-image">

<img src="${item.image}" alt="${item.name}">

</div>

<div class="product-info">

<h3 class="product-title">

${item.name}

</h3>

<p>${item.category||""}</p>

<div class="price">

৳${item.price}

</div>

<div style="display:flex;align-items:center;gap:10px;margin:15px 0;">

<button class="btn qty-minus" data-index="${index}">-</button>

<span>${item.qty||1}</span>

<button class="btn qty-plus" data-index="${index}">+</button>

</div>

<button class="btn btn-orange remove-item"

data-index="${index}">

Remove

</button>

</div>

</div>

`;

});

cartTotal.innerHTML="৳"+total;

localStorage.setItem(

"trendcart_cart",

JSON.stringify(cart)

);

}

renderCart();

/*==========================================
QUANTITY
==========================================*/

document.addEventListener("click",(e)=>{

if(e.target.classList.contains("qty-plus")){

const i=e.target.dataset.index;

cart[i].qty=(cart[i].qty||1)+1;

renderCart();

}

if(e.target.classList.contains("qty-minus")){

const i=e.target.dataset.index;

if((cart[i].qty||1)>1){

cart[i].qty--;

renderCart();

}

}

});

/*==========================================
REMOVE
==========================================*/

document.addEventListener("click",(e)=>{

if(e.target.classList.contains("remove-item")){

const i=e.target.dataset.index;

cart.splice(i,1);

renderCart();

}

});

/*==========================================
CLEAR CART
==========================================*/

if(clearCart){

clearCart.onclick=()=>{

if(confirm("Clear all cart items?")){

cart=[];

localStorage.removeItem("trendcart_cart");

renderCart();

}

};

}

/*==========================================
COUPON SYSTEM
==========================================*/

function applyCoupon(code){

let total=parseFloat(cartTotal.innerHTML.replace("৳",""));

if(code==="TREND10"){

total=total-(total*0.10);

cartTotal.innerHTML="৳"+Math.round(total);

alert("10% Discount Applied");

}

else{

alert("Invalid Coupon");

}

}

/*==========================================
CHECKOUT DATA
==========================================*/

function saveCheckout(){

localStorage.setItem(

"trendcart_checkout",

JSON.stringify({

items:cart,

total:cartTotal.innerHTML

})

);

}

document.querySelectorAll("a[href='checkout.html']").forEach(btn=>{

btn.addEventListener("click",saveCheckout);

});