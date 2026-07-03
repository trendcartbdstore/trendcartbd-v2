/*==========================================
TREND CART BD
CHECKOUT SYSTEM
==========================================*/

const checkoutItems = document.getElementById("checkoutItems");
const checkoutTotal = document.getElementById("checkoutTotal");
const placeOrder = document.getElementById("placeOrder");

let checkoutData =
JSON.parse(localStorage.getItem("trendcart_checkout")) || {
items:[],
total:"৳0"
};

/*==========================================
LOAD ORDER
==========================================*/

function loadCheckout(){

if(!checkoutItems) return;

checkoutItems.innerHTML="";

let total=0;

if(checkoutData.items.length===0){

checkoutItems.innerHTML="<p>No Product Selected</p>";

checkoutTotal.innerHTML="৳0";

return;

}

checkoutData.items.forEach(item=>{

const qty=item.qty||1;

const subtotal=item.price*qty;

total+=subtotal;

checkoutItems.innerHTML+=`

<div style="display:flex;justify-content:space-between;margin-bottom:15px;">

<div>

<strong>${item.name}</strong>

<br>

<small>

${qty} × ৳${item.price}

</small>

</div>

<div>

৳${subtotal}

</div>

</div>

`;

});

checkoutTotal.innerHTML="৳"+total;

}

loadCheckout();

/*==========================================
PLACE ORDER
==========================================*/

if(placeOrder){

placeOrder.onclick=()=>{

const name=document.getElementById("name").value.trim();

const phone=document.getElementById("phone").value.trim();

const address=document.getElementById("address").value.trim();

const payment=document.getElementById("payment").value;

if(name==""){

alert("Enter Full Name");

return;

}

if(phone==""){

alert("Enter Phone Number");

return;

}

if(address==""){

alert("Enter Delivery Address");

return;

}

const order={

orderId:"TCBD"+Date.now(),

customer:{

name,

phone,

address

},

payment,

items:checkoutData.items,

total:checkoutTotal.innerHTML,

status:"Pending",

date:new Date().toLocaleString()

};

let orders=

JSON.parse(localStorage.getItem("trendcart_orders"))||[];

orders.push(order);

localStorage.setItem(

"trendcart_orders",

JSON.stringify(orders)

);

localStorage.removeItem("trendcart_cart");

localStorage.removeItem("trendcart_checkout");

alert(

"Order Placed Successfully!\n\nOrder ID: "+order.orderId

);

window.location.href="index.html";

};

}

/*==========================================
PAYMENT CHANGE
==========================================*/

const payment=document.getElementById("payment");

if(payment){

payment.addEventListener("change",()=>{

switch(payment.value){

case "bKash":
alert("Payment: bKash");
break;

case "Nagad":
alert("Payment: Nagad");
break;

case "Rocket":
alert("Payment: Rocket");
break;

default:
alert("Cash On Delivery Selected");

}

});

}

/*==========================================
INVOICE DATA
==========================================*/

function getInvoice(){

return{

orderItems:checkoutData.items,

total:checkoutTotal.innerHTML,

date:new Date().toLocaleDateString()

};

}

/*==========================================
FIREBASE READY
==========================================*/

// এখানে পরবর্তীতে Firebase Firestore-এ
// Order Save করা হবে।